import { skillGroups } from "../data/profile";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="个人技能" intro="在课程学习、算法竞赛、模型实验与工程项目中实际使用过的工具和方法。" className="border-y border-slate-200/80 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/35">
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article key={group.title} className={`rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 ${index === 1 ? "lg:row-span-2" : ""}`}>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="tag">{item}</span>)}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
