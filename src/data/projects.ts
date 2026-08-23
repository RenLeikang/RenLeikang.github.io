export type Project = {
  id: "uav" | "vehicle" | "multimodal" | "drone";
  title: string;
  subtitle?: string;
  role?: string;
  type: string;
  description: string;
  contributions: string[];
  tech: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  github: string;
  details: string;
};

export const projects: Project[] = [
  {
    id: "uav",
    title: "基于无人机视觉的移动目标检测与跟踪系统",
    subtitle: "省级大学生创新创业训练计划｜项目负责人",
    role: "项目负责人",
    type: "工程项目",
    description: "面向户外安防场景，构建集视觉感知、身份判别、轨迹估计、飞控联动与地面端可视化于一体的无人机目标跟踪系统。",
    contributions: ["基于 YOLOv5 与 ArcFace 完成人体检测、身份判别及特定人员定位。", "结合卡尔曼滤波进行轨迹预测，并利用 PID 控制实现无人机持续跟踪。", "实现 UDP 视频传输、Qt 地面端界面和多线程性能优化。"],
    tech: ["YOLOv5", "ArcFace", "OpenCV", "Kalman Filter", "PID", "UDP", "Qt", "Python", "C++"],
    highlights: ["省级大学生创新创业训练计划", "软件著作权 1 项"],
    image: "/images/projects/uav-tracking.jpg",
    github: "#",
    details: "#",
  },
  {
    id: "vehicle",
    title: "基于无人机视频的城市道路车辆识别",
    subtitle: "第 21 届全国大学生交通运输科技大赛",
    type: "竞赛项目",
    description: "基于无人机视频和 VisDrone 数据集开展城市道路车辆检测实验，重点研究复杂航拍场景下的小目标识别问题。",
    contributions: ["完成视频抽帧、样本筛选、目标标注及 VisDrone 数据集整理。", "开展迁移学习以及 640、960、1280 多输入分辨率对比实验。", "评估 Mosaic、图像增强和高分辨率训练对小目标检测性能的影响。"],
    tech: ["YOLO", "VisDrone", "OpenCV", "PyTorch", "迁移学习", "数据增强"],
    highlights: ["全国大学生交通运输科技大赛国家三等奖"],
    image: "/images/projects/vehicle-detection.jpg",
    github: "#",
    details: "#",
  },
];
