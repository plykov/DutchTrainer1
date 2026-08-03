"use client";

import { useAppStore, UiLang } from "./store";

// UI-chrome translations only. Pedagogical content (grammar/vocab/reading/
// listening/interaction explanations) stays Russian regardless of uiLang —
// it's Russian-L1-contrastive by design (§5), so translating it to English
// would remove the thing it exists to explain. See README for this
// tradeoff.
const DICT = {
  nav_overview: { ru: "Обзор", en: "Overview" },
  nav_practice: { ru: "Практика", en: "Practice" },
  nav_vocab: { ru: "Словарь", en: "Vocabulary" },
  nav_reading: { ru: "Чтение", en: "Reading" },
  nav_listening: { ru: "Аудирование", en: "Listening" },
  nav_writing: { ru: "Письмо", en: "Writing" },
  nav_speaking: { ru: "Говорение", en: "Speaking" },
  nav_interaction: { ru: "Взаимодействие", en: "Interaction" },
  nav_exam: { ru: "Симуляция экзамена", en: "Exam simulation" },
  nav_settings: { ru: "Настройки", en: "Settings" },
  nav_menu_open: { ru: "Открыть меню разделов", en: "Open section menu" },
  nav_menu_close: { ru: "Закрыть меню разделов", en: "Close section menu" },
  loading: { ru: "Загрузка…", en: "Loading…" },
  footer_disclaimer: {
    ru: "Формативная оценка, не официальный результат DUO/Cito.",
    en: "Formative estimate — not an official DUO/Cito result.",
  },

  onb_title: { ru: "Добро пожаловать", en: "Welcome" },
  onb_intro: {
    ru: "Расскажите немного о себе — это определит вашу учебную программу и экзаменационный трек.",
    en: "Tell us a bit about yourself — this determines your curriculum and exam track.",
  },
  onb_track_legend: { ru: "По какому закону/PIP вы проходите интеграцию?", en: "Which law/PIP applies to your integration?" },
  onb_track_note: {
    ru: "Не угадывайте по уровню — уточните у консультанта, если не уверены. Новые участники (Wi2021) по умолчанию идут по треку B1; понижение до A2 требует документального подтверждения часов обучения.",
    en: "Don't guess based on level — check with an advisor if unsure. New Wi2021 starters default to the B1 route; downscaling to A2 requires documented instruction hours.",
  },
  onb_track_wi2021: { ru: "Wi2021 — маршрут B1 (по умолчанию для новых участников)", en: "Wi2021 — B1 route (default for new starters)" },
  onb_track_wi2013: { ru: "Wi2013 — устаревшее законодательство, уровень A2", en: "Wi2013 — legacy law, A2 level" },
  onb_track_p1: { ru: "Staatsexamen NT2 Programma I напрямую (без inburgering)", en: "Staatsexamen NT2 Programma I directly (no inburgering)" },
  onb_track_self: { ru: "Самостоятельное изучение, без юридической привязки", en: "Self-study, no legal track" },
  onb_level_legend: { ru: "Целевой уровень", en: "Target level" },
  onb_examdate_label: { ru: "Дата экзамена (необязательно)", en: "Exam date (optional)" },
  onb_examdate_note: {
    ru: "В последние 6 недель перед экзаменом цель удержания в памяти повышается до 95%.",
    en: "In the final 6 weeks before the exam, the retention target rises to 95%.",
  },
  onb_explang_legend: { ru: "Язык объяснений", en: "Explanation language" },
  onb_script_label: { ru: "Показывать интерфейс на кириллице там, где это возможно", en: "Show the interface in Cyrillic where possible" },
  onb_minutes_label: { ru: "Сколько минут в неделю вы можете заниматься?", en: "How many minutes a week can you study?" },
  onb_submit: { ru: "Начать / Beginnen", en: "Start / Beginnen" },

  dash_title: { ru: "Обзор", en: "Overview" },
  dash_track: { ru: "Трек", en: "Track" },
  dash_goal: { ru: "Цель", en: "Goal" },
  dash_exam: { ru: "Экзамен", en: "Exam" },
  dash_streak: { ru: "Серия", en: "Streak" },
  dash_days_unit: { ru: "дн.", en: "days" },
  dash_streak_sub: { ru: "Только за качественные повторения", en: "Only for quality reviews" },
  dash_retention: { ru: "Цель удержания FSRS", en: "FSRS retention target" },
  dash_retention_pre_exam: { ru: "Повышается за 6 недель до экзамена", en: "Rises 6 weeks before the exam" },
  dash_retention_default: { ru: "Значение по умолчанию", en: "Default value" },
  dash_cards: { ru: "Карточки в системе", en: "Cards in the system" },
  dash_known_words: { ru: "Известные слова", en: "Known words" },
  dash_known_words_sub: { ru: "Используется для порога чтения §4", en: "Used for the §4 reading threshold" },
  dash_readiness_title: { ru: "Готовность к экзамену", en: "Exam readiness" },
  dash_readiness_ready: {
    ru: "Формативная оценка (не официальный результат): на основе {n} последних повторений ваш прогресс стабилен. Продолжайте регулярную практику.",
    en: "Formative estimate (not an official result): based on your last {n} reviews, your progress looks stable. Keep practicing regularly.",
  },
  dash_readiness_not_ready: {
    ru: "Недостаточно данных для оценки готовности. Нужно больше пройденных заданий во всех навыках ({n}/40). Точность ответов сама по себе не равна итоговому баллу экзамена.",
    en: "Not enough data yet to estimate readiness. Complete more tasks across all skills ({n}/40). Raw accuracy alone doesn't equal the final exam score.",
  },
  dash_skills_title: { ru: "Прогресс по навыкам", en: "Skill progress" },
  dash_items_in_bank: { ru: "заданий в банке", en: "items in the bank" },
  dash_grammar_title: { ru: "Грамматические цели", en: "Grammar targets" },
  dash_grammar_empty: { ru: "Начните практику, чтобы увидеть прогресс.", en: "Start practicing to see progress." },
  dash_stage_blocked: { ru: "закрепление", en: "blocked practice" },
  dash_stage_interleaved: { ru: "смешанная практика", en: "interleaved practice" },
  dash_start_practice: { ru: "Начать практику", en: "Start practice" },
  dash_write_task: { ru: "Задание на письмо", en: "Writing task" },

  grade_again: { ru: "Снова", en: "Again" },
  grade_hard: { ru: "Трудно", en: "Hard" },
  grade_good: { ru: "Хорошо", en: "Good" },
  grade_easy: { ru: "Легко", en: "Easy" },
  action_check: { ru: "Проверить", en: "Check" },
  action_next: { ru: "Далее", en: "Next" },
  action_finish: { ru: "Завершить", en: "Finish" },
  action_show: { ru: "Показать", en: "Show" },
  action_return: { ru: "Вернуться", en: "Return" },
  next_choose_title: { ru: "Выберите следующее упражнение:", en: "Choose the next exercise:" },

  settings_title: { ru: "Настройки", en: "Settings" },
  settings_intro: { ru: "Профиль, обратная связь и управление данными.", en: "Profile, feedback, and data management." },
  settings_profile_title: { ru: "Профиль", en: "Profile" },
  settings_feedback_title: { ru: "Обратная связь для тестировщиков", en: "Tester feedback" },
  settings_data_title: { ru: "Данные", en: "Data" },
  settings_data_note: {
    ru: "Все данные хранятся только в этом браузере (localStorage) — ничего не отправляется на сервер, кроме того, что вы сами явно отправите через форму обратной связи выше.",
    en: "All data lives only in this browser (localStorage) — nothing is sent to a server except what you explicitly submit via the feedback form above.",
  },
  settings_track_label: { ru: "Трек", en: "Track" },
  settings_goal_label: { ru: "Цель", en: "Goal" },
  settings_exam_label: { ru: "Экзамен", en: "Exam" },
  settings_exam_unset: { ru: "не указана", en: "not set" },
  settings_lang_label: { ru: "Язык объяснений", en: "Explanation language" },

  fb_bug: { ru: "Нашёл(а) баг", en: "Found a bug" },
  fb_suggestion: { ru: "Предложение", en: "Suggestion" },
  fb_general: { ru: "Общий отзыв", en: "General feedback" },
  fb_type_legend: { ru: "Тип отзыва", en: "Feedback type" },
  fb_message_label: { ru: "Ваше сообщение", en: "Your message" },
  fb_message_placeholder: {
    ru: "Опишите, что произошло или что вы предлагаете улучшить...",
    en: "Describe what happened or what you'd suggest improving...",
  },
  fb_submit_github: { ru: "Отправить как GitHub issue", en: "Submit as a GitHub issue" },
  fb_submit_email: { ru: "Отправить по почте", en: "Submit by email" },
  fb_note: {
    ru: "В приложении нет сервера — «Отправить как GitHub issue» откроет новую вкладку с уже заполненной формой на github.com (нужен аккаунт GitHub, чтобы её отправить). «Отправить по почте» откроет ваш почтовый клиент. Текст нигде не сохраняется автоматически.",
    en: "This app has no server — \"Submit as a GitHub issue\" opens a new tab with a pre-filled form on github.com (you'll need a GitHub account to send it). \"Submit by email\" opens your email client. Nothing is saved automatically.",
  },
  fb_sent: {
    ru: "Открыто в новой вкладке / в почтовом клиенте — проверьте, что оно не заблокировано.",
    en: "Opened in a new tab / your email client — check it wasn't blocked.",
  },

  del_button: { ru: "Удалить весь прогресс", en: "Delete all progress" },
  del_warning: {
    ru: "Это удалит профиль, все карточки FSRS, прогресс по грамматике и серию — без возможности отмены. Данные хранятся только в этом браузере, резервной копии нет.",
    en: "This deletes your profile, every FSRS card, grammar progress, and your streak — permanently. Data lives only in this browser; there's no backup.",
  },
  del_confirm: { ru: "Да, удалить всё", en: "Yes, delete everything" },
  del_cancel: { ru: "Отмена", en: "Cancel" },

  session_done: { ru: "Сессия завершена!", en: "Session complete!" },
  session_correct: { ru: "Правильно", en: "Correct" },
  answer_correct: { ru: "Правильно!", en: "Correct!" },
  answer_incorrect: { ru: "Не совсем.", en: "Not quite." },
  your_answer: { ru: "Ваш ответ", en: "Your answer" },
  correct_answer: { ru: "Правильный ответ", en: "Correct answer" },

  vocab_all_done: { ru: "На сегодня всё повторено!", en: "All done for today!" },
  vocab_new_later: { ru: "Новые слова появятся, когда подойдёт их время по FSRS.", en: "New words will appear when FSRS schedules them." },
  vocab_review: { ru: "повторение", en: "review" },
  vocab_new: { ru: "новое слово", en: "new word" },
  vocab_recall_hint: { ru: "Вспомните артикль, множественное число и форму с прилагательным", en: "Recall the article, plural, and adjective form" },
  vocab_article: { ru: "Артикль", en: "Article" },
  vocab_plural: { ru: "Множ. число", en: "Plural" },
  vocab_diminutive: { ru: "Уменьшительное", en: "Diminutive" },
  vocab_with_adj: { ru: "С прилагательным", en: "With adjective" },
  vocab_collocations: { ru: "Словосочетания", en: "Collocations" },
  vocab_listen: { ru: "Произношение", en: "Pronunciation" },
  vocab_listen_full: { ru: "Произношение с артиклем", en: "Pronunciation with article" },
  vocab_translation: { ru: "Перевод", en: "Translation" },

  int_all_done: { ru: "Все диалоги пройдены!", en: "All dialogues done!" },
  int_restart: { ru: "Начать заново", en: "Start over" },
  int_your_answer_legend: { ru: "Ваш ответ:", en: "Your answer:" },
  int_appropriate: { ru: "Уместный ответ!", en: "Appropriate response!" },
  int_not_ideal: { ru: "Не самый удачный вариант.", en: "Not the best choice." },

  exam_result_title: { ru: "Результат симуляции", en: "Simulation result" },
  exam_no_answer: { ru: "нет ответа", en: "no answer" },
  exam_no_backtrack: { ru: "Без возврата назад — как на настоящем экзамене.", en: "No going back — same as the real exam." },

  sp_privacy_note: {
    ru: "Запись обрабатывается только в вашем браузере, никуда не отправляется и не сохраняется — она исчезает, как только вы оцените попытку или уйдёте со страницы (принцип минимальной обработки голосовых данных, §9). Здесь нет автоматической оценки произношения (ASR) — сравнивайте свою запись с текстом сами.",
    en: "Recording is processed entirely in your browser, never uploaded or stored — it disappears once you grade the attempt or leave the page (§9's transient-voice-processing principle). There's no automatic pronunciation scoring (ASR) here — compare your recording to the text yourself.",
  },
  sp_unsupported: { ru: "Ваш браузер не поддерживает запись звука.", en: "Your browser doesn't support audio recording." },
  sp_denied: { ru: "Доступ к микрофону не разрешён. Проверьте разрешения браузера.", en: "Microphone access denied. Check your browser permissions." },
  sp_start_recording: { ru: "Начать запись", en: "Start recording" },
  sp_stop_recording: { ru: "Остановить запись", en: "Stop recording" },
  sp_grade_bad: { ru: "Плохо получилось", en: "Went poorly" },
  sp_grade_medium: { ru: "Средне", en: "Okay" },
  sp_grade_excellent: { ru: "Отлично", en: "Excellent" },
  sp_all_done: { ru: "Все задания на говорение пройдены!", en: "All speaking prompts done!" },
} as const;

export type I18nKey = keyof typeof DICT;

export function t(lang: UiLang, key: I18nKey, vars?: Record<string, string | number>): string {
  const entry = DICT[key];
  let text: string = entry[lang] ?? entry.ru;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) text = text.replace(`{${k}}`, String(v));
  }
  return text;
}

export function useUiLang(): UiLang {
  return useAppStore((s) => s.uiLang);
}

export function useT() {
  const lang = useUiLang();
  return (key: I18nKey, vars?: Record<string, string | number>) => t(lang, key, vars);
}
