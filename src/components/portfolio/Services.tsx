import { Bot, Cog, Database, Webhook } from "lucide-react";

const SERVICES = [
  {
    icon: Database,
    title: "Backend Development",
    desc: "Production-ready services in Python/Flask/Django with thoughtful schemas, migrations, and tests.",
  },
  {
    icon: Webhook,
    title: "API Development",
    desc: "Versioned, documented REST & webhook APIs — secure auth, rate limiting, and clean contracts.",
  },
  {
    icon: Bot,
    title: "Chatbot & AI Integrations",
    desc: "GPT-powered assistants with RAG, function calling, and seamless integration into your stack.",
  },
  {
    icon: Cog,
    title: "Automation Systems",
    desc: "Scrapers, schedulers, and internal tools that save hours of manual work every week.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <div className="mb-16 max-w-2xl reveal">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// 05 — Services</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            How I can <span className="text-gradient">help you</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-8 transition-all duration-500 hover:border-primary/50"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-ember text-primary-foreground shadow-ember transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
