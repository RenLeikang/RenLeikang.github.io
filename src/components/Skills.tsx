import { skillGroups } from "../data/profile";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="个人技能" className="border-y border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/35">
      <div className="section-content grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article key={group.title} className="border-t border-slate-200 pt-3.5 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-6 text-slate-500 dark:text-slate-400">{group.items.join(" · ")}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
