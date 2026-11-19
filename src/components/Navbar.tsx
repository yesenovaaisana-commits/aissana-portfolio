import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-base font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          aissana<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-indigo-500/40 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}