import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REVIEW_STATUSES = new Set(["unreviewed", "in_review", "changes_requested", "approved"]);
const BANKS = {
  "speaking-exam": {
    source: "content/sources/speaking-exam.json",
    output: "lib/content/speakingExamItems.ts",
  },
  zinstaken: {
    source: "content/sources/zinstaken.json",
    output: "lib/content/zinstaken.ts",
  },
  deelschrijftaken: {
    source: "content/sources/deelschrijftaken.json",
    output: "lib/content/deelschrijftaken.ts",
  },
  "writing-exam": {
    source: "content/sources/writing-exam.json",
    output: "lib/content/writingExamItems.ts",
  },
};
const WRITING_RUNTIME_FIELDS = [
  "id", "examTrack", "cefrLevel", "skill", "taskType", "topic", "register", "regionVariant",
  "targetLemmas", "errorCodes", "l1ContrastFlag", "singleListen", "allowedTools", "timeLimitS",
  "responseMinLen", "difficultyTheta", "taskPrompt", "requirements", "modelAnswer",
];

function fail(message) {
  throw new Error(message);
}

function resolveWorkspacePath(requestedPath) {
  const resolved = path.resolve(ROOT, requestedPath);
  if (resolved !== ROOT && !resolved.startsWith(`${ROOT}${path.sep}`)) {
    fail(`Path must stay inside the repository: ${requestedPath}`);
  }
  return resolved;
}

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

function validateReview(review, itemLabel) {
  if (!review || typeof review !== "object") fail(`${itemLabel}: review metadata is required`);
  if (!REVIEW_STATUSES.has(review.status)) fail(`${itemLabel}: invalid review status ${review.status}`);
  for (const field of ["reviewer", "reviewedAt", "notes"]) {
    if (review[field] !== null && typeof review[field] !== "string") {
      fail(`${itemLabel}: review.${field} must be a string or null`);
    }
  }
  if (review.reviewedAt && !isIsoDate(review.reviewedAt)) {
    fail(`${itemLabel}: review.reviewedAt must use YYYY-MM-DD`);
  }
  if (review.status === "approved" && (!review.reviewer || !review.reviewedAt)) {
    fail(`${itemLabel}: approved items require reviewer and reviewedAt`);
  }
}

