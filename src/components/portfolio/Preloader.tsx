import { useEffect, useState } from "react";

export const Preloader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={done}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-2xl bg-gradient-ember shadow-ember animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center font-display text-2xl font-bold text-primary-foreground">
            S
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Loading<span className="animate-pulse">...</span>
        </div>
      </div>
    </div>
  );
};
