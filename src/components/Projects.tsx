import { useState } from "react";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import ProjectMedia from "./ProjectMedia";
import Section from "./Section";

function ProjectEntry({ project }: { project: Project }) {
  const [hasMedia, setHasMedia] = useState(Boolean(project.image));

  return (
    <article className={`grid gap-6 border-t border-slate-200 py-7 first:pt-0 last:border-b dark:border-slate-800 ${hasMedia ? "lg:grid-cols-[0.7fr_1.3fr] lg:items-start" : ""}`}>
      {hasMedia && <ProjectMedia project={project} onUnavailable={() => setHasMedia(false)} />}
      <div>
        <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400">{project.subtitle}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-[22px] dark:text-white">{project.title}</h3>
        {project.highlights && <p className="mt-2 text-[13px] font-semibold text-academic-600 dark:text-blue-400">{project.highlights.join(" · ")}</p>}
        <p className="mt-4 text-[15.5px] leading-7 text-slate-600 sm:text-base dark:text-slate-400">{project.description}</p>
        <p className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">主要工作</p>
        <ul className="mt-2.5 space-y-2">
          {project.contributions.map((item) => <li key={item} className="flex gap-2.5 text-[14.5px] leading-6 text-slate-600 sm:text-[15px] dark:text-slate-400"><span className="mt-[9px] size-1 shrink-0 rounded-full bg-academic-600/80 dark:bg-blue-400" /><span>{item}</span></li>)}
        </ul>
        <p className="mt-5 text-[13px] leading-6 text-slate-500 dark:text-slate-400">{project.tech.join(" · ")}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="项目经历">
      <div className="section-content">
        {projects.map((project) => <ProjectEntry key={project.title} project={project} />)}
      </div>
    </Section>
  );
}
