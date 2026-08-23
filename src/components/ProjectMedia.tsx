import { useState } from "react";
import type { Project } from "../data/projects";
import { assetPath } from "../lib/assetPath";

function Diagram({ type }: { type: Project["id"] }) {
  const common = "fill-none stroke-current";
  return (
    <svg viewBox="0 0 720 440" aria-hidden="true" className="h-full w-full text-blue-500/80 dark:text-blue-400/80">
      <defs>
        <pattern id={`grid-${type}`} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0v28" className="stroke-slate-300/70 dark:stroke-slate-700/70" fill="none" strokeWidth="1" /></pattern>
      </defs>
      <rect width="720" height="440" fill={`url(#grid-${type})`} />
      {type === "uav" && <>
        <path d="M340 106h40m-20-20v40M292 98l36 18m100-18-36 18M324 132h72l-12 44h-48Z" className={common} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="292" cy="98" r="18" className={common} strokeWidth="5" /><circle cx="428" cy="98" r="18" className={common} strokeWidth="5" />
        <rect x="302" y="230" width="116" height="134" rx="8" className={common} strokeWidth="4" strokeDasharray="10 8" />
        <circle cx="360" cy="270" r="24" className={common} strokeWidth="4" /><path d="M324 350c5-38 20-58 36-58s31 20 36 58" className={common} strokeWidth="4" />
        <path d="M360 176v38" className={common} strokeWidth="3" strokeDasharray="6 7" />
      </>}
      {type === "vehicle" && <>
        <path d="M0 348 254 170l466 158M0 412l300-208 420 188" className="fill-none stroke-slate-300 dark:stroke-slate-700" strokeWidth="3" />
        {[{x:170,y:280},{x:286,y:234},{x:402,y:287},{x:510,y:240}].map((p, i) => <g key={i}><rect x={p.x} y={p.y} width="78" height="48" rx="5" className={common} strokeWidth="4" /><path d={`M${p.x+14} ${p.y+48}v10m50-10v10`} className={common} strokeWidth="5" /></g>)}
        <rect x="145" y="258" width="126" height="92" rx="4" className="fill-none stroke-blue-400/50" strokeWidth="2" strokeDasharray="7 6" />
        <path d="M520 92h112v74H520zM545 118h62m-62 18h38" className={common} strokeWidth="3" />
      </>}
      {type === "multimodal" && <>
        <rect x="70" y="120" width="170" height="112" rx="10" className={common} strokeWidth="4" /><path d="m115 198 42-40 28 25 20-19" className={common} strokeWidth="4" /><circle cx="198" cy="150" r="10" className={common} strokeWidth="3" />
        <rect x="480" y="120" width="170" height="112" rx="10" className={common} strokeWidth="4" /><path d="M520 160h88m-88 27h64" className={common} strokeWidth="4" />
        <circle cx="360" cy="288" r="70" className={common} strokeWidth="5" /><path d="M240 176h60l25 52m155-52h-60l-25 52M308 330l-62 42m166-42 62 42" className={common} strokeWidth="4" />
        <path d="m338 288 15 15 31-35" className={common} strokeWidth="5" />
      </>}
      {type === "drone" && <>
        <path d="M294 176h132l-18 70H312Z" className={common} strokeWidth="5" /><path d="M325 174 260 128m135 46 65-46" className={common} strokeWidth="5" /><circle cx="247" cy="118" r="32" className={common} strokeWidth="4" /><circle cx="473" cy="118" r="32" className={common} strokeWidth="4" />
        <rect x="260" y="75" width="200" height="200" rx="8" className="fill-none stroke-blue-400/60" strokeWidth="3" strokeDasharray="9 7" />
        <path d="M128 352h464" className="fill-none stroke-slate-300 dark:stroke-slate-700" strokeWidth="3" /><path d="m145 330 70-42 58 17 72-50 58 20 70-67 95 44" className={common} strokeWidth="4" />
        <circle cx="568" cy="252" r="7" className="fill-current" />
      </>}
    </svg>
  );
}

export default function ProjectMedia({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
      <Diagram type={project.id} />
      {!failed && <img src={assetPath(project.image)} alt={`${project.title} project preview`} loading="lazy" onError={() => setFailed(true)} className="absolute inset-0 h-full w-full object-cover" />}
      {failed && <span className="absolute bottom-4 left-4 rounded bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500 backdrop-blur dark:bg-slate-950/80 dark:text-slate-400">Project illustration</span>}
    </div>
  );
}
