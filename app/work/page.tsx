"use client";

import Link from "next/link";
import { projects, achievements } from "@/data/profile";
import { motion } from "framer-motion";
import { Star, GitFork, Download, ExternalLink, Globe, Award, Package } from "lucide-react";

export default function WorkPage() {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

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

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl mb-4">work</h1>
        <p className="text-sm text-accent leading-relaxed">
          projects spanning ai/ml systems, developer tools, and open source contributions
        </p>
      </motion.section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">featured projects</h2>
        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featured.map((project) => (
            <motion.div 
              key={project.name} 
              className="border-b border-border pb-6 md:pb-8 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                <h3 className="text-base md:text-lg">{project.name}</h3>
                {project.status && (
                  <span className="text-xs px-2 py-1 border border-border text-accent self-start">
                    {project.status}
                  </span>
                )}
              </div>
              
              <p className="text-xs text-accent mb-2">{project.tagline}</p>
              <p className="text-xs md:text-sm text-accent leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 border border-border text-accent">
                    {tech}
                  </span>
                ))}
              </div>

              {project.metrics && (
                <div className="flex flex-wrap gap-4 text-xs text-accent mb-4">
                  {project.metrics.stars && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" /> {project.metrics.stars}
                    </span>
                  )}
                  {project.metrics.forks && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {project.metrics.forks}
                    </span>
                  )}
                  {project.metrics.downloads && (
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" /> {project.metrics.downloads}
                    </span>
                  )}
                  {project.metrics.version && <span>v{project.metrics.version}</span>}
                </div>
              )}

              {project.achievement && (
                <div className="text-xs text-foreground mb-4 font-medium flex items-center gap-2">
                  <Award className="w-4 h-4" /> {project.achievement}
                </div>
              )}

              <div className="flex flex-wrap gap-4 text-xs">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    <Globe className="w-3 h-3" /> github <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.links.pypi && (
                  <a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    <Package className="w-3 h-3" /> pypi <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    live <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.links.article && (
                  <a
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    article <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Other Projects */}
      {other.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6">other projects</h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {other.map((project) => (
              <motion.div 
                key={project.name} 
                className="border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <h3 className="text-sm md:text-base mb-2">{project.name}</h3>
                <p className="text-xs md:text-sm text-accent leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 border border-border text-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div className="flex gap-4 text-xs text-accent mb-3">
                    {project.metrics.stars && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" /> {project.metrics.stars}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 text-xs">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                    >
                      <Globe className="w-3 h-3" /> github <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                    >
                      live <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Achievements */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">achievements</h2>
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              className="border-b border-border pb-4 last:border-0 hover:bg-background/50 transition-colors p-3 -mx-3 rounded"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                <h3 className="text-sm md:text-base flex items-center gap-2">
                  <Award className="w-4 h-4 text-foreground" />
                  {achievement.title}
                </h3>
                <span className="text-xs text-accent">{achievement.year}</span>
              </div>
              {achievement.description && (
                <p className="text-xs md:text-sm text-accent ml-6">{achievement.description}</p>
              )}
              {achievement.project && (
                <span className="text-xs text-accent ml-6">project: {achievement.project}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
