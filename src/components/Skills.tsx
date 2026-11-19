import { SKILL_GROUPS } from '../data/portfolioData';

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Skills & Tech Stack
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Technologies and tools I use to design, build, and ship web interfaces.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-indigo-500/40 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}