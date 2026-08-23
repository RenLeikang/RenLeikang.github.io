import { Focus, ScanSearch, Sparkles } from "lucide-react";
import { researchInterests } from "../data/profile";
import Section from "./Section";

const icons = { scan: ScanSearch, drone: Focus, tracking: Sparkles };

export default function Research() {
  return (
    <Section id="research" eyebrow="Research" title="研究方向" intro="主要关注无人机视觉感知、目标检测与跟踪以及航拍小目标检测。" className="border-y border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/35">
      <div className="section-content grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {researchInterests.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article key={item.title} className="card group p-5 transition hover:border-slate-300 dark:hover:border-slate-700">
              <div className="flex items-start gap-3.5">
                <Icon size={19} strokeWidth={1.7} className="mt-0.5 shrink-0 text-academic-600/80 dark:text-blue-400" />
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-400">{item.englishTitle}</p>
                  <p className="mt-2 text-[14px] leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
