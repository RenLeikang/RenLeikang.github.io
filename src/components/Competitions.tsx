import { UserRound, UsersRound } from "lucide-react";
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

function displayAward(award: string, index: number) {
  if (index < 2) return award;
  const level = award.match(/[一二三]等奖/)?.[0];
  return level ? `全国${level}` : award;
}

export default function Competitions() {
  return (
    <Section id="competitions" eyebrow="Competitions" title="竞赛获奖" className="border-y border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/35">
      <p className="section-content text-sm text-slate-600 dark:text-slate-400">国家级竞赛奖励 <strong className="font-semibold tabular-nums text-slate-950 dark:text-white">{competitions.length}</strong> 项</p>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        {orderedCompetitions.map((item, index) => (
          <article key={item.id} className="group grid min-h-[78px] gap-x-4 gap-y-3 border-b border-slate-200 px-4 py-4 transition last:border-b-0 hover:bg-slate-50 sm:grid-cols-[minmax(0,1fr)_120px_auto] sm:items-center sm:px-5 dark:border-slate-800 dark:hover:bg-slate-900/70">
            <div className="min-w-0">
              <span className="text-xs font-semibold text-academic-600 dark:text-blue-400">{item.shortName}</span>
              <h3 className="mt-1 text-base font-semibold leading-6 text-slate-900 dark:text-white">{item.name}</h3>
            </div>
            <div className="flex items-center gap-3 sm:block sm:text-right">
              <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">{displayAward(item.award, index)}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-400 sm:justify-end">{item.teamType === "团队" ? <UsersRound size={12} /> : <UserRound size={12} />}{item.teamType} · {item.year}</p>
            </div>
            <div className="justify-self-start sm:justify-self-end"><ProofViewer proof={item.proof} label="查看证明" /></div>
          </article>
        ))}
      </div>
    </Section>
  );
}
