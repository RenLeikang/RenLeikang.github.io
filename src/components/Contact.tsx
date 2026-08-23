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
    <Section id="contact" eyebrow="Contact" title="联系方式" intro="我希望进一步学习计算机视觉、无人机视觉感知、目标检测与跟踪等方向，欢迎就科研学习与项目合作进行交流。">
      <div className="section-content grid border-y border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-slate-200 dark:border-slate-800 dark:sm:divide-slate-800">
        {contacts.map(({ label, value, href, icon: Icon, ready }) => (
          <a key={label} href={href} target={label === "邮箱" ? undefined : "_blank"} rel="noreferrer" onClick={(event) => !ready && event.preventDefault()} className={`focus-ring group flex items-start gap-3 border-b border-slate-200 px-1 py-5 transition last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 dark:border-slate-800 ${ready ? "hover:text-academic-600" : "cursor-not-allowed opacity-60"}`}>
            <Icon size={18} className="mt-0.5 shrink-0 text-academic-600 dark:text-blue-400" />
            <div><p className="text-xs font-medium text-slate-400">{label}</p><p className="mt-0.5 break-all text-sm font-medium text-slate-800 group-hover:text-academic-700 dark:text-slate-200 dark:group-hover:text-blue-300">{value}</p></div>
          </a>
        ))}
      </div>
    </Section>
  );
}