function validateBank(document, expectedBank) {
  if (document.schemaVersion !== 1) fail(`${expectedBank}: unsupported schemaVersion`);
  if (document.bank !== expectedBank) fail(`${expectedBank}: bank field does not match filename registry`);
  if (!Array.isArray(document.sources) || document.sources.length === 0) fail(`${expectedBank}: sources are required`);

  const sourceIds = new Set();
  for (const source of document.sources) {
    if (!source.id || sourceIds.has(source.id)) fail(`${expectedBank}: source IDs must be non-empty and unique`);
    sourceIds.add(source.id);
    for (const field of ["origin", "title", "license", "url"]) {
      if (typeof source[field] !== "string" || !source[field].trim()) fail(`${expectedBank}/${source.id}: ${field} is required`);
    }
    if (source.verifiedAt !== null && !isIsoDate(source.verifiedAt)) {
      fail(`${expectedBank}/${source.id}: verifiedAt must use YYYY-MM-DD or null`);
    }
  }

  if (!Array.isArray(document.items) || document.items.length === 0) fail(`${expectedBank}: items are required`);
  const itemIds = new Set();
  const durations = new Map();
  for (const item of document.items) {
    const label = `${expectedBank}/${item.id ?? "<missing-id>"}`;
    if (typeof item.id !== "string" || !item.id.trim() || itemIds.has(item.id)) fail(`${label}: IDs must be non-empty and unique`);
    itemIds.add(item.id);
    if (expectedBank === "speaking-exam") {
      if (typeof item.text !== "string" || !item.text.trim()) fail(`${label}: text is required`);
      if (typeof item.topic !== "string" || !item.topic.trim()) fail(`${label}: topic is required`);
      if (item.timeLimitS !== 20 && item.timeLimitS !== 30) fail(`${label}: timeLimitS must be 20 or 30`);
      durations.set(item.timeLimitS, (durations.get(item.timeLimitS) ?? 0) + 1);
    } else if (expectedBank === "zinstaken") {
      for (const field of ["prompt", "sampleAnswer", "explanationRu"]) {
        if (typeof item[field] !== "string" || !item[field].trim()) fail(`${label}: ${field} is required`);
      }
    } else if (expectedBank === "deelschrijftaken") {
      for (const field of ["instructionRu", "taskPrompt"]) {
        if (typeof item[field] !== "string" || !item[field].trim()) fail(`${label}: ${field} is required`);
      }
      if (!Array.isArray(item.fields) || item.fields.length < 2) fail(`${label}: at least two fields are required`);
      const fieldIds = new Set();
      for (const field of item.fields) {
        if (typeof field.id !== "string" || !field.id.trim() || fieldIds.has(field.id)) {
          fail(`${label}: field IDs must be non-empty and unique within the task`);
        }
        fieldIds.add(field.id);
        for (const property of ["label", "sampleAnswer"]) {
          if (typeof field[property] !== "string" || !field[property].trim()) fail(`${label}/${field.id}: ${property} is required`);
        }
      }
    } else if (expectedBank === "writing-exam") {
      for (const field of ["taskPrompt", "modelAnswer", "topic"]) {
        if (typeof item[field] !== "string" || !item[field].trim()) fail(`${label}: ${field} is required`);
      }
      if (!Array.isArray(item.requirements) || item.requirements.length < 3 || item.requirements.some((value) => typeof value !== "string" || !value.trim())) {
        fail(`${label}: at least three non-empty requirements are required`);
      }
      const fixed = {
        examTrack: "staatsexamen_p1", skill: "writing", taskType: "short_write", register: "neutral",
        regionVariant: "netherlandic", l1ContrastFlag: true, singleListen: false, allowedTools: "dictionary",
      };
      for (const [field, value] of Object.entries(fixed)) {
        if (item[field] !== value) fail(`${label}: ${field} must be ${JSON.stringify(value)}`);
      }
      if (item.cefrLevel !== "A2" && item.cefrLevel !== "B1") fail(`${label}: cefrLevel must be A2 or B1`);
      if (!Array.isArray(item.targetLemmas) || !Array.isArray(item.errorCodes)) fail(`${label}: lemma and error-code arrays are required`);
      if (!Number.isFinite(item.timeLimitS) || item.timeLimitS <= 0) fail(`${label}: timeLimitS must be positive`);
      if (!Number.isFinite(item.responseMinLen) || item.responseMinLen <= 0) fail(`${label}: responseMinLen must be positive`);
    }
    if (!item.provenance || !sourceIds.has(item.provenance.sourceId)) {
      fail(`${label}: provenance.sourceId must reference a declared source`);
    }
    if (typeof item.provenance.locator !== "string" || !item.provenance.locator.trim()) {
      fail(`${label}: provenance.locator is required`);
    }
    validateReview(item.review, label);
  }

  if (expectedBank === "speaking-exam") {
    for (const duration of [20, 30]) {
      if ((durations.get(duration) ?? 0) < 8) fail(`${expectedBank}: needs at least 8 items with a ${duration}s limit`);
    }
  }
}

async function loadBank(bankName) {
  const config = BANKS[bankName];
  if (!config) fail(`Unknown bank ${bankName}. Available banks: ${Object.keys(BANKS).join(", ")}`);
  const sourcePath = path.join(ROOT, config.source);
  const document = JSON.parse(await readFile(sourcePath, "utf8"));
  validateBank(document, bankName);
  return { config, document, sourcePath };
}

function generateSpeakingExam(document, sourcePath) {
  const sourceLabel = path.relative(ROOT, sourcePath).replaceAll("\\", "/");
  const items = document.items
    .map(
      (item) =>
        `  { id: ${JSON.stringify(item.id)}, topic: ${JSON.stringify(item.topic)}, timeLimitS: ${item.timeLimitS}, text: ${JSON.stringify(item.text)} },`,
    )
    .join("\n");

  return `// Generated by scripts/content-pipeline.mjs from ${sourceLabel}. Do not edit directly.\n\nexport interface SpeakingExamItem {\n  id: string;\n  text: string;\n  topic: string;\n  timeLimitS: 20 | 30;\n}\n\n// Original prompts for the signal-paced Spreken demo. The source document\n// records provenance and editorial review state without shipping that metadata\n// in the learner bundle. The pool contains at least 8 short and 8 medium items.\nexport const SPEAKING_EXAM_ITEMS: SpeakingExamItem[] = [\n${items}\n];\n`;
}

