import { FileText, Github, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { assetPath } from "../lib/assetPath";
import Section from "./Section";

export default function Contact() {
  const contacts = [
    { label: "邮箱", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    ...(profile.github ? [{ label: "GitHub", value: "查看个人主页", href: profile.github, icon: Github }] : []),
    { label: "个人简历", value: "查看 PDF", href: assetPath(profile.cv), icon: FileText },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="联系方式">
      <div className={`section-content grid border-y border-slate-200 sm:divide-x sm:divide-slate-200 dark:border-slate-800 dark:sm:divide-slate-800 ${contacts.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {contacts.map(({ label, value, href, icon: Icon }) => (
          <a key={label} href={href} target={label === "邮箱" ? undefined : "_blank"} rel="noreferrer" className="focus-ring group flex items-start gap-3 border-b border-slate-200 px-1 py-5 transition last:border-b-0 hover:text-academic-600 sm:border-b-0 sm:px-5 sm:first:pl-0 dark:border-slate-800">
            <Icon size={18} className="mt-0.5 shrink-0 text-academic-600 dark:text-blue-400" />
            <div>
              <p className="text-xs font-medium text-slate-400">{label}</p>
              <p className="mt-0.5 break-all text-sm font-medium text-slate-800 group-hover:text-academic-700 dark:text-slate-200 dark:group-hover:text-blue-300">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
