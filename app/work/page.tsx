"use client";

import Link from "next/link";
import { projects, achievements } from "@/data/profile";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, GitFork, Download, ExternalLink, Award } from "lucide-react";
import { FaGithub, FaPython } from "react-icons/fa";
import { StatusBadge } from "@/components/StatusBadge";
import { TechTag } from "@/components/TechTag";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WorkPage() {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);
  const { ref: achievementsRef, opacity, y, scale } = useScrollAnimation();
  const { ref: featuredRef, opacity: featuredOpacity, y: featuredY, scale: featuredScale } = useScrollAnimation();
  const { ref: otherRef, opacity: otherOpacity, y: otherY, scale: otherScale } = useScrollAnimation();
  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl mb-4">Work</h1>
        <p className="text-sm text-accent leading-relaxed">
          Projects spanning AI/ML systems, developer tools, and open source contributions
        </p>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        ref={featuredRef}
        style={{ opacity: featuredOpacity, y: featuredY, scale: featuredScale }}
      >
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium">Featured Projects</h2>
        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featured.map((project) => (
            <motion.div 
              key={project.name} 
              className="border-b border-border pb-6 md:pb-8 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                <h3 className="text-base md:text-lg text-foreground">{project.name}</h3>
                {project.status && (
                  <StatusBadge status={project.status} />
                )}
              </div>
              
              <p className="text-xs text-accent mb-2">{project.tagline}</p>
              <p className="text-xs md:text-sm text-accent leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <TechTag key={tech} tech={tech} index={index} />
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
                     <FaGithub className="w-3 h-3" /> github <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.links.pypi && (
                  <a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                     <FaPython className="w-3 h-3" /> pypi <ExternalLink className="w-3 h-3" />
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
      </motion.section>

      {/* Other Projects */}
      {other.length > 0 && (
        <motion.section
          ref={otherRef}
          style={{ opacity: otherOpacity, y: otherY, scale: otherScale }}
        >
          <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium">Other Projects</h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {other.map((project) => (
              <motion.div 
                key={project.name} 
                className="border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <h3 className="text-sm md:text-base mb-2 text-foreground">{project.name}</h3>
                <p className="text-xs md:text-sm text-accent leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, index) => (
                    <TechTag key={tech} tech={tech} index={index} />
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
                      <FaGithub className="w-3 h-3" /> github <ExternalLink className="w-3 h-3" />
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
      </motion.section>
      )}

      {/* Achievements */}
      <motion.section
        ref={achievementsRef}
        style={{ opacity, y, scale }}
      >
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium">Achievements</h2>
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              className="border-b border-border pb-4 last:border-0 hover:bg-background/50 transition-colors p-3 -mx-3 rounded"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                <h3 className="text-sm md:text-base flex items-center gap-2 text-foreground">
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
      </motion.section>
    </div>
  );
}
