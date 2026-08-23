export type ResearchInterest = {
  title: string;
  englishTitle: string;
  description: string;
  icon: "scan" | "drone" | "tracking";
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
  github: "",
  cv: "/files/CV.pdf",
  photo: "/images/profile.jpg",
  intro: "石家庄铁道大学计算机科学与技术专业本科生。目前主要围绕计算机视觉、无人机视觉感知、目标检测与跟踪，以及航拍场景下的小目标检测开展项目实践。",
  about: [
    "我目前就读于石家庄铁道大学信息科学与技术学院计算机科学与技术专业，主要关注计算机视觉、无人机视觉感知、目标检测与跟踪以及航拍小目标检测。",
    "本科期间，我持续参加算法竞赛与计算机视觉项目实践，在数据结构与算法、模型训练和视觉系统开发等方面积累了经验，并曾担任信2301-4班班长。",
  ],
  interestLine: ["计算机视觉", "无人机视觉感知", "目标检测与跟踪", "航拍小目标检测"],
} as const;

export const researchInterests: ResearchInterest[] = [
  { title: "计算机视觉", englishTitle: "Computer Vision", description: "围绕图像与视频中的目标检测、视觉识别开展学习与项目实践。", icon: "scan" },
  { title: "无人机视觉感知", englishTitle: "UAV Perception", description: "面向无人机航拍与户外场景开展视觉检测、跟踪与智能感知。", icon: "drone" },
  { title: "目标检测与跟踪", englishTitle: "Object Detection & Tracking", description: "研究目标检测、身份判别、轨迹预测与持续跟踪方法。", icon: "tracking" },
  { title: "航拍小目标检测", englishTitle: "Aerial Small Object Detection", description: "关注复杂航拍场景中的车辆等小目标识别与模型优化。", icon: "scan" },
];

export const skillGroups = [
  { title: "编程语言", items: ["C / C++", "Python"] },
  { title: "视觉与深度学习", items: ["PyTorch", "YOLOv5", "OpenCV", "ArcFace"] },
  { title: "目标跟踪与控制", items: ["Kalman Filter", "PID"] },
  { title: "工程开发", items: ["Qt", "UDP", "Multithreading"] },
] as const;
