"use client";

import { openSource, profile } from "@/data/profile";

export default function OpenSourcePage() {
  const majorContributions = [
    {
      repo: "crossplane/crossplane",
      description: "cloud native control plane framework",
      tech: ["Go", "Kubernetes", "Cloud"],
    },
    {
      repo: "open-telemetry/opentelemetry-dotnet-instrumentation",
      description: "opentelemetry .net auto-instrumentation",
      tech: [".NET", "Observability", "Telemetry"],
    },
    {
      repo: "apache/shardingsphere",
      description: "distributed database middleware",
      tech: ["Java", "Database", "Distributed Systems"],
    },
    {
      repo: "apache/datafusion",
      description: "extensible query execution framework",
      tech: ["Rust", "Query Engine", "Analytics"],
    },
    {
      repo: "apache/nuttx",
      description: "real-time operating system",
      tech: ["C", "RTOS", "Embedded"],
    },
    {
      repo: "dapr/dapr",
      description: "portable runtime for microservices",
      tech: ["Go", "Microservices", "Distributed Systems"],
    },
    {
      repo: "docker/mcp-gateway",
      description: "model context protocol gateway",
      tech: ["Go", "Docker", "Gateway"],
    },
    {
      repo: "llvm/llvm-project",
      description: "compiler infrastructure project",
      tech: ["C++", "LLVM", "Compilers"],
    },
    {
      repo: "dragonflyoss/dragonfly",
      description: "intelligent p2p based image distribution system",
      tech: ["Go", "P2P", "Distribution"],
    },
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      <section>
        <h1 className="text-2xl md:text-3xl mb-4">open source</h1>
        <p className="text-sm text-accent leading-relaxed mb-6">
          active contributor across the github ecosystem. focused on infrastructure, databases, ai/ml tooling, and developer tools.
        </p>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <div>
            <div className="text-2xl md:text-3xl font-medium mb-1">{openSource.contributions.stats.totalPRs}</div>
            <div className="text-xs text-accent">pull requests</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-medium mb-1">{openSource.contributions.stats.mergedPRs}</div>
            <div className="text-xs text-accent">merged prs</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-medium mb-1">{openSource.contributions.stats.issues}</div>
            <div className="text-xs text-accent">issues authored</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-medium mb-1">{openSource.contributions.stats.comments}</div>
            <div className="text-xs text-accent">issue comments</div>
          </div>
        </div>
      </section>

      {/* Major Contributions */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">major contributions</h2>
        <div className="space-y-6">
          {majorContributions.map((contribution) => (
            <div key={contribution.repo} className="border-b border-border pb-6 last:border-0">
              <a
                href={`https://github.com/${contribution.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base hover:opacity-70 transition-opacity inline-block mb-2"
              >
                {contribution.repo} →
              </a>
              <p className="text-xs md:text-sm text-accent mb-3">{contribution.description}</p>
              <div className="flex flex-wrap gap-2">
                {contribution.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 border border-border text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Open Source */}
      <section>
        <h2 className="text-xl mb-6">my open source projects</h2>
        <div className="space-y-4">
          {openSource.pinnedRepos.map((repo) => (
            <div key={repo} className="border-b border-border pb-4 last:border-0">
              <a
                href={`https://github.com/aviralgarg05/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-70 transition-opacity"
              >
                {repo} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Stats */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">contribution activity</h2>
        <div className="mb-8 border border-border p-2 md:p-4 overflow-x-auto">
          <img 
            src="https://ghchart.rshah.org/000000/aviralgarg05" 
            alt="GitHub Contribution Graph"
            className="w-full min-w-[600px] dark:invert"
          />
        </div>
        
        <h3 className="text-xs md:text-sm text-accent mb-4">profile stats</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between pb-2 border-b border-border">
            <span className="text-accent text-xs md:text-sm">total repositories</span>
            <span className="text-foreground text-xs md:text-sm">{profile.metrics.github.repos}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-border">
            <span className="text-accent text-xs md:text-sm">non-fork repos</span>
            <span className="text-foreground text-xs md:text-sm">{profile.metrics.github.nonForkRepos}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-border">
            <span className="text-accent text-xs md:text-sm">followers</span>
            <span className="text-foreground text-xs md:text-sm">{profile.metrics.github.followers}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-border">
            <span className="text-accent text-xs md:text-sm">prs authored</span>
            <span className="text-foreground text-xs md:text-sm">{profile.metrics.github.prsAuthored}</span>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-xl mb-6">languages</h2>
        <div className="space-y-3">
          {Object.entries(profile.languages).map(([lang, percentage]) => (
            <div key={lang}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-accent">{lang}</span>
                <span className="text-foreground">{percentage}%</span>
              </div>
              <div className="h-1 bg-muted">
                <div 
                  className="h-full bg-foreground" 
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-xl mb-6">find me on</h2>
        <div className="space-y-2 text-sm">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity"
          >
            github →
          </a>
          <a
            href={profile.socials.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity"
          >
            pypi →
          </a>
        </div>
      </section>
    </div>
  );
}
