import type { ReactNode } from "react";
import { project } from "../project-data";

const navigation = [
  { href: "/", label: "Overview" },
  { href: "/research", label: "Research" },
  { href: "/literature", label: "Literature" },
  { href: "/methodology", label: "Methodology" },
  { href: "/results", label: "Results" },
  { href: "/progress", label: "Progress" },
  { href: "/mentors", label: "Mentors" },
  { href: "/team", label: "Team & contact" },
];

export function SiteHeader({ current }: { current: string }) {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Project sections">
        <a className="brand" href="/" aria-label="WPT Efficiency overview"><span>WE</span>WPT Efficiency</a>
        <div className="site-nav-links">
          {navigation.map((item) => (
            <a className={current === item.href ? "active" : ""} href={item.href} key={item.href} aria-current={current === item.href ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container"><span>{project.title}</span><span>Designed as a living research record - update {project.updated} after each milestone.</span><a href="/">Overview ↑</a></div>
    </footer>
  );
}

export function PageFrame({ children, current }: { children: ReactNode; current: string }) {
  return <><SiteHeader current={current} /><main>{children}</main><SiteFooter /></>;
}
