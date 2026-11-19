import { EXPERIENCE } from '../data/portfolioData';

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Experience & Education
        </h2>

        <div className="mt-8 space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
          {EXPERIENCE.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-indigo-600 bg-slate-50 dark:border-indigo-400 dark:bg-slate-950"
              />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {item.organization}
                  </p>
                </div>

                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                  {item.period}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}