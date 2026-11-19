import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Subtle decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15"
      />

      <div className="mx-auto max-w-5xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{HERO_DATA.badge}</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {HERO_DATA.name}
        </h1>

        <p className="mt-3 font-mono text-base font-medium text-indigo-600 sm:text-lg dark:text-indigo-400">
          {HERO_DATA.role} · {HERO_DATA.major}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {HERO_DATA.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}