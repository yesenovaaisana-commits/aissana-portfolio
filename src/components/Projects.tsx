import { useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';

const FILTERS: Array<'All' | Project['category']> = ['All', 'React', 'Next.js', 'UI / Data'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | Project['category']>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Selected frontend applications and UI engineering builds.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-indigo-500/40 dark:border-slate-800 dark:bg-slate-900/60"
            >
              {/* Soft gradient header accent */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${project.accentGradient}`}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="rounded-lg border border-slate-200 bg-white/80 p-2 text-slate-600 transition hover:border-indigo-500/40 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-indigo-400"
                    >
                      <FolderGit2 className="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="rounded-lg border border-slate-200 bg-white/80 p-2 text-slate-600 transition hover:border-indigo-500/40 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-indigo-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}