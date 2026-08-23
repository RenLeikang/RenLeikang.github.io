import { ShieldCheck, UserRound, UsersRound } from "lucide-react";
import { competitions } from "../data/competitions";
import ProofViewer from "./ProofViewer";
import Section from "./Section";

const prestigeOrder = [
  "icpc-xian-2026",
  "ccpc-qinhuangdao-2026",
  "lanqiao-2026",
  "gplt-team-2026",
  "aic-season-2-2025",
  "raicom-2025",
  "gplt-individual-2026",
  "aic-season-3-2025",
  "gplt-team-2025",
  "transportation-2026",
  "gplt-individual-2025",
];

const orderedCompetitions = [...competitions].sort(
  (a, b) => prestigeOrder.indexOf(a.id) - prestigeOrder.indexOf(b.id),
);

const representativeIds = new Set(prestigeOrder.slice(0, 6));

export default function Competitions() {
  return (
    <Section id="competitions" eyebrow="Competitions" title="竞赛获奖" intro="按赛事代表性与奖项等级排列，完整保留全部国家级竞赛成果。" className="border-y border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/35">
      <div className="section-content flex flex-wrap items-center gap-x-7 gap-y-2 border-y border-slate-200 py-3.5 dark:border-slate-800">
        <span className="text-sm text-slate-600 dark:text-slate-400"><strong className="mr-1.5 text-2xl font-semibold tabular-nums text-slate-950 dark:text-white">{competitions.length}</strong>项国家级竞赛奖励</span>
        <span className="hidden h-5 w-px bg-slate-200 sm:block dark:bg-slate-800" />
        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500"><ShieldCheck size={15} className="text-academic-600 dark:text-blue-400" />全部关联真实证明材料</span>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        {orderedCompetitions.map((item, index) => (
          <article key={item.id} className={`group relative grid min-h-[78px] gap-x-4 gap-y-3 border-b border-slate-200 px-4 py-4 transition last:border-b-0 hover:bg-slate-50 sm:grid-cols-[32px_minmax(0,1fr)_120px_auto] sm:items-center sm:px-5 dark:border-slate-800 dark:hover:bg-slate-900/70 ${representativeIds.has(item.id) ? "bg-blue-50/30 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-academic-600 dark:bg-blue-950/10" : ""}`}>
            <span className="hidden text-xs font-semibold tabular-nums text-slate-300 sm:block dark:text-slate-700">{String(index + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-semibold text-academic-600 dark:text-blue-400">{item.shortName}</span>
                {index < 4 && <span className="text-[11px] font-medium text-slate-400">代表性</span>}
              </div>
              <h3 className="mt-1 text-base font-semibold leading-6 text-slate-900 dark:text-white">{item.name}</h3>
              <p className="mt-0.5 text-xs leading-5 text-slate-500">{item.category}{item.privacyNote ? ` · ${item.privacyNote}` : ""}</p>
            </div>
            <div className="flex items-center gap-3 sm:block sm:text-right">
              <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">{item.award}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-400 sm:justify-end">{item.teamType === "团队" ? <UsersRound size={12} /> : <UserRound size={12} />}{item.teamType} · {item.year}</p>
            </div>
            <div className="justify-self-start sm:justify-self-end"><ProofViewer proof={item.proof} label="查看证明" /></div>
          </article>
        ))}
      </div>
    </Section>
  );
}
