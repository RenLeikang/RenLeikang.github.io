import { BookOpenCheck } from "lucide-react";
import { honors } from "../data/honors";
import Section from "./Section";

export default function Honors() {
  return (
    <Section id="honors" eyebrow="Scholarships, Honors & Service" title="荣誉与奖学金" intro="综合展示奖学金、个人与集体荣誉，以及本科期间承担的学生工作。">
      <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
        {honors.map((honor) => (
          <article key={honor.id} className="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 sm:grid-cols-[110px_1fr_auto] sm:items-center dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-400">{honor.date}</span>
            <div><h3 className="text-sm font-semibold text-slate-900 dark:text-white">{honor.name}</h3>{honor.description && <p className="mt-1 text-xs leading-5 text-slate-500">{honor.description}</p>}</div>
            <span className="inline-flex w-fit items-center gap-1.5 text-xs text-slate-400"><BookOpenCheck size={14} />{honor.level}</span>
          </article>
        ))}
      </div>
    </Section>
  );
}
