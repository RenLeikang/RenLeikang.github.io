export type Project = {
  id: "uav" | "vehicle";
  title: string;
  subtitle: string;
  description: string;
  contributions: string[];
  pipeline: string[];
  tech: string[];
  outcome: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "uav",
    title: "基于无人机的罪犯追捕与跟踪系统",
    subtitle: "省级大学生创新创业训练计划｜项目负责人",
    description: "面向户外安防场景，构建集人体检测、身份识别、轨迹预测、无人机持续跟踪与地面端可视化于一体的智能追踪系统。",
    contributions: [
      "基于YOLOv5与ArcFace完成人体检测和身份判别，通过人脸与人体检测框空间关联实现特定人员定位。",
      "结合卡尔曼滤波进行目标轨迹预测，并基于目标位置偏差与PID控制生成飞控指令，实现无人机持续跟踪。",
      "完成UDP视频传输、地面端可视化及多线程优化，并开展多场景测试与系统迭代，提升系统稳定性与实时性。",
    ],
    pipeline: ["人体检测", "身份识别", "轨迹预测", "飞控跟踪", "地面端展示"],
    tech: ["YOLOv5", "ArcFace", "OpenCV", "Kalman Filter", "PID", "UDP", "Qt", "Multithreading"],
    outcome: "省级大创顺利结项｜软件著作权1项",
  },
  {
    id: "vehicle",
    title: "基于无人机视频的城市道路车辆识别、参数分析与风险挖掘｜道路车辆识别模块",
    subtitle: "第二十一届全国大学生交通运输科技大赛｜负责道路车辆识别模块",
    description: "面向无人机航拍道路场景，负责道路车辆识别模块，围绕VisDrone数据集开展目标检测模型迁移学习、小目标识别及多分辨率对比实验。",
    contributions: [
      "基于VisDrone无人机航拍数据集完成数据整理、目标标注及YOLO预训练模型迁移学习。",
      "针对高空视角下车辆目标尺度小、密集场景漏检较多的问题，分别采用640、960、1280输入分辨率开展对比实验。",
      "结合Mosaic数据增强与图像去雾优化检测效果，完成模型验证、性能评估及最优权重筛选。",
    ],
    pipeline: ["VisDrone数据处理", "迁移学习", "多分辨率实验", "性能优化", "权重筛选"],
    tech: ["VisDrone", "数据处理", "迁移学习", "小目标检测", "多分辨率对比实验", "Mosaic", "图像去雾", "性能优化"],
    outcome: "第二十一届全国大学生交通运输科技大赛国家三等奖",
  },
];
