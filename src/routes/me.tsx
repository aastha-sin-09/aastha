import { createFileRoute } from "@tanstack/react-router";
import me from "@/assets/me.jpeg";
import { FolderPage, meta } from "@/components/folders";

export const Route = createFileRoute("/me")({
  head: () => meta("hi, that's me — Aastha Singh", "Who is Aastha? A CS student who enjoys figuring things out."),
  component: () => (
    <FolderPage path="/me">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="border bg-paper p-2 shadow-soft md:sticky md:top-8 md:self-start">
          <img src={me} alt="Aastha Singh" className="w-full" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="font-mono text-[11px] text-muted-foreground">about.txt</p>
          <p className="text-2xl font-medium">I'm Aastha, a computer science student who genuinely enjoys figuring things out.</p>
          <p>I'm interested in software engineering, backend systems and understanding what happens behind the interfaces we use every day.</p>
          <p>I like learning by building, and I usually find myself going down a rabbit hole whenever something makes me curious.</p>
          <p className="border-l-2 border-terracotta pl-4">I'm still figuring out exactly what I want my career to look like, but I know I want to become someone who can take a problem, learn what is necessary, and build something meaningful from it.</p>
        </div>
      </div>
    </FolderPage>
  ),
});
