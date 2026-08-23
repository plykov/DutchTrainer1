import Link from "next/link";

const linkClass = "text-blue-700 underline underline-offset-2 dark:text-blue-400";
const sectionClass = "space-y-3";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10 text-sm leading-6">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-700 dark:text-blue-400">Beta notice</p>
        <h1 className="text-3xl font-semibold tracking-tight">Privacy notice / Политика конфиденциальности</h1>
        <p className="text-zinc-500">Effective and last updated: 23 August 2026</p>
        <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
          This is a plain-language disclosure for the public beta. It describes the current software and is not a
          substitute for a professional legal review before a production launch.
        </p>
      </header>

      <section className={sectionClass} aria-labelledby="privacy-controller">
        <h2 id="privacy-controller" className="text-xl font-semibold">Who is responsible</h2>
        <p>
          Dutch A2/B1 Examentrainer is maintained by Pavel Lykov. Privacy questions and requests can be sent to{" "}
          <a className={linkClass} href="mailto:plykov@gmail.com">plykov@gmail.com</a>. The source repository is{" "}
          <a className={linkClass} href="https://github.com/plykov/DutchTrainer1" rel="noreferrer">public on GitHub</a>.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-local">
        <h2 id="privacy-local" className="text-xl font-semibold">Data kept in your browser</h2>
        <p>
          The app stores your learner profile, UI language, study settings, exercise results and response times,
          FSRS card schedules, grammar progress, review history, and streak in this browser&apos;s local storage under
          the key <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-900">dutch-a2b1-store</code>. This is used
          only to provide personalisation, scheduling, and progress views.
        </p>
        <p>
          The project maintainer has no app backend and cannot read, restore, synchronise, or export this local
          data. The learner profile and study progress remain until you use{" "}
          <Link className={linkClass} href="/settings">Delete all progress</Link>, clear this site&apos;s browser data,
          or uninstall/reset the browser. The UI-language preference is intentionally retained after deleting
          progress and is removed by clearing the site&apos;s browser data. There is no server backup.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-writing">
        <h2 id="privacy-writing" className="text-xl font-semibold">Writing and LanguageTool</h2>
        <p>
          Writing answers are checked with local rules by default and are not persisted. The external LanguageTool
          checkbox is off on every new writing screen. If you actively enable it and submit an answer, the complete
          answer text, the selected language (<code className="rounded bg-zinc-100 px-1 dark:bg-zinc-900">nl</code>),
          and normal connection data such as your IP address are sent directly from your browser to LanguageTool&apos;s
          public API. Do not include confidential or third-party personal information.
        </p>
        <p>
          LanguageTool/Learneo processes that request under its own{" "}
          <a className={linkClass} href="https://languagetool.org/legal/privacy" rel="noreferrer">privacy policy</a>
          {" "}and <a className={linkClass} href="https://languagetool.org/legal/terms" rel="noreferrer">terms</a>.
          This project does not receive or retain the submitted text or LanguageTool result on a server. You can
          withdraw the choice before submission by unchecking the box, or avoid the service entirely.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-audio">
        <h2 id="privacy-audio" className="text-xl font-semibold">Microphone and speech playback</h2>
        <p>
          Speaking exercises request microphone permission only when recording is needed. The app holds recordings
          in temporary browser memory for playback; it does not upload them or write them to local storage. Practice
          audio is discarded when you grade it or leave the page. Exam-simulation recordings are discarded when the
          simulation component is closed or the page is left.
        </p>
        <p>
          Dutch speech playback uses the browser&apos;s Web Speech API. The app passes the displayed Dutch text to your
          browser or operating-system speech service. Whether synthesis is fully on-device or uses a provider&apos;s
          network service depends on your browser, device, voice, and their privacy settings; this project does not
          control or receive that processing.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-hosting">
        <h2 id="privacy-hosting" className="text-xl font-semibold">Hosting and feedback</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            GitHub Pages hosts the static site. GitHub states that it logs and stores visitor IP addresses for
            security purposes. See GitHub&apos;s{" "}
            <a className={linkClass} href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" rel="noreferrer">Pages data-collection notice</a>
            {" "}and <a className={linkClass} href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">privacy statement</a>.
          </li>
          <li>
            The app itself has no analytics, advertising, tracking pixels, or cookies. Its local-storage record is
            functional learner state, not an advertising identifier. GitHub may process hosting data under its own
            policy.
          </li>
          <li>
            Feedback is not transmitted merely by typing it. Choosing GitHub opens a pre-filled public issue; it is
            sent only if you complete GitHub&apos;s submission and may show your GitHub identity. Choosing email opens
            your mail client; it is sent only if you send the message. Private email feedback is kept by the
            maintainer only while it is needed to respond to or address the report. Public issues and provider-held
            messages follow those services&apos; retention and deletion rules.
          </li>
        </ul>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-basis">
        <h2 id="privacy-basis" className="text-xl font-semibold">Purpose, legal basis, recipients, and transfers</h2>
        <p>
          Where the GDPR applies to processing attributable to this project, functional processing is performed to
          provide the learning service you request and to pursue the legitimate interest of operating and securing
          the beta. Optional LanguageTool disclosure happens only after your affirmative choice. Feedback you send
          is used to answer the request and improve or secure the app. The recipients are limited to the providers
          named above and any person who can view content you deliberately publish in a public issue.
        </p>
        <p>
          GitHub, LanguageTool/Learneo, and your email or speech-service provider may process data outside your
          country or the EEA under the safeguards described in their policies. The project does not sell learner
          data, run marketing, or make legal or similarly significant automated decisions about you. Readiness and
          feedback are formative learning signals only.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-rights">
        <h2 id="privacy-rights" className="text-xl font-semibold">Your choices and rights</h2>
        <p>
          You can inspect browser storage with developer tools and erase all app-held learner data from Settings or
          your browser controls. Because the maintainer never receives that local record, the maintainer cannot
          identify or retrieve it for you. For feedback sent directly to the maintainer, you may request access,
          correction, deletion, restriction, or objection where applicable by using the contact above. Requests
          concerning GitHub, LanguageTool, or another provider must also be directed to that provider.
        </p>
        <p>
          You may lodge a complaint with your local data-protection authority. In the Netherlands this is the{" "}
          <a className={linkClass} href="https://autoriteitpersoonsgegevens.nl/en" rel="noreferrer">Autoriteit Persoonsgegevens</a>.
        </p>
      </section>

      <section className="space-y-8 border-t border-zinc-200 pt-10 dark:border-zinc-800" aria-labelledby="privacy-ru">
        <div className={sectionClass}>
          <h2 id="privacy-ru" className="text-2xl font-semibold">Полная версия на русском</h2>
          <p className="text-zinc-500">Действует и обновлено: 23 августа 2026 года</p>
          <p>
            Это понятное описание обработки данных в публичной beta-версии. Оно соответствует текущему коду, но не
            заменяет профессиональную юридическую проверку перед производственным запуском.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">Кто отвечает</h3>
          <p>
            Проект Dutch A2/B1 Examentrainer сопровождает Pavel Lykov. Вопросы и запросы о персональных данных:
            {" "}<a className={linkClass} href="mailto:plykov@gmail.com">plykov@gmail.com</a>. Исходный код
            {" "}<a className={linkClass} href="https://github.com/plykov/DutchTrainer1" rel="noreferrer">открыт на GitHub</a>.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">Данные в вашем браузере</h3>
          <p>
            Профиль, язык интерфейса, учебные настройки, результаты и время ответов, расписание карточек FSRS,
            грамматический прогресс, история повторений и серия хранятся в localStorage этого браузера под ключом
            {" "}<code className="rounded bg-zinc-100 px-1 dark:bg-zinc-900">dutch-a2b1-store</code>. Они нужны
            только для персонализации, расписания повторений и отображения прогресса. У проекта нет backend-сервера,
            доступа к этим данным, синхронизации или резервной копии.
          </p>
          <p>
            <Link className={linkClass} href="/settings">Удаление всего прогресса</Link> стирает профиль и учебные
            данные. Выбранный язык интерфейса сохраняется как функциональная настройка; его можно удалить очисткой
            данных сайта в браузере. То же действие удалит и весь прогресс без возможности восстановления.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">Письмо и LanguageTool</h3>
          <p>
            По умолчанию письменный ответ проверяется локальными правилами и не сохраняется. Флажок внешней проверки
            LanguageTool выключен при каждом открытии задания. Если вы включите его и отправите ответ, весь текст,
            код языка <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-900">nl</code> и обычные сетевые
            данные, включая IP-адрес, будут отправлены напрямую из браузера в публичный API LanguageTool. Не включайте
            конфиденциальные сведения или персональные данные других людей.
          </p>
          <p>
            Запрос обрабатывается LanguageTool/Learneo по их собственной{" "}
            <a className={linkClass} href="https://languagetool.org/legal/privacy" rel="noreferrer">политике</a>
            {" "}и <a className={linkClass} href="https://languagetool.org/legal/terms" rel="noreferrer">условиям</a>.
            Проект не получает и не сохраняет ответ или результат LanguageTool на сервере. До отправки можно снять
            флажок; внешней проверкой можно вообще не пользоваться.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">Микрофон и озвучивание</h3>
          <p>
            Доступ к микрофону запрашивается только для записи речи. Записи временно находятся в памяти браузера для
            прослушивания, не загружаются приложением и не записываются в localStorage. В практике запись удаляется
            после самооценки или ухода со страницы; в симуляции — после закрытия компонента или ухода со страницы.
          </p>
          <p>
            Для озвучивания нидерландского текста используется Web Speech API. Текст передаётся службе синтеза речи
            браузера или операционной системы. Работает ли она локально или через сеть поставщика, зависит от вашего
            устройства, голоса и настроек; проект не контролирует и не получает эту обработку.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">Хостинг и обратная связь</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Статический сайт размещён на GitHub Pages. GitHub сообщает, что регистрирует и хранит IP-адреса
              посетителей в целях безопасности; действуют его уведомление о{" "}
              <a className={linkClass} href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" rel="noreferrer">сборе данных Pages</a>
              {" "}и <a className={linkClass} href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">политика конфиденциальности</a>.
            </li>
            <li>
              Само приложение не устанавливает cookies и не содержит аналитики, рекламы, пикселей или рекламных
              идентификаторов. GitHub может обрабатывать данные хостинга по своей политике.
            </li>
            <li>
              Один только ввод отзыва ничего не отправляет. GitHub открывает предзаполненный публичный issue, который
              будет отправлен только после вашего подтверждения и может показать ваш профиль GitHub. Почта открывает
              ваш почтовый клиент и отправляется только после вашего подтверждения. Частная почта хранится у
              сопровождающего лишь пока нужна для ответа или исправления; публичные issues и сообщения у поставщиков
              подчиняются их правилам хранения и удаления.
            </li>
          </ul>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">Цели, основания, получатели и передача</h3>
          <p>
            В той мере, в какой GDPR применим к проекту, функциональная обработка нужна для предоставления
            запрошенного вами учебного сервиса и законного интереса в работе и безопасности beta-версии. Передача в
            LanguageTool происходит только после вашего явного выбора. Отправленный отзыв используется для ответа,
            улучшения и защиты приложения. Получатели ограничены названными выше поставщиками и людьми, которые
            увидят намеренно опубликованный вами issue.
          </p>
          <p>
            GitHub, LanguageTool/Learneo, поставщик почты или синтеза речи могут обрабатывать данные за пределами
            вашей страны или ЕЭЗ по гарантиям из их политик. Проект не продаёт данные, не ведёт маркетинг и не
            принимает юридически значимых автоматизированных решений. Оценка готовности носит только учебный характер.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">Ваш выбор и права</h3>
          <p>
            Вы можете просмотреть localStorage средствами разработчика и удалить учебные данные через Настройки или
            управление данными сайта в браузере. Поскольку сопровождающий не получает локальную запись, он не может
            найти, исправить или экспортировать её за вас. Для отзыва, отправленного непосредственно сопровождающему,
            вы можете запросить доступ, исправление, удаление, ограничение или возразить против обработки, если это
            применимо. По данным у GitHub, LanguageTool или другого поставщика обращайтесь также к этому поставщику.
          </p>
          <p>
            Вы можете подать жалобу в свой орган по защите данных. В Нидерландах это{" "}
            <a className={linkClass} href="https://autoriteitpersoonsgegevens.nl/en" rel="noreferrer">Autoriteit Persoonsgegevens</a>.
          </p>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="privacy-changes">
        <h2 id="privacy-changes" className="text-xl font-semibold">Changes</h2>
        <p>
          The effective date above will change when this notice or the app&apos;s data flows materially change. The
          release checklist requires a privacy review whenever storage, analytics, accounts, microphone processing,
          or external services change. Previous versions remain available in the repository history.
        </p>
      </section>
    </article>
  );
}
