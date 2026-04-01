"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "@/components/Counter";
import { profile, projects, openSource, writing } from "@/data/profile";
import { ArrowRight, Star, GitFork, Heart } from "lucide-react";
import { TechTag } from "@/components/TechTag";

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
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const recentArticles = writing.slice(0, 3);

  return (
    <motion.div 
      className="space-y-12 md:space-y-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* About Section */}
      <motion.section id="about" variants={itemVariants}>
        <h2 className="text-xl md:text-2xl mb-4">about me</h2>
        <p className="text-sm text-accent leading-relaxed mb-4">
          i build ai/ml systems, contribute to open source, and publish research.
        </p>
        <p className="text-sm text-accent leading-relaxed mb-4">
          currently co-founding waysorted. previously at drdo. active contributor to major oss projects.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {["llms", "nlp", "machine learning", "research"].map((tag, index) => (
            <motion.div 
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.5 + index * 0.1 }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <TechTag tech={tag} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { label: "repositories", value: profile.metrics.github.repos },
            { label: "merged prs", value: profile.metrics.github.prsMerged },
            { label: "articles", value: profile.metrics.writing.devtoArticles }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              className="group"
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, type: "spring", stiffness: 100 }
              }}
            >
              <div className="text-2xl md:text-3xl font-medium mb-1 group-hover:text-accent transition-colors">
                <Counter end={stat.value} />
              </div>
              <div className="text-xs text-accent">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Work Section */}
      <motion.section id="work" variants={itemVariants}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl">selected work</h2>
          <Link href="/work" className="text-xs text-accent hover:text-foreground transition-all duration-300 flex items-center gap-1 group">
            view all
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.name} 
              className="border-b border-border pb-6 last:border-0 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <h3 className="text-sm md:text-base mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-xs md:text-sm text-accent leading-relaxed mb-3">
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
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {project.metrics.stars}
                    </span>
                  )}
                  {project.metrics.forks && (
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {project.metrics.forks}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Open Source */}
      <motion.section id="open-source" variants={itemVariants}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl">open source</h2>
          <Link href="/open-source" className="text-xs text-accent hover:text-foreground transition-all duration-300 flex items-center gap-1 group">
            view all
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {[
            { label: "pull requests", value: openSource.contributions.stats.totalPRs },
            { label: "merged", value: openSource.contributions.stats.mergedPRs },
            { label: "issues", value: openSource.contributions.stats.issues },
            { label: "comments", value: openSource.contributions.stats.comments }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
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
              className="block text-xs md:text-sm hover:text-foreground transition-all duration-300 group flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5 }}
            >
              {repo}
              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Writing */}
      <motion.section id="writing" variants={itemVariants}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl">recent writing</h2>
          <Link href="/writing" className="text-xs text-accent hover:text-foreground transition-all duration-300 flex items-center gap-1 group">
            all articles
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="space-y-4">
          {recentArticles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-border pb-4 last:border-0 group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <h3 className="text-sm md:text-base mb-2 group-hover:text-accent transition-colors">{article.title}</h3>
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