function generateZinstaken(document, sourcePath) {
  const sourceLabel = path.relative(ROOT, sourcePath).replaceAll("\\", "/");
  const items = document.items
    .map(
      (item) =>
        `  { id: ${JSON.stringify(item.id)}, prompt: ${JSON.stringify(item.prompt)}, sampleAnswer: ${JSON.stringify(item.sampleAnswer)}, explanationRu: ${JSON.stringify(item.explanationRu)} },`,
    )
    .join("\n");

  return `// Generated by scripts/content-pipeline.mjs from ${sourceLabel}. Do not edit directly.\n\nexport interface ZinsTaakItem {\n  id: string;\n  prompt: string;\n  sampleAnswer: string;\n  explanationRu: string;\n}\n\n// Original one-sentence Schrijven tasks. Source and educator-review metadata\n// remain in the source document rather than the learner bundle.\nexport const ZINSTAKEN_ITEMS: ZinsTaakItem[] = [\n${items}\n];\n`;
}

function generateDeelschrijftaken(document, sourcePath) {
  const sourceLabel = path.relative(ROOT, sourcePath).replaceAll("\\", "/");
  const items = document.items
    .map(
      (item) =>
        `  { id: ${JSON.stringify(item.id)}, instructionRu: ${JSON.stringify(item.instructionRu)}, taskPrompt: ${JSON.stringify(item.taskPrompt)}, fields: ${JSON.stringify(item.fields)} },`,
    )
    .join("\n");

  return `// Generated by scripts/content-pipeline.mjs from ${sourceLabel}. Do not edit directly.\n\nexport interface DeelSchrijfTaakField {\n  id: string;\n  label: string;\n  sampleAnswer: string;\n}\n\nexport interface DeelSchrijfTaakItem {\n  id: string;\n  instructionRu: string;\n  taskPrompt: string;\n  fields: DeelSchrijfTaakField[];\n}\n\n// Original partial-writing tasks. Source and educator-review metadata remain\n// in the source document rather than the learner bundle.\nexport const DEELSCHRIJFTAKEN_ITEMS: DeelSchrijfTaakItem[] = [\n${items}\n];\n`;
}

function generateWritingExam(document, sourcePath) {
  const sourceLabel = path.relative(ROOT, sourcePath).replaceAll("\\", "/");
  const items = document.items
    .map((item) => {
      const runtime = Object.fromEntries(WRITING_RUNTIME_FIELDS.map((field) => [field, item[field]]));
      return `  ${JSON.stringify(runtime)},`;
    })
    .join("\n");

  return `// Generated by scripts/content-pipeline.mjs from ${sourceLabel}. Do not edit directly.\n\nimport { ShortWriteItem } from "../types";\n\n// Original korte-schrijftaak-style practice. Source provenance and educator\n// review metadata remain outside the learner bundle.\nexport const WRITING_EXAM_ITEMS: ShortWriteItem[] = [\n${items}\n];\n`;
}

function generateBank(bankName, document, sourcePath) {
  if (bankName === "speaking-exam") return generateSpeakingExam(document, sourcePath);
  if (bankName === "zinstaken") return generateZinstaken(document, sourcePath);
  if (bankName === "deelschrijftaken") return generateDeelschrijftaken(document, sourcePath);
  if (bankName === "writing-exam") return generateWritingExam(document, sourcePath);
  fail(`No generator registered for ${bankName}`);
}

async function generatedOutput(bankName) {
  const loaded = await loadBank(bankName);
  return { ...loaded, output: generateBank(bankName, loaded.document, loaded.sourcePath) };
}

async function generate() {
  for (const bankName of Object.keys(BANKS)) {
    const { config, output } = await generatedOutput(bankName);
    const outputPath = path.join(ROOT, config.output);
    await writeFile(outputPath, output, "utf8");
    console.log(`generated ${config.output}`);
  }
}

