import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import Section from "./Section";

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-950/40">
      <h3 className="break-words text-xl font-semibold leading-snug tracking-tight text-slate-950 [overflow-wrap:anywhere] sm:text-[22px] dark:text-white">{project.title}</h3>
      <p className="mt-2 text-[13px] font-semibold leading-5 text-academic-600 dark:text-blue-400">{project.subtitle}</p>
      <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-[15.5px] dark:text-slate-400">{project.description}</p>

      <div aria-label="技术路线" className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 rounded-lg bg-slate-50 px-3 py-2.5 dark:bg-slate-900/70">
        {project.pipeline.map((step, index) => (
          <span key={step} className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-slate-600 dark:text-slate-300">
            <span>{step}</span>
            {index < project.pipeline.length - 1 && <span aria-hidden="true" className="text-academic-500 dark:text-blue-400">→</span>}
          </span>
        ))}
      </div>

      <h4 className="mt-5 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">主要工作</h4>
      <ol className="mt-2.5 space-y-2.5">
        {project.contributions.map((item, index) => (
          <li key={item} className="flex gap-3 text-[14.5px] leading-6 text-slate-600 sm:text-[15px] dark:text-slate-400">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-academic-50 text-[11px] font-semibold text-academic-700 dark:bg-blue-950/60 dark:text-blue-300">{index + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>

      <h4 className="mt-5 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">技术关键词</h4>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {project.tech.map((item) => <span key={item} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium leading-5 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">{item}</span>)}
      </div>

      <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">
        <h4 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">项目成果</h4>
        <p className="mt-1.5 text-[14.5px] font-semibold leading-6 text-slate-900 sm:text-[15px] dark:text-white">{project.outcome}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="项目经历">
      <div className="section-content space-y-5">
        {projects.map((project) => <ProjectEntry key={project.title} project={project} />)}
      </div>
    </Section>
  );
}
