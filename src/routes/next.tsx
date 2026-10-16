import { createFileRoute } from "@tanstack/react-router";
import { FolderPage, meta } from "@/components/folders";

const topics = ["DSA", "Backend Engineering", "System Design", "DevOps", "Distributed Systems"];

export const Route = createFileRoute("/next")({
  head: () => meta("what's next — Aastha Singh", "What Aastha is currently learning and exploring."),
  component: () => (
    <FolderPage path="/next">
      <p className="max-w-2xl text-2xl leading-snug">
        I'm interested in becoming a stronger software engineer — not just someone who can solve coding problems, but someone who understands how real systems are designed, built and operated.
      </p>
      <div className="mt-14">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">currently exploring</p>
        <ul className="mt-4 border-t">
          {topics.map((t, i) => (
            <li key={t} className="flex items-center justify-between border-b py-4">
              <span className="text-xl font-medium"><span className="mr-4 font-mono text-xs text-muted-foreground">0{i + 1}</span>{t}</span>
              <span className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ochre" /> in progress
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-14 max-w-xl leading-relaxed text-muted-foreground">
        I don't have every part of the next step figured out yet. That's okay. I'm more interested in getting better than pretending I already know where everything leads.
      </p>
    </FolderPage>
  ),
});
