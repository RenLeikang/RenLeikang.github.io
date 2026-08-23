import { ArrowDown, FileText, Github, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { assetPath } from "../lib/assetPath";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const githubReady = profile.github !== "YOUR_GITHUB_URL";

  return (
    <section id="home" className="relative flex min-h-[82vh] items-center border-b border-slate-200/80 bg-slate-50/60 pt-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_280px] md:items-center lg:grid-cols-[1fr_320px] lg:px-10">
        <div>
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-academic-600" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-academic-600 dark:text-blue-400">个人学术主页 · Academic Homepage</p>
          </div>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">{profile.name}</h1>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">{profile.englishName}</p>
          <div className="mt-6 space-y-1 text-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">{profile.role}</p>
            <p className="text-slate-600 dark:text-slate-400">{profile.university}</p>
          </div>
          <div className="mt-6 border-l-2 border-academic-600 pl-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">研究方向 · Research Interests</p>
            <p className="max-w-2xl text-sm font-medium leading-6 text-slate-800 sm:text-base dark:text-slate-200">{profile.interestLine.join(" · ")}</p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">{profile.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={assetPath(profile.cv)} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-md bg-academic-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-academic-700"><FileText size={16} /> 个人简历</a>
            <a href={githubReady ? profile.github : "#contact"} target={githubReady ? "_blank" : undefined} rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-academic-600 hover:text-academic-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"><Github size={16} /> GitHub</a>
            <a href={`mailto:${profile.email}`} className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-academic-600 hover:text-academic-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"><Mail size={16} /> 联系我</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[310px] md:max-w-none">
          <div className="relative aspect-[5/6] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
            {!photoFailed ? (
              <img src={assetPath(profile.photo)} alt="任磊康个人照片" className="h-full w-full object-cover object-[center_38%]" onError={() => setPhotoFailed(true)} />
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-slate-400"><span className="text-5xl font-semibold text-slate-300 dark:text-slate-700">{profile.initials}</span><span className="mt-3 text-xs uppercase tracking-[0.2em]">Portrait</span></div>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">计算机视觉 · 智能感知</p>
        </div>
      </div>
      <a href="#about" aria-label="滚动到关于我" className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-slate-400 transition hover:text-academic-600 md:block"><ArrowDown size={20} /></a>
    </section>
  );
}
