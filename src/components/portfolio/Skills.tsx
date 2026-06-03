const SKILLS = [
  { name: "Python", level: 95 },
  { name: "Flask", level: 92 },
  { name: "Django", level: 85 },
  { name: "Node.js", level: 78 },
  { name: "REST APIs & Microservices", level: 93 },
  { name: "PostgreSQL", level: 88 },
  { name: "Firebase", level: 82 },
  { name: "Payment Gateways & Webhooks", level: 90 },
];

const TECH_STRIP = [
  "Python", "Flask", "Django", "FastAPI", "Node.js", "PostgreSQL",
  "Redis", "Docker", "AWS", "Firebase", "Stripe", "Razorpay", "Celery", "Nginx",
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-gradient-surface">
      <div className="container mx-auto">
        <div className="mb-16 max-w-2xl reveal">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// 02 — Skills</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            The toolkit I reach for <span className="text-gradient">every day</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              className="reveal glass rounded-2xl p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display font-semibold">{s.name}</span>
                <span className="font-mono text-xs text-primary">{s.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-ember shadow-ember transition-all duration-1000 ease-out"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Marquee tech strip */}
        <div className="relative mt-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-12 font-mono text-sm text-muted-foreground">
            {[...TECH_STRIP, ...TECH_STRIP].map((t, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
