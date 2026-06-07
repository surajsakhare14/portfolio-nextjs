const TIMELINE = [
  {
    role: "Software Engineer",
    company: "Birdvision · On-site",
    period: "March-2026 — Present",
    bullets: [
      "Architected payment & webhook systems for 10+ SaaS clients.",
      "Built AI-powered chat backends serving 100k+ monthly conversations.",
      "Cut average API response time by 60% through query & cache tuning.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Payppy Technologies Pvt Ltd · On-site",
    period: "Dec-2024 — Jan-2026",
    bullets: [
      "Owned the order-management microservice (Django + Celery).",
      "Migrated legacy monolith to event-driven services with RabbitMQ.",
      "Mentored 2 junior devs through code reviews and pair sessions.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Payppy Technologies Pvt Ltd · On-site",
    period: "Sept-2024 — Dec-2024",
    bullets: [
      "Built internal automation tools that saved 20+ hours/week.",
      "Implemented REST APIs in Flask consumed by mobile & web apps.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-gradient-surface">
      <div className="container mx-auto">
        <div className="mb-16 max-w-2xl reveal">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// 04 — Experience</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            A timeline of <span className="text-gradient">building things</span>.
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <div
                key={item.role}
                className={`reveal relative flex flex-col gap-6 md:flex-row md:items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-ember shadow-ember md:left-1/2" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass rounded-2xl p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-glow">
                    <div className="font-mono text-xs text-primary">{item.period}</div>
                    <h3 className="mt-2 font-display text-xl font-bold">{item.role}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{item.company}</div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
