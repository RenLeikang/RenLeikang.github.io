import { FileText, Github, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { assetPath } from "../lib/assetPath";
import Section from "./Section";

export default function Contact() {
  const githubReady = profile.github !== "YOUR_GITHUB_URL";
  const contacts = [
    { label: "邮箱", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, ready: true },
    { label: "GitHub", value: githubReady ? "查看个人主页" : "GitHub 地址待补充", href: githubReady ? profile.github : "#contact", icon: Github, ready: githubReady },
    { label: "个人简历", value: "查看 PDF", href: assetPath(profile.cv), icon: FileText, ready: true },
  ];
  return (
    <Section id="contact" eyebrow="Get in Touch" title="联系方式" intro="我希望进一步学习计算机视觉、无人机视觉感知与多模态学习等方向，欢迎就科研学习与项目合作进行交流。">
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {contacts.map(({ label, value, href, icon: Icon, ready }) => (
          <a key={label} href={href} target={label === "邮箱" ? undefined : "_blank"} rel="noreferrer" onClick={(event) => !ready && event.preventDefault()} className={`focus-ring group rounded-xl border border-slate-200 p-5 transition dark:border-slate-800 ${ready ? "hover:border-academic-600 hover:bg-blue-50/40 dark:hover:border-blue-400 dark:hover:bg-blue-950/20" : "cursor-not-allowed opacity-60"}`}>
            <Icon size={19} className="text-academic-600 dark:text-blue-400" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{label}</p>
            <p className="mt-1 break-all text-sm font-medium text-slate-800 group-hover:text-academic-700 dark:text-slate-200 dark:group-hover:text-blue-300">{value}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
