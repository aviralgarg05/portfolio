"use client";

import { openSource, profile } from "@/data/profile";
import { motion } from "framer-motion";
import { GitPullRequest, GitMerge, MessageSquare, FileText, ExternalLink, Globe, Package, Code2, Activity } from "lucide-react";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl mb-4">open source</h1>
        <p className="text-sm text-accent leading-relaxed mb-6">
          active contributor across the github ecosystem. focused on infrastructure, databases, ai/ml tooling, and developer tools.
        </p>
        <motion.div 
          className="grid grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={statsVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <GitPullRequest className="w-6 h-6 text-foreground" />
              {openSource.contributions.stats.totalPRs}
            </div>
            <div className="text-xs text-accent">pull requests</div>
          </motion.div>
          <motion.div variants={statsVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <GitMerge className="w-6 h-6 text-foreground" />
              {openSource.contributions.stats.mergedPRs}
            </div>
            <div className="text-xs text-accent">merged prs</div>
          </motion.div>
          <motion.div variants={statsVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <FileText className="w-6 h-6 text-foreground" />
              {openSource.contributions.stats.issues}
            </div>
            <div className="text-xs text-accent">issues authored</div>
          </motion.div>
          <motion.div variants={statsVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-foreground" />
              {openSource.contributions.stats.comments}
            </div>
            <div className="text-xs text-accent">issue comments</div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Major Contributions */}
      <section>
        <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
          <Code2 className="w-5 h-5" /> major contributions
        </h2>
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {majorContributions.map((contribution) => (
            <motion.div 
              key={contribution.repo} 
              className="border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <a
                href={`https://github.com/${contribution.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base hover:opacity-70 transition-opacity inline-flex items-center gap-2 mb-2"
              >
                <Globe className="w-4 h-4" /> {contribution.repo} <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-xs md:text-sm text-accent mb-3">{contribution.description}</p>
              <div className="flex flex-wrap gap-2">
                {contribution.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 border border-border text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Personal Open Source */}
      <section>
        <h2 className="text-xl mb-6 flex items-center gap-2">
          <Package className="w-5 h-5" /> my open source projects
        </h2>
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {openSource.pinnedRepos.map((repo) => (
            <motion.div 
              key={repo} 
              className="border-b border-border pb-4 last:border-0 hover:bg-background/50 transition-colors p-3 -mx-3 rounded"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <a
                href={`https://github.com/aviralgarg05/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-70 transition-opacity inline-flex items-center gap-2"
              >
                <Globe className="w-4 h-4" /> {repo} <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GitHub Stats */}
      <section>
        <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5" /> contribution activity
        </h2>
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
            className="block hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            <Globe className="w-4 h-4" /> github <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={profile.socials.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            <Package className="w-4 h-4" /> pypi <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>
    </div>
  );
}
