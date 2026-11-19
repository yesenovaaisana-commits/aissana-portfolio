import { ABOUT_DATA } from '../data/portfolioData';

export function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          About Me
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-2 dark:text-slate-300">
            {ABOUT_DATA.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Snapshot
            </h3>
            <dl className="mt-4 space-y-4">
              {ABOUT_DATA.quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{fact.label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}