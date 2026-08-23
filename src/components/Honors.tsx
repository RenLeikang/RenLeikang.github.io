import { BookOpenCheck } from "lucide-react";
import { honors } from "../data/honors";
import ProofViewer from "./ProofViewer";
import Section from "./Section";

export default function Honors() {
  return (
    <Section id="honors" eyebrow="Honors" title="荣誉与奖学金">
      <div className="section-content grid gap-x-8 border-y border-slate-200 sm:grid-cols-2 dark:border-slate-800">
        {honors.map((honor) => (
          <article key={honor.id} className="flex min-h-[92px] items-start justify-between gap-4 border-b border-slate-200 py-4.5 dark:border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2"><h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">{honor.name}</h3><span className="text-xs text-slate-400">{honor.date}</span></div>
              {honor.description && <p className="mt-1 text-[13px] leading-5 text-slate-500">{honor.description}</p>}
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400"><BookOpenCheck size={13} />{honor.level}</span>
            </div>
            {honor.proof && <ProofViewer proof={honor.proof} />}
          </article>
        ))}
      </div>
    </Section>
  );
}
