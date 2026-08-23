import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={`reveal scroll-mt-20 ${className}`}>
      <div className="section-wrap">
        <header>
          <p className="section-kicker">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {intro && <p className="section-copy">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
