import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { useDarkMode } from "../hooks/useDarkMode";

const links = [
  ["首页", "home"], ["关于我", "about"], ["研究方向", "research"], ["项目经历", "projects"],
  ["竞赛获奖", "competitions"], ["荣誉奖学金", "honors"], ["个人技能", "skills"], ["联系方式", "contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled || open ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95" : "border-transparent bg-white/80 backdrop-blur-sm dark:bg-slate-950/80"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="主导航">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-md bg-academic-600 text-xs font-bold text-white">{profile.initials}</span>
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">{profile.name}<span className="ml-2 hidden font-normal text-slate-400 sm:inline">{profile.englishName}</span></span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-academic-600 dark:text-slate-300 dark:hover:text-blue-400">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={toggleTheme} aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`} className="focus-ring rounded-md p-2 text-slate-600 transition hover:bg-slate-100 hover:text-academic-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label="展开或收起导航" onClick={() => setOpen((value) => !value)} className="focus-ring rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-1">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="focus-ring rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-academic-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-blue-400">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
