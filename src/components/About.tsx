import { GraduationCap, School } from "lucide-react";
import { profile } from "../data/profile";
import Section from "./Section";

export default function About() {
  const facts = [
    { label: "教育经历", value: `${profile.university} · ${profile.major}`, icon: GraduationCap, prominent: false },
    { label: "学院", value: profile.school, icon: School, prominent: false },
    { label: "加权成绩", value: profile.weightedAverage, prominent: true },
    { label: "平均学分绩点", value: profile.gpa, prominent: true },
  ];
  return (
    <Section id="about" eyebrow="About" title="关于我">
      <div className="section-content grid gap-9 lg:grid-cols-[1.45fr_0.8fr] lg:gap-14">
        <div className="space-y-4 text-[15.5px] leading-8 text-slate-600 sm:text-base dark:text-slate-400">
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <dl className="grid grid-cols-2 gap-x-5 border-y border-slate-200 dark:border-slate-800">
          {facts.map(({ label, value, icon: Icon, prominent }) => (
            <div key={label} className={`py-4.5 ${!prominent ? "col-span-2 border-b border-slate-200 dark:border-slate-800" : ""}`}>
              <dt className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">{Icon && <Icon size={14} className="text-slate-400" />}{label}</dt>
              <dd className={`mt-1.5 font-semibold leading-6 text-slate-900 dark:text-slate-100 ${prominent ? "text-lg tabular-nums" : "text-[15px]"}`}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
