import { useState } from 'react';
import { Check, Copy, Instagram, Mail, Phone } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

export function Contact() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback ignored if clipboard permission is blocked
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs sm:p-10 dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Let’s build something great together
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            Feel free to reach out for frontend internships, project collaborations, or just to say
            hello.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {/* Email Card */}
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="flex min-w-0 items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                    {CONTACT_DATA.email}
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_DATA.email, 'email')}
                aria-label="Copy email address"
                className="ml-2 shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-200/70 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {copiedField === 'email' ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <a
                href={`tel:${CONTACT_DATA.phoneHref}`}
                className="flex min-w-0 items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                    {CONTACT_DATA.phone}
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_DATA.phone, 'phone')}
                aria-label="Copy phone number"
                className="ml-2 shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-200/70 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {copiedField === 'phone' ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Instagram Card */}
            <a
              href={CONTACT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-500/40 dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400">Instagram</p>
                <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  {CONTACT_DATA.instagramHandle}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}