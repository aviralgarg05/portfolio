"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { profile, projects, openSource, writing } from "@/data/profile";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const recentArticles = writing.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* About Section */}
      <section id="about">
        <h2 className="text-2xl mb-4">about me</h2>
        <p className="text-sm text-accent leading-relaxed mb-4">
          i build ai/ml systems, contribute to open source, and publish research.
        </p>
        <p className="text-sm text-accent leading-relaxed mb-4">
          currently co-founding waysorted. previously at drdo. active contributor to major oss projects.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="text-xs px-3 py-1 border border-border text-accent">llms</span>
          <span className="text-xs px-3 py-1 border border-border text-accent">nlp</span>
          <span className="text-xs px-3 py-1 border border-border text-accent">machine learning</span>
          <span className="text-xs px-3 py-1 border border-border text-accent">research</span>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-medium mb-1">
              <Counter end={profile.metrics.github.repos} />
            </div>
            <div className="text-xs text-accent">repositories</div>
          </div>
          <div>
            <div className="text-3xl font-medium mb-1">
              <Counter end={profile.metrics.github.prsMerged} />
            </div>
            <div className="text-xs text-accent">merged prs</div>
          </div>
          <div>
            <div className="text-3xl font-medium mb-1">
              <Counter end={profile.metrics.writing.devtoArticles} />
            </div>
            <div className="text-xs text-accent">articles</div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">selected work</h2>
          <Link href="/work" className="text-xs text-accent hover:text-foreground transition-colors">
            view all →
          </Link>
        </div>
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <div key={project.name} className="border-b border-border pb-6 last:border-0">
              <h3 className="text-base mb-2 hover:opacity-70 transition-opacity">
                {project.name}
              </h3>
              <p className="text-sm text-accent leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 border border-border text-accent">
                    {tech}
                  </span>
                ))}
              </div>
              {project.metrics && (
                <div className="flex gap-4 text-xs text-accent">
                  {project.metrics.stars && <span>★ {project.metrics.stars}</span>}
                  {project.metrics.forks && <span>⑂ {project.metrics.forks}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section id="open-source">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">open source</h2>
          <Link href="/open-source" className="text-xs text-accent hover:text-foreground transition-colors">
            view all →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div className="text-2xl font-medium mb-1">{openSource.contributions.stats.totalPRs}</div>
            <div className="text-xs text-accent">pull requests</div>
          </div>
          <div>
            <div className="text-2xl font-medium mb-1">{openSource.contributions.stats.mergedPRs}</div>
            <div className="text-xs text-accent">merged</div>
          </div>
          <div>
            <div className="text-2xl font-medium mb-1">{openSource.contributions.stats.issues}</div>
            <div className="text-xs text-accent">issues</div>
          </div>
          <div>
            <div className="text-2xl font-medium mb-1">{openSource.contributions.stats.comments}</div>
            <div className="text-xs text-accent">comments</div>
          </div>
        </div>

        <h3 className="text-sm text-accent mb-4">major contributions</h3>
        <div className="space-y-2">
          {openSource.contributions.reposContributed.map((repo) => (
            <a
              key={repo}
              href={`https://github.com/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:opacity-70 transition-opacity"
            >
              {repo} →
            </a>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">recent writing</h2>
          <Link href="/writing" className="text-xs text-accent hover:text-foreground transition-colors">
            all articles →
          </Link>
        </div>
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-border pb-4 last:border-0 hover:opacity-70 transition-opacity"
            >
              <h3 className="text-base mb-2">{article.title}</h3>
              <div className="flex items-center gap-4 text-xs text-accent">
                <span>{article.platform}</span>
                <span>{article.category}</span>
                {article.reactions && <span>❤ {article.reactions}</span>}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
