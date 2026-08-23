import Link from "next/link";

const linkClass = "text-blue-700 underline underline-offset-2 dark:text-blue-400";
const sectionClass = "space-y-3";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10 text-sm leading-6">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-700 dark:text-blue-400">Public beta</p>
        <h1 className="text-3xl font-semibold tracking-tight">Terms of use / Условия использования</h1>
        <p className="text-zinc-500">Effective and last updated: 23 August 2026</p>
        <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
          These are provisional beta terms and require professional legal review before a production launch.
        </p>
      </header>

      <section className={sectionClass} aria-labelledby="terms-service">
        <h2 id="terms-service" className="text-xl font-semibold">1. The service</h2>
        <p>
          Dutch A2/B1 Examentrainer is a free, experimental self-study tool for practising Dutch. By using it, you
          agree to these terms and the <Link className={linkClass} href="/privacy">privacy notice</Link>. If you are
          not legally able to accept terms where you live, use the app only with permission and supervision from a
          parent or guardian.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="terms-not-official">
        <h2 id="terms-not-official" className="text-xl font-semibold">2. Educational tool, not official advice</h2>
        <p>
          The app is not affiliated with, approved by, or endorsed by DUO, Cito, Staatsexamens NT2, or the Dutch
          government. Scores, readiness indicators, explanations, and simulations are formative estimates—not
          official exam results, guarantees, legal advice, or immigration/integration advice. Always verify exam
          rules, eligibility, dates, fees, and legal-track decisions with the responsible official organisation or
          a qualified adviser.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="terms-beta">
        <h2 id="terms-beta" className="text-xl font-semibold">3. Beta quality and availability</h2>
        <p>
          The content includes authored, generated, dataset-sourced, and machine-translated material that has not
          completed qualified NT2 editorial review. It may contain linguistic, translation, accessibility, scoring,
          or technical errors. The service is provided on an “as is” and “as available” basis, may change or stop
          without notice, and does not promise that using it will produce a particular exam outcome.
        </p>
        <p>
          To the extent allowed by applicable law, the maintainer is not liable for indirect or consequential loss,
          lost progress, missed deadlines, or decisions made in reliance on the beta. Nothing in these terms limits
          rights or liability that cannot legally be limited.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="terms-data">
        <h2 id="terms-data" className="text-xl font-semibold">4. Local progress and recordings</h2>
        <p>
          Progress is stored only in your current browser, without an account, synchronisation, or backup. You are
          responsible for retaining any information you need elsewhere. Clearing site data, changing browsers or
          devices, or using Delete all progress can permanently remove it. Microphone recordings are temporary and
          are not intended as saved work.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="terms-third-party">
        <h2 id="terms-third-party" className="text-xl font-semibold">5. Optional and third-party services</h2>
        <p>
          GitHub hosts the site. LanguageTool is optional and receives writing only when you enable its checkbox and
          submit. GitHub issues, email, browser speech synthesis, and device microphone facilities are operated by
          third parties or your platform. Their own terms and privacy policies apply, and this project does not
          control their availability, security, or decisions.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="terms-conduct">
        <h2 id="terms-conduct" className="text-xl font-semibold">6. Responsible use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>use the app or its external-service options unlawfully or to harm, probe, overload, or disrupt services;</li>
          <li>submit confidential data or another person&apos;s personal data to LanguageTool, a public GitHub issue, or feedback without authority;</li>
          <li>present beta scores or content as an official Dutch-government or exam-provider result;</li>
          <li>remove notices or misrepresent the project&apos;s source, status, or affiliation.</li>
        </ul>
      </section>

      <section className={sectionClass} aria-labelledby="terms-content">
        <h2 id="terms-content" className="text-xl font-semibold">7. Project and third-party content</h2>
        <p>
          Public access to the source repository does not by itself grant permissions beyond those supplied by
          applicable law and the relevant third-party licences. Dependencies and sourced datasets remain subject to
          their own terms. Do not assume generated exercises or translations are suitable for redistribution or
          professional use without checking provenance and rights.
        </p>
      </section>

      <section className={sectionClass} aria-labelledby="terms-changes">
        <h2 id="terms-changes" className="text-xl font-semibold">8. Changes and contact</h2>
        <p>
          Material changes are dated above and recorded in the public repository. Continuing to use a changed beta
          means you accept the updated terms; if you do not, stop using it and erase local progress. Questions can be
          sent to <a className={linkClass} href="mailto:plykov@gmail.com">plykov@gmail.com</a>.
        </p>
      </section>

      <section className="space-y-8 border-t border-zinc-200 pt-10 dark:border-zinc-800" aria-labelledby="terms-ru">
        <div className={sectionClass}>
          <h2 id="terms-ru" className="text-2xl font-semibold">Полная версия на русском</h2>
          <p className="text-zinc-500">Действует и обновлено: 23 августа 2026 года</p>
          <p>
            Это предварительные условия публичной beta-версии. Перед производственным запуском им необходима
            профессиональная юридическая проверка.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">1. Сервис</h3>
          <p>
            Dutch A2/B1 Examentrainer — бесплатный экспериментальный инструмент для самостоятельного изучения
            нидерландского. Пользуясь им, вы принимаете эти условия и{" "}
            <Link className={linkClass} href="/privacy">политику конфиденциальности</Link>. Если по законам вашей
            страны вы не можете самостоятельно принять условия, пользуйтесь приложением только с разрешения и под
            контролем родителя или опекуна.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">2. Учебный инструмент, а не официальный совет</h3>
          <p>
            Приложение не связано с DUO, Cito, Staatsexamens NT2 или правительством Нидерландов, не одобрено и не
            поддерживается ими. Баллы, индикаторы готовности, объяснения и симуляции — формативные учебные оценки, а
            не официальный результат, гарантия, юридическая или миграционно-интеграционная консультация. Правила,
            допуск, даты, стоимость экзамена и решения о юридическом треке проверяйте у ответственной официальной
            организации или квалифицированного консультанта.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">3. Качество и доступность beta-версии</h3>
          <p>
            В материалах есть авторский, сгенерированный, полученный из наборов данных и машинно переведённый контент,
            который ещё не прошёл полную проверку квалифицированными преподавателями NT2. Возможны языковые,
            переводческие, технические, оценочные и accessibility-ошибки. Сервис предоставляется «как есть» и «по
            мере доступности», может измениться или прекратить работу без уведомления и не обещает определённого
            результата на экзамене.
          </p>
          <p>
            В пределах, разрешённых законом, сопровождающий не отвечает за косвенный ущерб, утраченный прогресс,
            пропущенные сроки или решения, основанные на beta-версии. Это не ограничивает права и ответственность,
            которые по применимому закону ограничить нельзя.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">4. Локальный прогресс и записи</h3>
          <p>
            Прогресс хранится только в текущем браузере, без аккаунта, синхронизации или резервной копии. Нужную
            информацию сохраняйте самостоятельно. Очистка данных сайта, смена браузера или устройства и функция
            «Удалить весь прогресс» могут удалить данные безвозвратно. Записи микрофона временны и не предназначены
            для постоянного хранения.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">5. Необязательные и сторонние сервисы</h3>
          <p>
            Сайт размещает GitHub. LanguageTool получает письменный ответ только когда вы включили его флажок и
            отправили текст. GitHub issues, электронная почта, синтез речи браузера и микрофон устройства управляются
            сторонними поставщиками или вашей платформой. Действуют их собственные условия и политики; проект не
            контролирует их доступность, безопасность или решения.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">6. Ответственное использование</h3>
          <p>Вы соглашаетесь не:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>использовать приложение или внешние функции незаконно, для причинения вреда, проверки уязвимостей, перегрузки или нарушения работы сервисов;</li>
            <li>отправлять конфиденциальные или чужие персональные данные в LanguageTool, публичный GitHub issue или отзыв без соответствующих полномочий;</li>
            <li>выдавать beta-оценки или материалы за официальный результат государства или экзаменационной организации;</li>
            <li>удалять уведомления или искажать происхождение, статус или аффилированность проекта.</li>
          </ul>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">7. Материалы проекта и третьих лиц</h3>
          <p>
            Публичная доступность репозитория сама по себе не даёт прав сверх предусмотренных законом и применимыми
            лицензиями третьих лиц. Зависимости и наборы данных подчиняются собственным условиям. Не считайте
            сгенерированные упражнения или переводы пригодными для распространения или профессионального применения
            без проверки происхождения и прав.
          </p>
        </div>

        <div className={sectionClass}>
          <h3 className="text-lg font-semibold">8. Изменения и контакт</h3>
          <p>
            Существенные изменения датируются выше и записываются в публичном репозитории. Продолжая пользоваться
            изменённой beta-версией, вы принимаете новые условия; если вы не согласны, прекратите использование и
            удалите локальный прогресс. Вопросы: <a className={linkClass} href="mailto:plykov@gmail.com">plykov@gmail.com</a>.
          </p>
        </div>
      </section>
    </article>
  );
}
