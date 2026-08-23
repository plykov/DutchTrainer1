import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Dutch A2/B1 — Examentrainer",
  description: "Exam-prep app for DUO Inburgering and Staatsexamen NT2 Programma I, for Russian-speaking learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Ga naar hoofdinhoud / Перейти к содержимому
        </a>
        <Nav />
        <main id="main-content" className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6">
          {children}
        </main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-4 text-center text-xs text-zinc-500">
          Formatieve inschatting — geen officiële DUO/Cito-uitslag. · Формативная оценка, не официальный результат DUO/Cito.
        </footer>
      </body>
    </html>
  );
}
