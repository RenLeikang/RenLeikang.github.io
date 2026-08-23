import { useState } from "react";
import type { Project } from "../data/projects";
import { assetPath } from "../lib/assetPath";

export default function ProjectMedia({ project, onUnavailable }: { project: Project; onUnavailable: () => void }) {
  const [failed, setFailed] = useState(false);
  if (!project.image || failed) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
      <img
        src={assetPath(project.image)}
        alt={`${project.title}项目截图`}
        loading="lazy"
        onError={() => { setFailed(true); onUnavailable(); }}
        className="mx-auto max-h-[280px] h-auto w-full object-contain"
      />
    </div>
  );
}
