import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { projects } from "../data/projects";
import ProjectMedia from "./ProjectMedia";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Research & Engineering" title="项目经历" intro="围绕无人机视觉、小目标检测、目标跟踪与多模态视频分析开展的代表性工程项目和实验。">
      <div className="mt-9 space-y-5">
        {projects.map((project, index) => (
          <article key={project.title} className="grid gap-6 rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300 hover:shadow-[0_16px_45px_-35px_rgba(15,23,42,0.4)] sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start dark:border-slate-800 dark:hover:border-slate-700">
            <div className={index % 2 ? "lg:order-2" : ""}><ProjectMedia project={project} /></div>
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-academic-600 dark:text-blue-400">
                <span>项目 {String(index + 1).padStart(2, "0")}</span>
                <><span className="text-slate-300 dark:text-slate-700">/</span><span>{project.type}</span></>
                {project.role && <><span className="text-slate-300 dark:text-slate-700">/</span><span>{project.role}</span></>}
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-2xl dark:text-white">{project.title}</h3>
              {project.subtitle && <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{project.subtitle}</p>}
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
              <ul className="mt-5 space-y-2.5">
                {project.contributions.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400"><CheckCircle2 size={16} className="mt-1 shrink-0 text-academic-600 dark:text-blue-400" /><span>{item}</span></li>)}
              </ul>
              {project.metrics && <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700 sm:grid-cols-4">{project.metrics.map((metric) => <div key={metric.label} className="bg-slate-50 p-3 dark:bg-slate-900"><dt className="text-[10px] uppercase tracking-wide text-slate-400">{metric.label}</dt><dd className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{metric.value}</dd></div>)}</dl>}
              {project.highlights && <div className="mt-5 flex flex-wrap gap-2">{project.highlights.map((highlight) => <span key={highlight} className="rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-academic-700 dark:bg-blue-950/50 dark:text-blue-300">{highlight}</span>)}</div>}
              <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
              <div className="mt-7 flex items-center gap-5 text-sm font-semibold">
                <a href={project.github} aria-disabled={project.github === "#"} onClick={(event) => project.github === "#" && event.preventDefault()} className={`focus-ring inline-flex items-center gap-2 rounded ${project.github === "#" ? "cursor-not-allowed text-slate-400" : "text-slate-700 hover:text-academic-600 dark:text-slate-200 dark:hover:text-blue-400"}`}><Github size={16} /> 项目代码</a>
                <a href={project.details} aria-disabled={project.details === "#"} onClick={(event) => project.details === "#" && event.preventDefault()} className={`focus-ring inline-flex items-center gap-1 rounded ${project.details === "#" ? "cursor-not-allowed text-slate-400" : "text-slate-700 hover:text-academic-600 dark:text-slate-200 dark:hover:text-blue-400"}`}>项目详情 <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
