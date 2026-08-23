import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 dark:text-slate-500">
        <p>© 2026 {profile.name}（{profile.englishName}）</p>
        <p>使用 React 与 Tailwind CSS 构建</p>
      </div>
    </footer>
  );
}
