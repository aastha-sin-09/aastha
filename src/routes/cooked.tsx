import { createFileRoute } from "@tanstack/react-router";
import { FolderPage, meta } from "@/components/folders";

const projects = [
  {
    file: "trafficpilot/",
    name: "TrafficPilot",
    desc: "A mini CDN and load balancer built from scratch. It routes traffic across backend servers using Round Robin and Least Connections, with rate limiting, caching, health checks and Redis integration to simulate real-world distributed system behaviour.",
    tech: ["Python", "FastAPI", "Redis"],
    work: ["Layered request pipeline: rate limit → cache → load balance → forward", "Background health checks with auto failover", "Redis-backed shared cache and rate limiter, with in-memory fallback", "P50/P95/P99 response-time metrics"],
    link: "https://github.com/aastha-sin-09/TrafficPilot",
    label: "GitHub",
  },
  {
    file: "prism-mcp/",
    name: "Samsung PRISM — MCP Server for Optimising Cloud Cost",
    desc: "An MCP server for optimising cloud cost, built as part of a Samsung PRISM R&D project.",
    tech: ["MCP", "Cloud"],
    work: ["Samsung PRISM R&D project"],
    link: "https://lnkd.in/p/dNB5NppV",
    label: "View project",
  },
  {
    file: "faultline-ai/",
    name: "FaultLine AI",
    desc: "Agentic debug intelligence for Spring Boot systems.",
    tech: ["Spring Boot", "AI agents"],
    work: [],
    link: "https://github.com/aastha-sin-09/faultline-ai",
    label: "GitHub",
  },
  {
    file: "uber-clone/",
    name: "Uber Clone",
    desc: "A ride-hailing backend built with Spring Boot microservices.",
    tech: ["Java", "Spring Boot", "Microservices", "Docker"],
    work: [],
    link: "https://github.com/aastha-sin-09/Uber-Clone-Springboot",
    label: "GitHub",
  },
];

export const Route = createFileRoute("/cooked")({
  head: () => meta("things I cooked — Aastha Singh", "Projects by Aastha: TrafficPilot, Samsung PRISM MCP server, FaultLine AI and an Uber clone."),
  component: () => (
    <FolderPage path="/cooked">
      <div className="hidden grid-cols-[3rem_1fr_9rem] border-b pb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:grid">
        <span>#</span><span>name</span><span className="text-right">link</span>
      </div>
      <ol>
        {projects.map((p, i) => (
          <li key={p.name} className="grid gap-3 border-b py-8 md:grid-cols-[3rem_1fr_9rem]">
            <span className="font-mono text-xs text-terracotta">0{i + 1}</span>
            <div>
              <p className="font-mono text-[11px] text-muted-foreground">{p.file}</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{p.desc}</p>
              {p.work.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.work.map((w) => (
                    <li key={w} className="flex gap-2"><span className="text-ochre">→</span>{w}</li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px]">
                {p.tech.map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-sage" />{t}</span>
                ))}
              </div>
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" className="self-start font-mono text-xs underline decoration-terracotta underline-offset-4 hover:text-terracotta md:text-right">
              {p.label} ↗
            </a>
          </li>
        ))}
      </ol>
    </FolderPage>
  ),
});
