import { createFileRoute } from "@tanstack/react-router";
import insta from "@/assets/insta1.jpeg.asset.json";
import gym from "@/assets/gym.mp4.asset.json";
import { FolderPage, meta } from "@/components/folders";

export const Route = createFileRoute("/side-quests")({
  head: () => meta("side quests — Aastha Singh", "Content on Instagram about tech and student life, and time at the gym."),
  component: () => (
    <FolderPage path="/side-quests">
      <section className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-mono text-[11px] text-muted-foreground">content/</p>
          <h2 className="mt-1 text-2xl font-semibold">Making reels about being a CS student</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            I create content on Instagram around technology, student life, placements and my experiences as a CS student.
          </p>
          <dl className="mt-8 grid max-w-sm grid-cols-2 border-y">
            <div className="border-r py-4"><dt className="font-mono text-[10px] uppercase text-muted-foreground">followers</dt><dd className="text-3xl font-semibold">3K+</dd></div>
            <div className="py-4 pl-4"><dt className="font-mono text-[10px] uppercase text-muted-foreground">views on one reel</dt><dd className="text-3xl font-semibold text-terracotta">1.5M+</dd></div>
          </dl>
          <a href="https://www.instagram.com/aastha.mp3" target="_blank" rel="noreferrer" className="mt-8 inline-block bg-primary px-5 py-3 font-medium text-primary-foreground hover:bg-terracotta">
            Instagram →
          </a>
        </div>
        <figure className="border bg-paper p-2 shadow-soft md:rotate-1">
          <img src={insta.url} alt="Screenshot of Aastha's Instagram profile, aastha.mp3" className="w-full" />
          <figcaption className="mt-2 font-mono text-[10px] text-muted-foreground">screenshot · @aastha.mp3</figcaption>
        </figure>
      </section>
      <section className="mt-20 grid items-center gap-8 border-t pt-10 md:grid-cols-[14rem_1fr]">
        <video src={gym.url} className="aspect-[9/16] w-full max-w-56 border bg-paper object-cover p-1" autoPlay muted loop playsInline />
        <div>
          <p className="font-mono text-[11px] text-muted-foreground">gym/</p>
          <p className="mt-2 max-w-md text-lg leading-relaxed">
            Outside my laptop, I spend a good amount of time training at the gym. It's something I've become genuinely proud of, and one of the things that keeps me grounded.
          </p>
        </div>
      </section>
    </FolderPage>
  ),
});
