import { Code2, Rocket, Server, Zap } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Server, title: "Backend Architecture", desc: "Designing fault-tolerant services that scale." },
  { icon: Code2, title: "Clean APIs", desc: "REST & GraphQL with thoughtful contracts." },
  { icon: Zap, title: "Automation", desc: "Cron jobs, scrapers, and workflow bots." },
  { icon: Rocket, title: "Performance", desc: "Profiling, caching & query optimization." },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 reveal">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// 01 — About</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Backend engineer with a bias toward <span className="text-gradient">shipping</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            I'm Suraj — a Python backend developer focused on building reliable, well-tested services that power real products. From payment workflows to AI-driven chatbots and automation pipelines, I love translating messy business problems into elegant systems.
          </p>
          <p className="mt-4 text-muted-foreground">
            I work end-to-end: designing the schema, writing the API, wiring webhooks, deploying to production, and instrumenting it so it stays healthy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Python", "Flask", "Django", "PostgreSQL", "Docker", "AWS"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-xs font-medium font-mono text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              className="reveal group glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-ember text-primary-foreground shadow-ember transition-transform group-hover:scale-110">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
