export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white px-6 py-16 text-center sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
          Vibe Portfolio
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          A minimal starting point to share your work and story.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">
          Build out your projects, add a bio, and make it yours. This clean
          scaffold keeps the focus on your content—no extra clutter.
        </p>
        <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 sm:flex-row">
          <a
            className="flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            View Next.js docs
          </a>
          <a
            className="flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 transition hover:border-slate-300 hover:bg-slate-50"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
          >
            View Tailwind docs
          </a>
        </div>
      </div>
    </main>
  );
}
