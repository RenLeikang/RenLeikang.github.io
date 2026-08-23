import { Bot, Focus, Layers3, ScanSearch, Sparkles } from "lucide-react";
import { researchInterests } from "../data/profile";
import Section from "./Section";

const icons = { scan: ScanSearch, drone: Focus, tracking: Sparkles, layers: Layers3, language: Bot };

export default function Research() {
  return (
    <Section id="research" eyebrow="Research Interests" title="研究方向" intro="围绕无人机与复杂真实场景中的可靠视觉感知开展学习与实践，并进一步关注多模态理解与视觉语言智能。" className="border-y border-slate-200/80 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/35">
      <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-800 dark:bg-slate-800">
        {researchInterests.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article key={item.title} className="group bg-white p-6 transition hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900">
              <Icon size={22} strokeWidth={1.7} className="text-academic-600 transition group-hover:-translate-y-0.5 dark:text-blue-400" />
              <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-1 text-xs font-medium text-slate-400">{item.englishTitle}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
