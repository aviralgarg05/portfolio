"use client";

import { projects, achievements } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { Star, GitFork, Download, Award, ArrowUpRight } from "lucide-react";
import { FaGithub, FaPython } from "react-icons/fa";
import { StatusBadge } from "@/components/StatusBadge";
import { TechTag } from "@/components/TechTag";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const cardSpring = {
  type: "spring" as const,
  stiffness: 90,
  damping: 20,
  mass: 0.9,
};

function SectionHeading({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-3">
      <h2 className="text-xl md:text-2xl text-foreground font-medium">{title}</h2>
      <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.24em] text-accent">
        {detail}
      </span>
    </div>
  );
}

export default function WorkPage() {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);
  const shouldReduceMotion = useReducedMotion();
  const { ref: achievementsRef, opacity, y, scale } = useScrollAnimation();
  const { ref: featuredRef, opacity: featuredOpacity, y: featuredY, scale: featuredScale } = useScrollAnimation();
  const { ref: otherRef, opacity: otherOpacity, y: otherY, scale: otherScale } = useScrollAnimation();
  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();
  const heroStats = [
    { label: "featured builds", value: featured.length },
    { label: "active projects", value: featured.filter((project) => project.status === "active").length },
    { label: "milestones", value: achievements.length },
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="page-kicker mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Selected work
        </motion.div>
        <h1 className="text-2xl md:text-3xl mb-4">Work</h1>
        <p className="max-w-2xl text-sm text-accent leading-relaxed">
          Projects spanning AI/ML systems, developer tools, and open source contributions
        </p>
        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {heroStats.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -1.5, scale: 1.005 }}
              transition={cardSpring}
              className="site-stat px-4 py-2"
            >
              <span className="mr-2 text-sm text-foreground">{item.value}</span>
              <span className="text-xs text-accent">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        className="relative"
        ref={featuredRef}
        style={{ opacity: featuredOpacity, y: featuredY, scale: featuredScale }}
      >
        <SectionHeading title="Featured Projects" detail="curated" />
        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featured.map((project) => (
            <motion.article
              key={project.name} 
              className="site-card group p-5 md:p-6"
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 2, y: -2, scale: 1.002 }}
              transition={cardSpring}
            >
              <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                <div>
                  <h3 className="text-base md:text-lg text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-accent/80">featured build</p>
                </div>
                {project.status && (
                  <StatusBadge status={project.status} />
                )}
              </div>
              
              <p className="text-xs text-accent mb-2">{project.tagline}</p>
              <p className="max-w-2xl text-xs md:text-sm text-accent leading-relaxed mb-4">
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
                    <motion.span
                      whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                      className="site-link-pill inline-flex items-center gap-1 px-2.5 py-1"
                    >
                      <Star className="w-3 h-3" /> {project.metrics.stars}
                    </motion.span>
                  )}
                  {project.metrics.forks && (
                    <motion.span
                      whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                      className="site-link-pill inline-flex items-center gap-1 px-2.5 py-1"
                    >
                      <GitFork className="w-3 h-3" /> {project.metrics.forks}
                    </motion.span>
                  )}
                  {project.metrics.downloads && (
                    <motion.span
                      whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                      className="site-link-pill inline-flex items-center gap-1 px-2.5 py-1"
                    >
                      <Download className="w-3 h-3" /> {project.metrics.downloads}
                    </motion.span>
                  )}
                  {project.metrics.version && (
                    <motion.span
                      whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                      className="site-link-pill inline-flex items-center gap-1 px-2.5 py-1"
                    >
                      v{project.metrics.version}
                    </motion.span>
                  )}
                </div>
              )}

              {project.achievement && (
                <div className="text-xs text-foreground mb-4 font-medium inline-flex items-center gap-2 border border-border px-3 py-1.5">
                  <Award className="w-4 h-4" /> {project.achievement}
                </div>
              )}

              <div className="flex flex-wrap gap-4 text-xs">
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
                    whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                     <FaGithub className="w-3 h-3" /> github <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </motion.a>
                )}
                {project.links.pypi && (
                  <motion.a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
                    whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                     <FaPython className="w-3 h-3" /> pypi <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </motion.a>
                )}
                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
                    whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    live <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </motion.a>
                )}
                {project.links.article && (
                  <motion.a
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
                    whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    article <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </motion.a>
                )}
              </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* Other Projects */}
      {other.length > 0 && (
        <motion.section
          className="relative"
          ref={otherRef}
          style={{ opacity: otherOpacity, y: otherY, scale: otherScale }}
        >
          <SectionHeading title="Other Projects" detail="in rotation" />
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {other.map((project) => (
              <motion.article
                key={project.name} 
                className="site-row group p-4 md:p-5"
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { x: 2, y: -1.5 }}
                transition={cardSpring}
              >
                <div className="relative">
                <h3 className="text-sm md:text-base mb-2 text-foreground transition-transform duration-300 group-hover:translate-x-0.5">{project.name}</h3>
                <p className="max-w-2xl text-xs md:text-sm text-accent leading-relaxed mb-3">
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
                      <motion.span
                      whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                      className="site-link-pill inline-flex items-center gap-1 px-2.5 py-1"
                      >
                        <Star className="w-3 h-3" /> {project.metrics.stars}
                      </motion.span>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 text-xs">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
                      whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    >
                      <FaGithub className="w-3 h-3" /> github <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
                      whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    >
                      live <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </motion.a>
                  )}
                </div>
                </div>
              </motion.article>
            ))}
        </motion.div>
      </motion.section>
      )}

      {/* Achievements */}
      <motion.section
        className="relative"
        ref={achievementsRef}
        style={{ opacity, y, scale }}
      >
        <SectionHeading title="Achievements" detail="signals" />
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {achievements.map((achievement, index) => (
            <motion.article
              key={index} 
              className="site-row group p-4"
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 2, y: -1 }}
              transition={cardSpring}
            >
              <div className="pointer-events-none absolute inset-y-4 left-4 w-px bg-border transition-all duration-300 group-hover:left-5" />
              <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                <h3 className="pl-5 text-sm md:text-base flex items-center gap-2 text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <Award className="w-4 h-4 text-foreground" />
                  {achievement.title}
                </h3>
                <span className="text-xs text-accent">{achievement.year}</span>
              </div>
              {achievement.description && (
                <p className="pl-10 text-xs md:text-sm text-accent">{achievement.description}</p>
              )}
              {achievement.project && (
                <span className="mt-2 inline-block pl-10 text-xs text-accent">project: {achievement.project}</span>
              )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
