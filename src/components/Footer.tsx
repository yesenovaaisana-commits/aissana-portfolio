import { HERO_DATA } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-8 dark:border-slate-800/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 text-xs text-slate-500 sm:flex-row dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {HERO_DATA.name}. All rights reserved.
        </p>
        <p className="font-mono">Built with React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}