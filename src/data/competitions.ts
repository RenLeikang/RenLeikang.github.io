export type Proof = { type: "pdf" | "image" | "file"; path: string };

export interface Competition {
  id: string;
  name: string;
  shortName: string;
  date: string;
  year: number;
  level: "国家级";
  award: string;
  category?: string;
  teamType: "个人" | "团队";
  proof: Proof;
  privacyNote?: string;
}

export const competitions: Competition[] = [
  { id: "lanqiao-2026", name: "第十七届蓝桥杯全国软件和信息技术专业人才大赛", shortName: "蓝桥杯", date: "2026-06-17", year: 2026, level: "国家级", award: "C/C++ 程序设计大学 B 组全国一等奖", category: "程序设计", teamType: "个人", proof: { type: "pdf", path: "/proofs/competitions/2026-lanqiao-national-first-redacted.pdf" }, privacyNote: "网站副本已遮盖身份证号码" },
  { id: "ccpc-qinhuangdao-2026", name: "中国大学生程序设计竞赛全国邀请赛（秦皇岛）", shortName: "CCPC", date: "2026-05-24", year: 2026, level: "国家级", award: "铜牌", category: "程序设计", teamType: "团队", proof: { type: "pdf", path: "/proofs/competitions/2026-ccpc-qinhuangdao-bronze.pdf" } },
  { id: "gplt-team-2026", name: "中国高校计算机大赛—团体程序设计天梯赛全国总决赛", shortName: "GPLT", date: "2026-05-06", year: 2026, level: "国家级", award: "团队一等奖", category: "华山论剑组", teamType: "团队", proof: { type: "pdf", path: "/proofs/competitions/2026-gplt-team-first.pdf" } },
  { id: "gplt-individual-2026", name: "中国高校计算机大赛—团体程序设计天梯赛全国总决赛", shortName: "GPLT", date: "2026-05-06", year: 2026, level: "国家级", award: "个人二等奖", category: "程序设计", teamType: "个人", proof: { type: "pdf", path: "/proofs/competitions/2026-gplt-individual-second.pdf" } },
  { id: "icpc-xian-2026", name: "ICPC 中国陕西全国邀请赛（西安）", shortName: "ICPC", date: "2026-05-02", year: 2026, level: "国家级", award: "银牌", category: "程序设计", teamType: "团队", proof: { type: "pdf", path: "/proofs/competitions/2026-icpc-xian-silver.pdf" } },
  { id: "transportation-2026", name: "“船视宝”杯第二十一届全国大学生交通运输科技大赛", shortName: "交通科技大赛", date: "2026-05", year: 2026, level: "国家级", award: "三等奖", category: "航空运输与工程（本科生）", teamType: "团队", proof: { type: "pdf", path: "/proofs/competitions/2026-transportation-national-third.pdf" } },
  { id: "aic-season-3-2025", name: "第七届全球校园人工智能算法精英大赛全国总决赛", shortName: "AIC", date: "2025-12", year: 2025, level: "国家级", award: "二等奖", category: "产业命题赛道·算法巅峰赛（第三赛季）", teamType: "个人", proof: { type: "pdf", path: "/proofs/competitions/2025-aic-season-3-national-second.pdf" } },
  { id: "aic-season-2-2025", name: "第七届全球校园人工智能算法精英大赛全国总决赛", shortName: "AIC", date: "2025-10", year: 2025, level: "国家级", award: "一等奖", category: "产业命题赛道·算法巅峰赛（第二赛季）", teamType: "个人", proof: { type: "pdf", path: "/proofs/competitions/2025-aic-season-2-national-first.pdf" } },
  { id: "raicom-2025", name: "睿抗机器人开发者大赛（RAICOM）全国总决赛", shortName: "RAICOM", date: "2025-08-27", year: 2025, level: "国家级", award: "一等奖", category: "编程技能竞赛项目", teamType: "个人", proof: { type: "pdf", path: "/proofs/competitions/2025-raicom-national-first.pdf" } },
  { id: "gplt-team-2025", name: "中国高校计算机大赛—团体程序设计天梯赛全国总决赛", shortName: "GPLT", date: "2025-05-06", year: 2025, level: "国家级", award: "团队二等奖", category: "华山论剑组", teamType: "团队", proof: { type: "pdf", path: "/proofs/competitions/2025-gplt-team-second.pdf" } },
  { id: "gplt-individual-2025", name: "中国高校计算机大赛—团体程序设计天梯赛全国总决赛", shortName: "GPLT", date: "2025-05-06", year: 2025, level: "国家级", award: "个人三等奖", category: "程序设计", teamType: "个人", proof: { type: "pdf", path: "/proofs/competitions/2025-gplt-individual-third.pdf" } },
];
