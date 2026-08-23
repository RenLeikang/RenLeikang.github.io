export interface Honor {
  id: string;
  name: string;
  date?: string;
  level?: string;
  description?: string;
  officialUrl?: string;
  proof?: { type: "pdf" | "image" | "file"; path: string };
}

const personalProfileUrl = "https://sist.stdu.edu.cn/tzgg/2025nian-xia-ban-nian-fa-zhan-dui-xiang-gong-shi-3";
const universityHonorsUrl = "https://sist.stdu.edu.cn/tzgg/xin-xi-xue-yuan2024-2025xue-nian-xiao-ji-xian-jin-ping-xuan-tui-jian-jie-guo-gong-shi";
const advancedBranchUrl = "https://sist.stdu.edu.cn/tzgg/xin-xi-ke-xue-yu-ji-shu-xue-yuan2025-2026nian-du-xiao-ji-wu-si-biao-zhang-ping-xuan-jie-guo-gong-shi";

export const honors: Honor[] = [
  { id: "national-inspirational-scholarship", name: "国家励志奖学金", date: "2024、2025", level: "国家级", description: "连续两学年获得", officialUrl: personalProfileUrl },
  { id: "first-class-scholarship", name: "校级一等奖学金", date: "2024、2025", level: "校级", officialUrl: personalProfileUrl },
  { id: "outstanding-student-leader", name: "校级优秀学生干部", date: "2025", level: "校级", officialUrl: universityHonorsUrl },
  { id: "outstanding-league-member", name: "五四优秀团员", date: "2025", level: "校级", officialUrl: personalProfileUrl },
  { id: "outstanding-student", name: "三好学生", date: "2024", level: "院级", officialUrl: personalProfileUrl },
  { id: "class-monitor", name: "信2301-4班班长", date: "本科期间", level: "学生工作", description: "负责班级建设、日常管理与活动组织", officialUrl: personalProfileUrl, proof: { type: "image", path: "/proofs/honors/class-monitor-proof.png" } },
  { id: "outstanding-class", name: "校级优秀班集体", date: "2025", level: "集体荣誉", description: "担任班长期间参与班级建设并获评", officialUrl: universityHonorsUrl },
  { id: "advanced-youth-league-branch", name: "先进团支部", date: "2026", level: "集体荣誉", description: "担任班长期间参与班级与团支部建设", officialUrl: advancedBranchUrl },
];
