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
  nav_primary: { ru: "Основная навигация", en: "Main navigation" },
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

  practice_intro: {
    ru: "Новая грамматика сначала отрабатывается изолированно, затем смешивается с похожими темами.",
    en: "New grammar is practised in isolation first, then mixed with related targets.",
  },
  vocab_intro: {
    ru: "Каждое существительное хранится вместе с артиклем, множественным числом и словосочетаниями — никогда как отдельный перевод.",
    en: "Every noun is learned with its article, plural, and collocations—never as an isolated translation pair.",
  },
  reading_intro: {
    ru: "Текст открывается для свободного чтения только при известном покрытии слов ≥95% — это правило §4, самое важное правило по контенту в этом приложении.",
    en: "A text opens for free extensive reading only when known-word coverage is ≥95%—the app's most important content rule (§4).",
  },
  listening_intro: {
    ru: "Как на экзамене: сначала вопрос, затем один прогон без повтора (§7). Озвучка идёт через синтез речи браузера (Web Speech API); при его отсутствии текст показывается один раз вместо звука.",
    en: "Exam-style flow: read the question first, then hear one playback with no replay (§7). The browser's Web Speech API provides audio; without it, the text appears once instead.",
  },
  speaking_intro: {
    ru: "Elicited imitation: прочитайте предложение вслух, послушайте свою запись и оцените себя сами. Автоматической оценки произношения нет.",
    en: "Elicited imitation: read the sentence aloud, listen to your recording, and assess yourself. There is no automatic pronunciation scoring.",
  },
  interaction_intro: {
    ru: "Диалоговый навык отличается от монологического говорения: нужно уместно ответить внутри живого обмена репликами — попросить, уточнить, отказать или согласиться. Выбирайте самый естественный ответ.",
    en: "Interaction differs from monologic speaking: respond appropriately inside a live exchange by requesting, clarifying, declining, or agreeing. Choose the most natural response.",
  },
  writing_intro: {
    ru: "Сначала проверяется, выполнено ли задание; грамматика оценивается только после этого (правило адекватности).",
    en: "Task completion is checked first; grammar is assessed only after the adequacy gate passes.",
  },
  writing_other_topic: { ru: "Другая тема ({n} доступно)", en: "Another topic ({n} available)" },
  writing_empty: { ru: "Нет доступных заданий на письмо.", en: "No writing tasks are available." },

  reading_mode_intensive: {
    ru: "Интенсивный режим (глоссы + предобучение)",
    en: "Intensive mode (glosses + pre-teaching)",
  },
  reading_mode_extensive: { ru: "Экстенсивное чтение (без глосс)", en: "Extensive reading (no glosses)" },
  reading_mode_confidence: {
    ru: "Режим уверенности (без глосс, свободный темп)",
    en: "Confidence mode (no glosses, free pace)",
  },
  reading_known_coverage: { ru: "{n}% известного текста", en: "{n}% known-word coverage" },
  reading_unknown_word: { ru: "Незнакомое слово", en: "Unknown word" },
  reading_unknown_word_lemma: {
    ru: "Незнакомое слово — изучите в разделе «Словарь» ({lemma})",
    en: "Unknown word—study it in Vocabulary ({lemma})",
  },
  reading_below_gate: {
    ru: "Покрытие ниже 95% — этот текст не подходит для экстенсивного чтения. Сначала выучите отмеченные слова в",
    en: "Coverage is below 95%, so this text is not ready for extensive reading. First study the marked words in",
  },
  reading_vocab_link: { ru: "разделе «Словарь»", en: "Vocabulary" },

  listening_score: { ru: "Правильно: {correct} / {total}", en: "Correct: {correct} / {total}" },
  listening_preread: {
    ru: "Прочитайте вопрос заранее — текст ещё не звучал. Прослушивание начнётся через {n} сек.",
    en: "Read the question first—the text has not played yet. Playback starts in {n}s.",
  },
  listening_start_now: { ru: "Начать прослушивание сейчас", en: "Start playback now" },
  listening_playing: { ru: "🔊 Прослушивание… (только один раз, без повтора)", en: "🔊 Playing… (once only, no replay)" },
  listening_exam_playing: { ru: "🔊 Прослушивание… (только один раз)", en: "🔊 Playing… (once only)" },
  listening_flash_fallback: {
    ru: "В этом браузере не поддерживается синтез речи — текст показывается один раз вместо звука.",
    en: "Speech synthesis is unavailable in this browser, so the text is shown once instead of audio.",
  },
  listening_tts_missing_voice: {
    ru: "Если звука не слышно, нидерландский голос может быть не установлен. Это всё равно считается единственной попыткой; повтора не будет.",
    en: "If you hear nothing, a Dutch voice may not be installed. This still counts as the single attempt; there is no replay.",
  },
  listening_answer: { ru: "Ответить", en: "Answer" },
  listening_next: { ru: "Следующее задание", en: "Next item" },

  writing_expired: {
    ru: "Время вышло — ответ отправлен автоматически, как на настоящем экзамене.",
    en: "Time is up—the answer was submitted automatically, as in the real exam.",
  },
  writing_lt_disclosure: {
    ru: "Добавить внешнюю проверку орфографии и грамматики через LanguageTool. При включении текст ответа отправляется в публичный сервис LanguageTool вместе с обычными сетевыми данными; без этой опции проверка остаётся только в браузере.",
    en: "Add the external LanguageTool spelling and grammar check. When enabled, the answer text and normal connection data are sent to LanguageTool's public service; without it, checking stays in the browser.",
  },
  writing_privacy_link: { ru: "Подробнее о конфиденциальности", en: "Privacy details" },
  writing_adequacy_fail: {
    ru: "Сначала выполните задание — грамматика проверяется только после этого.",
    en: "Complete the task first—grammar is checked only after that.",
  },
  writing_missing: { ru: "Не хватает:", en: "Missing:" },
  writing_fix_answer: { ru: "Исправить ответ", en: "Revise answer" },
  writing_checking_local: { ru: "Проверяем текст локальными правилами…", en: "Checking with local rules…" },
  writing_checking_external: {
    ru: "Проверяем текст (локальные правила + LanguageTool)…",
    en: "Checking (local rules + LanguageTool)…",
  },
  writing_no_errors: {
    ru: "Задание выполнено, явных ошибок из отслеживаемых категорий не найдено. Отличная работа!",
    en: "Task complete. No clear errors from the tracked categories were found. Great work!",
  },
  writing_found_span: { ru: "Найден фрагмент:", en: "Found passage:" },
  writing_try_first: {
    ru: "Попробуйте исправить самостоятельно, прежде чем смотреть ответ.",
    en: "Try to correct it yourself before revealing the explanation.",
  },
  writing_show_analysis: { ru: "Показать разбор", en: "Show explanation" },
  writing_error_code: { ru: "Код ошибки:", en: "Error code:" },
  writing_repair_action: {
    ru: "Далее: напишите новое предложение с этой конструкцией",
    en: "Next: write a new sentence using this structure",
  },
  writing_repair_label: {
    ru: "Напишите новое предложение, используя ту же конструкцию правильно:",
    en: "Write a new sentence using the same structure correctly:",
  },
  writing_next_error: { ru: "Следующая ошибка", en: "Next error" },
  writing_done: { ru: "Готово", en: "Done" },

  settings_title: { ru: "Настройки", en: "Settings" },
  settings_intro: { ru: "Профиль, обратная связь и управление данными.", en: "Profile, feedback, and data management." },
  settings_profile_title: { ru: "Профиль", en: "Profile" },
  settings_feedback_title: { ru: "Обратная связь для тестировщиков", en: "Tester feedback" },
  settings_data_title: { ru: "Данные", en: "Data" },
  settings_data_note: {
    ru: "Профиль и учебный прогресс хранятся только в этом браузере (localStorage); у проекта нет сервера приложений или резервной копии. Хостинг и явно выбранные внешние функции описаны в политике конфиденциальности.",
    en: "Your profile and learning progress live only in this browser (localStorage); the project has no app server or backup. Hosting and explicitly chosen external features are described in the privacy notice.",
  },
  settings_languagetool_note: {
    ru: "Внешняя проверка LanguageTool выключена по умолчанию. Если вы включите её на странице письма и отправите ответ, весь текст и обычные сетевые данные будут обработаны LanguageTool/Learneo по их собственной политике.",
    en: "The external LanguageTool check is off by default. If you enable it on the writing page and submit, the complete text and normal connection data are processed by LanguageTool/Learneo under its own policy.",
  },
  settings_privacy_link: { ru: "Открыть полную политику конфиденциальности", en: "Read the full privacy notice" },
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
    ru: "Сам ввод ничего не отправляет. GitHub откроет предзаполненный публичный issue на github.com: отправленный текст и ваш профиль GitHub будут видны всем. Почта откроет сообщение сопровождающему проекта в вашем почтовом клиенте. Не включайте конфиденциальные данные.",
    en: "Typing alone sends nothing. GitHub opens a pre-filled public issue on github.com: submitted text and your GitHub identity will be visible to everyone. Email opens a message to the project maintainer in your mail client. Don't include confidential data.",
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
  exam_constraints_title: { ru: "Экзаменационные ограничения", en: "Exam constraints" },
  exam_constraints_intro: {
    ru: "Ниже — подтверждённые ограничения по времени и формату и рабочие демо механики KNM, Lezen, Luisteren, Schrijven и Spreken. Lezen и Luisteren содержат больше тренировочных вопросов, Schrijven сохраняет структуру 8+2+2, а KNM и Spreken остаются уменьшенными демо.",
    en: "Below are verified timing and format constraints plus working mechanics demos for KNM, Lezen, Luisteren, Schrijven, and Spreken. Lezen and Luisteren include extra practice questions, Schrijven preserves the 8+2+2 structure, and KNM and Spreken remain smaller demos.",
  },
  exam_question_count: { ru: "{n} вопросов", en: "{n} questions" },
  exam_demo_knm: { ru: "Демо-симуляция KNM ({count})", en: "KNM demo simulation ({count})" },
  exam_demo_lezen: { ru: "Демо-симуляция Lezen ({count})", en: "Lezen demo simulation ({count})" },
  exam_demo_luisteren: { ru: "Демо-симуляция Luisteren ({count})", en: "Luisteren demo simulation ({count})" },
  exam_demo_schrijven: {
    ru: "Демо-симуляция Schrijven (реальная структура: 8+2+2)",
    en: "Schrijven demo simulation (real 8+2+2 structure)",
  },
  exam_free_schrijven: {
    ru: "Schrijven — свободная практика ({n} заданий)",
    en: "Schrijven free practice ({n} tasks)",
  },
  exam_demo_spreken: {
    ru: "Демо-симуляция Spreken (8 коротких + 8 средних, темп по сигналу)",
    en: "Spreken demo simulation (8 short + 8 medium, signal-paced)",
  },
  exam_choose_other: { ru: "Выбрать другое задание", en: "Choose another task" },
  exam_exit_simulation: { ru: "Выйти из симуляции", en: "Exit simulation" },
  exam_choose_writing: { ru: "Выберите задание ({n} доступно):", en: "Choose a task ({n} available):" },
  exam_knm_note_title: { ru: "Важно про KNM", en: "Important KNM update" },
  exam_knm_note: {
    ru: "Модуль KNM пересобран с 1 июля 2025 года: 45 вопросов, 45 минут, порог 27/45 (60%) и обновлённые eindtermen. Старые материалы KNM больше не соответствуют экзамену.",
    en: "KNM was redesigned from 1 July 2025: 45 questions, 45 minutes, a 27/45 (60%) threshold, and updated eindtermen. Older KNM materials no longer match the exam.",
  },
  exam_p1_reference_title: {
    ru: "Staatsexamen NT2 Programma I — справка по разделам",
    en: "Staatsexamen NT2 Programma I—component reference",
  },
  exam_p1_reference_intro: {
    ru: "Это не отдельный шестой тест: здесь собраны ограничения по времени и формату для всего экзамена. Разделы запускаются кнопками выше.",
    en: "This is not a separate sixth test; it collects the timing and format constraints for the full exam. Launch its components with the buttons above.",
  },
  exam_p1_lezen_constraint: {
    ru: "110 мин, 6 текстов, 36 вопросов MC. Разрешён только Van Dale Pocketwoordenboek Nederlands als tweede taal (NT2), любое издание; другие словари и электронные переводчики запрещены.",
    en: "110 minutes, 6 texts, 36 multiple-choice questions. Only Van Dale Pocketwoordenboek Nederlands als tweede taal (NT2), any edition, is allowed; other dictionaries and electronic translators are prohibited.",
  },
  exam_p1_listening_constraint: {
    ru: "90 мин, около 40 вопросов, 5+ фрагментов, по 5–10 вопросов на фрагмент. Один прогон без повтора; 25 сек на предварительное чтение вопроса.",
    en: "90 minutes, about 40 questions, 5+ fragments, and 5–10 questions per fragment. One playback with no replay; 25 seconds to pre-read each question.",
  },
  exam_p1_writing_constraint: {
    ru: "100 мин. 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken. Порядок выбирает кандидат. Van Dale разрешён; проверка орфографии запрещена.",
    en: "100 minutes. 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken. The candidate chooses the order. Van Dale is allowed; spell-checking is prohibited.",
  },
  exam_p1_speaking_constraint: {
    ru: "Около 25 мин. 8 коротких (20с) + 8 средних (30с) заданий, темп по сигналу, без возврата. Рубрика: 103 балла, порог 66.",
    en: "About 25 minutes. 8 short (20s) + 8 medium (30s) tasks, signal-paced with no going back. Rubric: 103 points, threshold 66.",
  },
  exam_verified_note: {
    ru: "Количество вопросов, длительность, структура и правила словаря подтверждены по staatsexamensnt2.nl и inburgeren.nl в августе 2026 года. Перепроверьте их перед выпуском производственного контента.",
    en: "Question counts, timing, structure, and dictionary rules were verified against staatsexamensnt2.nl and inburgeren.nl in August 2026. Re-check them before releasing production content.",
  },
  exam_copyright_title: { ru: "Официальные материалы защищены законом", en: "Official materials are protected" },
  exam_copyright_note: {
    ru: "Все задания здесь авторские и смоделированы по открытому блуепринту, а не скопированы. Обязательно потренируйтесь в официальной среде FACET на oefenexamensnt2.nl; используйте компьютер.",
    en: "All tasks here are original and modelled on the public blueprint, not copied. Practise at least once in the official FACET environment on oefenexamensnt2.nl; use a computer.",
  },
  exam_knm_pass_note: {
    ru: "Демо из 41 вопроса. Настоящий KNM: 45 вопросов, порог 27/45 (60%), 45 минут.",
    en: "41-question demo. The real KNM has 45 questions, a 27/45 (60%) threshold, and 45 minutes.",
  },
  exam_lezen_pass_note: {
    ru: "Демо из 56 вопросов — больше, чем в реальном Lezen (36 вопросов, 110 минут, 6 текстов), для дополнительной тренировки.",
    en: "This 56-question demo exceeds the real Lezen format (36 questions, 110 minutes, 6 texts) to provide extra practice.",
  },
  exam_listening_result: { ru: "Результат симуляции Luisteren", en: "Luisteren simulation result" },
  exam_listening_summary: {
    ru: "Демо из {n} вопросов. Настоящий Luisteren: около 40 вопросов (5+ фрагментов), 90 минут.",
    en: "{n}-question demo. The real Luisteren has about 40 questions (5+ fragments) and lasts 90 minutes.",
  },
  exam_schrijven_timeout: {
    ru: "Время вышло — сессия завершена автоматически",
    en: "Time is up—the session ended automatically",
  },
  exam_schrijven_done: { ru: "Schrijven завершён", en: "Schrijven complete" },
  exam_schrijven_summary: {
    ru: "Демо реальной структуры: 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken под единым 100-минутным таймером (здесь время масштабировано). На реальном экзамене порядок выбираете вы.",
    en: "Real-structure demo: 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken under one 100-minute timer (scaled here). You choose the order in the real exam.",
  },
  exam_sample_answer: { ru: "Пример ответа:", en: "Sample answer:" },
  exam_sample: { ru: "Пример:", en: "Example:" },
  exam_show_sample: { ru: "Показать пример", en: "Show sample" },
  exam_show_samples: { ru: "Показать примеры", en: "Show samples" },
  exam_finish_schrijven: { ru: "Завершить Schrijven", en: "Finish Schrijven" },
  exam_speaking_requesting: { ru: "Запрос доступа к микрофону…", en: "Requesting microphone access…" },
  exam_speaking_result: { ru: "Результат симуляции Spreken", en: "Spreken simulation result" },
  exam_speaking_summary: {
    ru: "Демо из {n} заданий (8 коротких по 20с + 8 средних по 30с). Автоматической оценки нет: прослушайте записи и сравните их с текстом.",
    en: "{n}-task demo (8 short at 20s + 8 medium at 30s). There is no automatic scoring; listen to your recordings and compare them with the text.",
  },
  exam_speaking_rubric: { ru: "Критерии реального Spreken (Cito):", en: "Real Spreken rubric (Cito):" },
  exam_speaking_content: { ru: "содержание ответа", en: "response content" },
  exam_speaking_formation: { ru: "построение слов и предложений", en: "word and sentence formation" },
  exam_speaking_vocabulary: { ru: "словарный запас", en: "vocabulary" },
  exam_speaking_pronunciation: { ru: "произношение", en: "pronunciation" },
  exam_speaking_word_choice: { ru: "выбор слов", en: "word choice" },
  exam_speaking_tempo: { ru: "темп речи", en: "speaking rate" },
  exam_speaking_pass: {
    ru: "Проходной балл — 66 из 103 (без учёта обязательных условий).",
    en: "The passing score is 66/103, excluding mandatory conditions.",
  },
  seconds_short: { ru: "с", en: "s" },
  exam_speaking_ready: { ru: "Приготовьтесь: запись начнётся через {n} сек.", en: "Get ready: recording starts in {n}s." },
  exam_speaking_recording: { ru: "Идёт запись — говорите сейчас", en: "Recording—speak now" },
  exam_speaking_pace: {
    ru: "Темп задаётся автоматически, без возврата назад — как на настоящем экзамене.",
    en: "The pace advances automatically with no going back, as in the real exam.",
  },

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
