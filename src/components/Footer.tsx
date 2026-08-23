import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="site-container flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-500">
        <p>© 2026 {profile.name}（{profile.englishName}）</p>
        <p>使用 React 与 Tailwind CSS 构建</p>
      </div>
    </footer>
  );
}
