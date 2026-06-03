import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setLoading(true);
    // Placeholder submission — wire to Lovable Cloud later
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Thanks! I'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />

      <div className="container relative mx-auto grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 reveal">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// 06 — Contact</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Let's build something <span className="text-gradient">great</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Have a backend idea, integration challenge, or full product to ship? Drop a line and I'll get back within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:hello@suraj.dev" className="flex items-center gap-4 rounded-2xl border border-border bg-surface-elevated p-4 transition-colors hover:border-primary">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-ember text-primary-foreground"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">hello@suraj.dev</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface-elevated p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="font-medium">Remote · Worldwide</div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="GitHub" className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal lg:col-span-7 glass rounded-3xl p-8 shadow-soft">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-2 block font-mono text-xs text-muted-foreground">NAME</label>
              <input
                name="name"
                required
                maxLength={100}
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block font-mono text-xs text-muted-foreground">EMAIL</label>
              <input
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="jane@company.com"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block font-mono text-xs text-muted-foreground">MESSAGE</label>
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={6}
                placeholder="Tell me about your project…"
                className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-ember px-6 py-4 text-sm font-semibold text-primary-foreground shadow-ember transition-all hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
          >
            {loading ? "Sending…" : "Send message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};
