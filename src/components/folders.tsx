import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const FOLDERS = [
  { n: "01", name: "hi, that's me", to: "/me", tone: "bg-sage", files: "about.txt · photo.jpg" },
  { n: "02", name: "things I cooked", to: "/cooked", tone: "bg-terracotta", files: "4 projects" },
  { n: "03", name: "side quests", to: "/side-quests", tone: "bg-ochre", files: "content · gym" },
  { n: "04", name: "what's next", to: "/next", tone: "bg-sage", files: "learning.md" },
  { n: "05", name: "say hi", to: "/say-hi", tone: "bg-terracotta", files: "4 links" },
] as const;

export type FolderPath = (typeof FOLDERS)[number]["to"];

function FolderIcon({ tone }: { tone: string }) {
  return (
    <div className="relative h-16 w-20 shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
      <div className={`folder-tab absolute left-0 top-0 h-3 w-9 rounded-t-sm ${tone} opacity-80`} />
      <div className={`absolute inset-x-0 bottom-0 top-2 rounded-sm ${tone} opacity-60`} />
      <div className="absolute inset-x-1.5 bottom-3 top-4 rounded-[2px] bg-paper transition-transform duration-300 group-hover:-translate-y-1.5" />
      <div className={`absolute inset-x-0 bottom-0 top-5 origin-bottom rounded-sm ${tone} shadow-soft transition-transform duration-300 group-hover:[transform:perspective(200px)_rotateX(-18deg)]`} />
    </div>
  );
}

export function FolderNav() {
  return (
    <nav aria-label="Folders" className="grid gap-0 sm:grid-cols-5 sm:gap-4">
      {FOLDERS.map((f) => (
        <Link
          key={f.to}
          to={f.to}
          className="group flex items-center gap-4 border-b py-4 sm:flex-col sm:items-start sm:gap-3 sm:rounded-md sm:border sm:border-transparent sm:p-3 sm:hover:border-border sm:hover:bg-paper"
        >
          <FolderIcon tone={f.tone} />
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">{f.n} /</p>
            <p className="font-medium leading-tight group-hover:text-terracotta">{f.name}</p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground sm:hidden md:block">{f.files}</p>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export function FolderPage({ path, children }: { path: FolderPath; children: ReactNode }) {
  const idx = FOLDERS.findIndex((f) => f.to === path);
  const f = FOLDERS[idx];
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-5 py-6 sm:px-8 sm:py-10">
      <header className="flex items-center justify-between gap-4 border-b pb-4">
        <Link to="/" className="font-mono text-xs hover:text-terracotta">
          ← back to ~/aastha
        </Link>
        <div className="hidden gap-1 sm:flex">
          {FOLDERS.map((x) => (
            <Link
              key={x.to}
              to={x.to}
              className={`rounded-sm px-2 py-1 font-mono text-[11px] ${x.to === path ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {x.n}
            </Link>
          ))}
        </div>
      </header>
      <div className="animate-rise">
        <div className="mt-8 flex items-end gap-3">
          <span className={`mb-2 h-3 w-3 rounded-[2px] ${f.tone}`} />
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="font-mono text-base font-normal text-muted-foreground sm:text-lg">{f.n} / </span>
            {f.name}
          </h1>
        </div>
        <p className="mt-2 font-mono text-[11px] text-muted-foreground">~/aastha/{f.name.replace(/[^a-z ]/gi, "").replace(/ /g, "-").toLowerCase()}</p>
        <div className="mt-10">{children}</div>
      </div>
      <footer className="mt-20 flex justify-between border-t pt-4 font-mono text-[11px] text-muted-foreground">
        {idx > 0 ? <Link to={FOLDERS[idx - 1].to} className="hover:text-foreground">← {FOLDERS[idx - 1].name}</Link> : <span />}
        {idx < FOLDERS.length - 1 ? <Link to={FOLDERS[idx + 1].to} className="hover:text-foreground">{FOLDERS[idx + 1].name} →</Link> : <span />}
      </footer>
    </div>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
