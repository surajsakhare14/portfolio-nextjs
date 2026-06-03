import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";

const ROLES = [
  "Python Backend Developer",
  "API Architect",
  "Microservices Engineer",
  "Automation Specialist",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    const tick = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1600);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setIdx((idx + 1) % ROLES.length);
          }
        }
      },
      del ? 40 : 80
    );
    return () => clearTimeout(tick);
  }, [text, del, idx]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-12 lg:px-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating glow orbs */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 animate-float rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-32 top-1/2 h-96 w-96 animate-float rounded-full bg-primary-glow/15 blur-[120px]" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new projects
          </div>

          <h1 className="mb-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm <span className="text-gradient">Suraj</span>
            <br />
            <span className="font-mono text-3xl font-medium text-muted-foreground md:text-4xl lg:text-5xl">
              {text}
              <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-1 bg-primary animate-blink" />
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Building <span className="text-foreground font-semibold">scalable backend systems</span>, robust APIs, and intelligent automation. I turn complex business logic into clean, performant, production-ready code.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-ember px-7 py-4 text-sm font-semibold text-primary-foreground shadow-ember transition-all hover:scale-105 hover:shadow-glow"
            >
              <Sparkles className="h-4 w-4" />
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/50 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              View Projects
            </a>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="GitHub" className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { num: "3+", label: "Years building" },
              { num: "40+", label: "APIs shipped" },
              { num: "15+", label: "Happy clients" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-gradient">{s.num}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code card */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-ember opacity-30 blur-2xl" />
            <div className="relative glass rounded-3xl p-1 shadow-soft">
              <div className="rounded-[20px] bg-surface-elevated p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-destructive/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">app.py</span>
                </div>
                <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
{`from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/dev")
def whoami():
    return jsonify({
        "name":   "Suraj",
        "role":   "Backend Engineer",
        "stack":  ["Python", "Flask",
                   "Django", "Postgres"],
        "loves":  "clean APIs ✨",
        "open_to_work": True,
    })`.split("\n").map((line, i) => (
  <div key={i}>
    <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/40">{i + 1}</span>
    <span dangerouslySetInnerHTML={{ __html: highlight(line) }} />
  </div>
))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Tiny syntax highlighter — purely cosmetic, uses theme tokens
function highlight(line: string) {
  const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let out = escape(line);
  out = out.replace(/("[^"]*")/g, '<span style="color:hsl(var(--primary-glow))">$1</span>');
  out = out.replace(/\b(from|import|def|return|True|False)\b/g, '<span style="color:hsl(var(--primary))">$1</span>');
  out = out.replace(/(@[a-zA-Z_.]+)/g, '<span style="color:hsl(var(--primary))">$1</span>');
  out = out.replace(/(#.*)$/g, '<span style="color:hsl(var(--muted-foreground))">$1</span>');
  return out;
}
