import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "PayFlow API",
    desc: "Multi-tenant payments backend with Stripe & Razorpay integrations, webhook reconciliation, and idempotent retries.",
    stack: ["Python", "Flask", "PostgreSQL", "Stripe", "Redis"],
    github: "#",
    demo: "#",
    accent: "from-primary to-primary-glow",
  },
  {
    title: "ChatLayer AI",
    desc: "Conversational AI platform: GPT-powered chatbots with RAG over private docs, function calling, and live analytics.",
    stack: ["Python", "FastAPI", "OpenAI", "Pinecone"],
    github: "#",
    demo: "#",
    accent: "from-primary-glow to-primary",
  },
  {
    title: "OrderForge ERP",
    desc: "Inventory + order microservices with event-driven sync between marketplaces, warehouses, and shipping providers.",
    stack: ["Django", "Celery", "RabbitMQ", "Docker"],
    github: "#",
    demo: "#",
    accent: "from-primary to-primary-glow",
  },
  {
    title: "ScrapeKit",
    desc: "Distributed scraping framework with proxy rotation, browser automation, and structured JSON pipelines.",
    stack: ["Python", "Playwright", "Redis", "AWS"],
    github: "#",
    demo: "#",
    accent: "from-primary-glow to-primary",
  },
  {
    title: "AuthGate",
    desc: "Drop-in authentication service with JWT, OAuth, magic links, and granular role-based access control.",
    stack: ["Flask", "JWT", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
    accent: "from-primary to-primary-glow",
  },
  {
    title: "WebhookOps",
    desc: "Reliable webhook delivery with exponential backoff, signed payloads, and a real-time delivery dashboard.",
    stack: ["Python", "FastAPI", "Postgres", "React"],
    github: "#",
    demo: "#",
    accent: "from-primary-glow to-primary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl reveal">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// 03 — Projects</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Selected work I'm <span className="text-gradient">proud of</span>.
            </h2>
          </div>
          <a href="#" className="reveal inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
            See all on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-ember"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover glow */}
              <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`} />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary font-mono text-sm font-bold text-primary">
                    0{i + 1}
                  </div>
                  <div className="flex gap-2">
                    <a href={p.github} aria-label="GitHub" className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={p.demo} aria-label="Live demo" className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
