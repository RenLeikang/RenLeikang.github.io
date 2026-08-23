import { FileText, Github } from "lucide-react";
import { useState } from "react";
import { competitions } from "../data/competitions";
import { profile } from "../data/profile";
import { assetPath } from "../lib/assetPath";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const githubReady = Boolean(profile.github);
  const representativeAwards = ["icpc-xian-2026", "ccpc-qinhuangdao-2026"]
    .map((id) => competitions.find((item) => item.id === id))
    .filter((item): item is (typeof competitions)[number] => Boolean(item))
    .map((item) => `${item.shortName} ${item.award}`);

  return (
    <section id="home" className="flex min-h-[70vh] items-center border-b border-slate-200/80 bg-slate-50/55 pt-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="site-container grid gap-10 py-12 sm:py-14 md:grid-cols-[minmax(0,1fr)_270px] md:items-center lg:grid-cols-[minmax(0,1fr)_285px]">
        <div>
          <h1 className="text-[38px] font-semibold leading-none tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[52px] dark:text-white">{profile.name}</h1>
          <p className="mt-3 text-[17px] text-slate-500 dark:text-slate-400">{profile.englishName}</p>
          <div className="mt-6 space-y-1 text-base leading-7">
            <p className="font-semibold text-slate-900 dark:text-slate-100">{profile.university}</p>
            <p className="text-slate-600 dark:text-slate-400">{profile.role}</p>
          </div>
          <div className="mt-6 border-l-2 border-academic-600 pl-4">
            <p className="mb-1 text-[13px] font-medium text-slate-500 dark:text-slate-400">研究方向</p>
            <p className="max-w-2xl text-[15.5px] font-medium leading-7 text-slate-800 sm:text-base dark:text-slate-200">{profile.interestLine.join(" · ")}</p>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-blue-100 bg-white/80 px-4 py-3 text-[14px] font-medium text-slate-700 dark:border-blue-950 dark:bg-slate-900/70 dark:text-slate-300">
            {representativeAwards.map((award, index) => <span key={award} className="inline-flex items-center gap-2"><span className="text-academic-600 dark:text-blue-400">{award}</span>{index < representativeAwards.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}</span>)}
            <span className="hidden text-slate-300 sm:inline dark:text-slate-700">·</span>
            <span>国家级竞赛奖励 <strong className="font-semibold text-slate-900 dark:text-white">{competitions.length}</strong> 项</span>
          </div>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base dark:text-slate-400">{profile.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href={assetPath(profile.cv)} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-md bg-academic-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-academic-700"><FileText size={16} />个人简历</a>
            {githubReady && <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-academic-600 hover:text-academic-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"><Github size={16} />GitHub</a>}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[220px] sm:max-w-[235px] md:max-w-none">
          <div className="relative aspect-[5/6] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            {!photoFailed ? (
              <img src={assetPath(profile.photo)} alt="任磊康个人照片" className="h-full w-full object-cover object-[center_38%]" onError={() => setPhotoFailed(true)} />
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-slate-400"><span className="text-5xl font-semibold text-slate-300 dark:text-slate-700">{profile.initials}</span><span className="mt-3 text-xs uppercase tracking-[0.2em]">Portrait</span></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
