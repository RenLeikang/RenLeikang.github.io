import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="site-container py-6 text-xs text-slate-500 dark:text-slate-500">
        <p>© 2026 {profile.name} · {profile.englishName}</p>
      </div>
    </footer>
  );
}
