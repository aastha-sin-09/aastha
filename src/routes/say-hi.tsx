import { createFileRoute } from "@tanstack/react-router";
import { FolderPage, meta } from "@/components/folders";

const links = [
  { k: "Email", v: "aastha.sin09@gmail.com", href: "mailto:aastha.sin09@gmail.com" },
  { k: "GitHub", v: "aastha-sin-09", href: "https://github.com/aastha-sin-09" },
  { k: "LinkedIn", v: "aastha-sin09", href: "https://www.linkedin.com/in/aastha-sin09" },
  { k: "Instagram", v: "@aastha.mp3", href: "https://www.instagram.com/aastha.mp3" },
];

export const Route = createFileRoute("/say-hi")({
  head: () => meta("say hi — Aastha Singh", "Get in touch with Aastha by email, GitHub, LinkedIn or Instagram."),
  component: () => (
    <FolderPage path="/say-hi">
      <p className="max-w-lg text-lg text-muted-foreground">The easiest way to reach me is email — but any of these work.</p>
      <ul className="mt-10 border-t">
        {links.map((l) => (
          <li key={l.k}>
            <a href={l.href} target={l.k === "Email" ? undefined : "_blank"} rel="noreferrer" className="group flex items-baseline justify-between gap-4 border-b py-5 hover:bg-paper sm:px-2">
              <span className="font-mono text-xs text-muted-foreground">{l.k}</span>
              <span className="truncate text-xl font-medium group-hover:text-terracotta sm:text-3xl">{l.v} <span className="text-ochre">↗</span></span>
            </a>
          </li>
        ))}
      </ul>
    </FolderPage>
  ),
});