async function check() {
  let drifted = false;
  for (const bankName of Object.keys(BANKS)) {
    const { config, output } = await generatedOutput(bankName);
    const current = await readFile(path.join(ROOT, config.output), "utf8");
    if (current.replaceAll("\r\n", "\n") !== output) {
      console.error(`${config.output} is stale; run npm run content:generate`);
      drifted = true;
    } else {
      console.log(`verified ${config.output}`);
    }
  }
  if (drifted) process.exitCode = 1;
}

function encodeTsv(value) {
  return String(value ?? "").replaceAll("\\", "\\\\").replaceAll("\t", "\\t").replaceAll("\r", "").replaceAll("\n", "\\n");
}

function decodeTsv(value) {
  let result = "";
  for (let index = 0; index < value.length; index++) {
    if (value[index] !== "\\") {
      result += value[index];
      continue;
    }
    index++;
    if (index >= value.length) fail("Review TSV contains a trailing escape character");
    result += value[index] === "t" ? "\t" : value[index] === "n" ? "\n" : value[index];
  }
  return result;
}

function reviewContext(item) {
  return item.text ?? item.prompt ?? item.taskPrompt ?? "";
}

async function exportReview(bankName, requestedPath) {
  const { document } = await loadBank(bankName);
  const rows = ["bank\tid\tstatus\treviewer\treviewedAt\tnotes\ttext"];
  for (const item of document.items) {
    rows.push(
      [bankName, item.id, item.review.status, item.review.reviewer, item.review.reviewedAt, item.review.notes, reviewContext(item)]
        .map(encodeTsv)
        .join("\t"),
    );
  }
  const outputPath = resolveWorkspacePath(requestedPath ?? `content/reviews/${bankName}.review.tsv`);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${rows.join("\n")}\n`, "utf8");
  console.log(`exported ${path.relative(ROOT, outputPath)}`);
}

async function importReview(bankName, requestedPath) {
  if (!requestedPath) fail("review-import requires the path to an edited TSV file");
  const loaded = await loadBank(bankName);
  const reviewPath = resolveWorkspacePath(requestedPath);
  const lines = (await readFile(reviewPath, "utf8")).replaceAll("\r\n", "\n").replace(/\n+$/, "").split("\n");
  const expectedHeader = "bank\tid\tstatus\treviewer\treviewedAt\tnotes\ttext";
  if (lines.shift() !== expectedHeader) fail(`Review TSV header must be: ${expectedHeader}`);

  const rows = new Map();
  for (const [lineIndex, line] of lines.entries()) {
    const fields = line.split("\t").map(decodeTsv);
    if (fields.length !== 7) fail(`Review TSV row ${lineIndex + 2} must contain 7 columns`);
    const [rowBank, id, status, reviewer, reviewedAt, notes, text] = fields;
    if (rowBank !== bankName) fail(`Review TSV row ${lineIndex + 2} belongs to ${rowBank}, not ${bankName}`);
    if (rows.has(id)) fail(`Review TSV contains duplicate item ${id}`);
    rows.set(id, {
      status,
      reviewer: reviewer || null,
      reviewedAt: reviewedAt || null,
      notes: notes || null,
      text,
    });
  }

  for (const item of loaded.document.items) {
    const review = rows.get(item.id);
    if (!review) fail(`Review TSV is missing item ${item.id}`);
    if (review.text !== reviewContext(item)) fail(`Review TSV text for ${item.id} is stale or was edited`);
    validateReview(review, `${bankName}/${item.id}`);
    item.review = {
      status: review.status,
      reviewer: review.reviewer,
      reviewedAt: review.reviewedAt,
      notes: review.notes,
    };
    rows.delete(item.id);
  }
  if (rows.size > 0) fail(`Review TSV contains unknown items: ${[...rows.keys()].join(", ")}`);

  await writeFile(loaded.sourcePath, `${JSON.stringify(loaded.document, null, 2)}\n`, "utf8");
  console.log(`imported reviews into ${loaded.config.source}`);
}

const [command = "check", bankName = "speaking-exam", requestedPath] = process.argv.slice(2);

try {
  if (command === "generate") await generate();
  else if (command === "check") await check();
  else if (command === "review-export") await exportReview(bankName, requestedPath);
  else if (command === "review-import") await importReview(bankName, requestedPath);
  else fail(`Unknown command ${command}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
