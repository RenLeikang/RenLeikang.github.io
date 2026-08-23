import { GraduationCap, School } from "lucide-react";
import { profile } from "../data/profile";
import Section from "./Section";

export default function About() {
  const facts = [
    { label: "教育经历", value: `${profile.university} · ${profile.major}`, icon: GraduationCap },
    { label: "学院", value: profile.school, icon: School },
    { label: "加权成绩", value: profile.weightedAverage },
    { label: "平均学分绩点", value: profile.gpa },
  ];
  return (
    <Section id="about" eyebrow="Profile" title="关于我">
      <div className="mt-8 grid gap-9 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400">
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <dl className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {facts.map(({ label, value, icon: Icon }) => (
            <div key={label} className="py-5">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">{Icon && <Icon size={14} />}{label}</dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
