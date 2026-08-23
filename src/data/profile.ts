export type ResearchInterest = {
  title: string;
  englishTitle: string;
  description: string;
  icon: "scan" | "drone" | "tracking" | "layers" | "language";
};

export const profile = {
  name: "任磊康",
  englishName: "Leikang Ren",
  initials: "任",
  role: "计算机科学与技术专业本科生",
  university: "石家庄铁道大学",
  school: "信息科学与技术学院",
  major: "计算机科学与技术",
  degree: "工学学士在读",
  period: "2023 — 2027",
  weightedAverage: "88.45 / 100",
  gpa: "3.64 / 4.0",
  ranking: "",
  email: "renlk2005@163.com",
  github: "YOUR_GITHUB_URL",
  cv: "/files/CV.pdf",
  photo: "/images/profile.jpg",
  intro: "石家庄铁道大学计算机科学与技术专业本科生。目前主要关注计算机视觉、无人机视觉感知、目标检测与跟踪、多模态学习，以及视觉感知与大语言模型结合等方向。",
  about: [
    "我目前就读于石家庄铁道大学信息科学与技术学院计算机科学与技术专业，学习和项目经历主要围绕计算机视觉与智能感知展开。",
    "本科期间，我持续参加算法竞赛与工程项目，在数据结构与算法、模型训练、计算机视觉系统和软件工程实践等方面积累了较为系统的经验。",
    "我希望在已有无人机视觉、目标检测与跟踪实践的基础上，进一步学习复杂场景视觉理解、多模态信息融合与视觉语言智能。",
  ],
  interestLine: ["计算机视觉", "无人机视觉感知", "目标检测与跟踪", "多模态学习"],
} as const;

export const researchInterests: ResearchInterest[] = [
  { title: "计算机视觉", englishTitle: "Computer Vision", description: "目标检测、视觉识别、图像与视频理解。", icon: "scan" },
  { title: "无人机视觉感知", englishTitle: "UAV Perception", description: "无人机平台下的视觉检测、感知与智能分析。", icon: "drone" },
  { title: "目标检测与跟踪", englishTitle: "Object Detection & Tracking", description: "弱小目标检测、多目标跟踪、轨迹分析与目标关联。", icon: "tracking" },
  { title: "多模态学习", englishTitle: "Multimodal Learning", description: "视觉、文本和结构化信息的融合与理解。", icon: "layers" },
  { title: "视觉语言智能", englishTitle: "Vision-Language Intelligence", description: "探索视觉感知与大语言模型结合的智能分析方法。", icon: "language" },
];

export const skillGroups = [
  { title: "视觉检测与识别", items: ["YOLOv5", "ArcFace", "OpenCV", "目标检测", "小目标识别"] },
  { title: "模型训练与实验", items: ["PyTorch", "VisDrone", "迁移学习", "数据增强", "模型评估"] },
  { title: "跟踪与控制", items: ["Kalman Filter", "轨迹预测", "PID 控制"] },
  { title: "工程开发", items: ["Python", "C++", "Qt", "UDP 通信", "多线程"] },
] as const;
