import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-12 lg:px-20">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-ember text-primary-foreground shadow-ember font-display font-bold">S</span>
          <div>
            <div className="font-display font-bold">Suraj Sakhare<span className="text-primary">.</span></div>
            <div className="text-xs text-muted-foreground">Software Engineer</div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Suraj — Designed & built with care.
        </p>

        <div className="flex gap-2">
          {[
            { icon: Github, href: "https://github.com/surajsakhare14", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/suraj-sakhare-profile/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hello@suraj.dev", label: "Email" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
