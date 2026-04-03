"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { profile, projects, openSource, writing } from "@/data/profile";
import { ArrowRight, Star, GitFork, Heart } from "lucide-react";
import { TechTag } from "@/components/TechTag";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const recentArticles = writing.slice(0, 3);
  
  // Scroll animations for different sections
  const { ref: workRef, opacity: workOpacity, y: workY, scale: workScale } = useScrollAnimation();
  const { ref: statsRef, opacity: statsOpacity, y: statsY, scale: statsScale } = useScrollAnimation();
  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();

  return (
    <motion.div 
      className="space-y-12 md:space-y-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* About Section */}
      <motion.section id="about" variants={itemVariants}>
        <div className="page-kicker mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-300" />
          Overview
        </div>
        <h2 className="text-xl md:text-2xl mb-4">About Me</h2>
        <p className="max-w-2xl text-sm text-accent leading-relaxed mb-4">
          I build AI/ML systems, contribute to open source, and publish research.
        </p>
        <p className="max-w-2xl text-sm text-accent leading-relaxed mb-4">
          Currently co-founding Waysorted. Previously at DRDO. Active contributor to major OSS projects.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {["LLMs", "NLP", "Machine Learning", "Research"].map((tag, index) => (
            <motion.div 
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.45 + index * 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              <TechTag tech={tag} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section 
        ref={statsRef}
        style={{ opacity: statsOpacity, y: statsY, scale: statsScale }}
        variants={itemVariants}
      >
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { label: "Repositories", value: profile.metrics.github.repos },
            { label: "Merged PRs", value: profile.metrics.github.prsMerged },
            { label: "Articles", value: profile.metrics.writing.devtoArticles }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              className="site-stat group px-4 py-4 md:px-5 md:py-5"
              variants={itemVariants}
            >
              <div className="text-2xl md:text-3xl font-medium mb-1 group-hover:text-accent transition-colors">
                <Counter end={stat.value} />
              </div>
              <div className="text-xs text-accent">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Work Section */}
      <motion.section 
        id="work" 
        ref={workRef}
        style={{ opacity: workOpacity, y: workY, scale: workScale }}
        variants={itemVariants}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl">Selected Work</h2>
          <Link href="/work" className="site-link-pill px-3 py-1.5 text-xs text-accent hover:text-foreground flex items-center gap-1.5 group">
            View All
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.name} 
              className="site-row p-4 md:p-5"
              variants={itemVariants}
            >
              <h3 className="text-sm md:text-base mb-2 group-hover:text-accent transition-colors duration-500">
                {project.name}
              </h3>
              <p className="max-w-2xl text-xs md:text-sm text-accent leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <TechTag key={tech} tech={tech} index={index} />
                ))}
              </div>
              {project.metrics && (
                <div className="flex gap-4 text-xs text-accent">
                  {project.metrics.stars && (
                    <span className="site-link-pill inline-flex items-center gap-1 px-2.5 py-1">
                      <Star size={12} /> {project.metrics.stars}
                    </span>
                  )}
                  {project.metrics.forks && (
                    <span className="site-link-pill inline-flex items-center gap-1 px-2.5 py-1">
                      <GitFork size={12} /> {project.metrics.forks}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Open Source */}
      <motion.section id="open-source" variants={itemVariants}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl">Open Source</h2>
          <Link href="/open-source" className="site-link-pill px-3 py-1.5 text-xs text-accent hover:text-foreground flex items-center gap-1.5 group">
            View All
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {[
            { label: "Pull Requests", value: openSource.contributions.stats.totalPRs },
            { label: "Merged", value: openSource.contributions.stats.mergedPRs },
            { label: "Issues", value: openSource.contributions.stats.issues },
            { label: "Comments", value: openSource.contributions.stats.comments }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              className="site-stat px-4 py-4 md:px-5 md:py-5"
            >
              <div className="text-xl md:text-2xl font-medium mb-1">{stat.value}</div>
              <div className="text-xs text-accent">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xs md:text-sm text-accent mb-4">major contributions</h3>
        <div className="space-y-2">
          {openSource.contributions.reposContributed.map((repo, index) => (
            <motion.a
              key={repo}
              href={`https://github.com/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="site-link-pill block px-4 py-3 text-xs md:text-sm hover:text-foreground group flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {repo}
              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0.5" />
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Writing */}
      <motion.section id="writing" variants={itemVariants}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl">recent writing</h2>
          <Link href="/writing" className="site-link-pill px-3 py-1.5 text-xs text-accent hover:text-foreground flex items-center gap-1.5 group">
            all articles
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="space-y-4">
          {recentArticles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-row block p-4 md:p-5 group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-sm md:text-base mb-2 group-hover:text-accent transition-colors duration-500">{article.title}</h3>
              <div className="flex items-center gap-4 text-xs text-accent">
                <span>{article.platform}</span>
                <span>{article.category}</span>
                {article.reactions && (
                  <span className="flex items-center gap-1">
                    <Heart size={12} /> {article.reactions}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
