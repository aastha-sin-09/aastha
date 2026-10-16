import { createFileRoute } from "@tanstack/react-router";
import me from "@/assets/me.jpeg.asset.json";
import { FolderNav, meta } from "@/components/folders";

export const Route = createFileRoute("/")({
  head: () => meta("Aastha Singh", "Hi, I'm Aastha — a computer science student who enjoys building things."),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-6 sm:px-8 sm:py-10">
      <div className="flex items-center justify-between border-b pb-4 font-mono text-[11px] text-muted-foreground">
        <span>~/aastha</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sage" /> 5 folders</span>
      </div>
      <section className="grid items-center gap-10 py-10 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div className="animate-rise order-2 md:order-1">
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            AASTHA<br />SINGH<span className="text-terracotta">.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Hi, I'm Aastha. I'm a computer science student who enjoys building things, understanding how they work, and exploring what comes next.
          </p>
        </div>
        <figure className="order-1 md:order-2">
          <div className="border bg-paper p-2 shadow-soft">
            <img src={me.url} alt="Aastha Singh standing outdoors under a tree" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
          <figcaption className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
            <span>me.jpeg</span><span>outdoors, probably smiling</span>
          </figcaption>
        </figure>
      </section>
      <section>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">open a folder</p>
        <FolderNav />
      </section>
    </main>
  );
}
