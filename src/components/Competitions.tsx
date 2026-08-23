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

export default function Competitions() {
  return (
    <Section id="competitions" eyebrow="National Competitions" title="竞赛获奖" intro="共获得 11 项国家级竞赛奖励，以下按赛事代表性与奖项等级排列。" className="border-y border-slate-200/80 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/35">
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-slate-200 py-3 text-sm dark:border-slate-800">
        <span><strong className="mr-1 text-xl text-slate-950 dark:text-white">11</strong><span className="text-slate-500">项国家级奖励</span></span>
        <span className="inline-flex items-center gap-1.5 text-slate-500"><ShieldCheck size={15} className="text-academic-600 dark:text-blue-400" />全部关联获奖证明</span>
      </div>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        {orderedCompetitions.map((item, index) => (
          <article key={item.id} className="group grid gap-3 border-b border-slate-200 px-4 py-4 transition last:border-b-0 hover:bg-slate-50 sm:grid-cols-[32px_1fr_auto] sm:items-center sm:px-5 dark:border-slate-800 dark:hover:bg-slate-900/70">
            <span className="hidden text-xs font-semibold tabular-nums text-slate-300 sm:block dark:text-slate-700">{String(index + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-academic-600 dark:text-blue-400">{item.shortName}</span>
                <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-academic-700 dark:bg-blue-950/60 dark:text-blue-300">{item.award}</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">{item.teamType === "团队" ? <UsersRound size={12} /> : <UserRound size={12} />}{item.teamType}</span>
                <span className="text-[11px] text-slate-400">{item.year}</span>
              </div>
              <h3 className="mt-1.5 text-sm font-semibold leading-6 text-slate-900 dark:text-white">{item.name}</h3>
              <p className="mt-0.5 text-xs leading-5 text-slate-500">{item.category}{item.privacyNote ? ` · ${item.privacyNote}` : ""}</p>
            </div>
            <ProofViewer proof={item.proof} />
          </article>
        ))}
      </div>
    </Section>
  );
}
