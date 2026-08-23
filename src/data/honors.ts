export interface Honor {
  id: string;
  name: string;
  date?: string;
  level?: string;
  description?: string;
  proof?: { type: "pdf" | "image" | "file"; path: string };
}

export const honors: Honor[] = [
  { id: "national-inspirational-scholarship", name: "国家励志奖学金", date: "2024、2025", level: "国家级", description: "连续两学年获得" },
  { id: "class-monitor", name: "信2301-4班班长", date: "本科期间", level: "学生工作", description: "负责班级建设、日常管理与活动组织。" },
  { id: "outstanding-class", name: "校级优秀班集体", date: "2025", level: "集体荣誉", description: "担任班长期间参与班级建设并获评。" },
  { id: "advanced-youth-league-branch", name: "先进团支部", level: "集体荣誉", description: "担任班长期间参与班级与团支部建设。" },
  { id: "first-class-scholarship", name: "校级一等奖学金", date: "2024、2025", level: "校级" },
  { id: "outstanding-student-leader", name: "校级优秀学生干部", date: "2025", level: "校级" },
  { id: "outstanding-league-member", name: "五四优秀团员", date: "2025", level: "校级" },
  { id: "outstanding-student", name: "三好学生", date: "2024", level: "院级" },
];
