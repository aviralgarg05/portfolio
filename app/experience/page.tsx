"use client";

import { experience } from "@/data/profile";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Clock, MapPin, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { StatusBadge } from "@/components/StatusBadge";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExperiencePage() {
  const current = experience.filter(exp => exp.type === "current");
  const research = experience.filter(exp => exp.type === "research");
  const leadership = experience.filter(exp => exp.type === "leadership");
  const prior = experience.filter(exp => exp.type === "prior");
  const community = experience.filter(exp => exp.type === "community");

  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="page-kicker mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-300" />
          Journey
        </div>
        <h1 className="text-2xl md:text-3xl mb-4">experience</h1>
        <p className="max-w-2xl text-sm text-accent leading-relaxed">
          building products, conducting research, and contributing to the tech community.
        </p>
      </motion.section>

      {/* Current Roles */}
      {current.length > 0 && (
        <section>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> current
          </h2>
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {current.map((exp, index) => (
              <motion.div 
                key={index} 
                className="site-card p-4 md:p-5"
                variants={itemVariants}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg">{exp.title}</h3>
                  <StatusBadge status="active" />
                </div>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>
                <p className="text-sm text-accent leading-relaxed mb-3">
                  {exp.description}
                </p>
                {exp.links && (
                  <div className="flex gap-4 text-xs">
                    {exp.links.github && (
                      <a
                        href={exp.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="site-link-pill inline-flex items-center gap-1 px-3 py-1.5 text-foreground hover:text-foreground"
                      >
                         <FaGithub className="w-3 h-3" /> github <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {exp.links.website && (
                      <a
                        href={exp.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="site-link-pill inline-flex items-center gap-1 px-3 py-1.5 text-foreground hover:text-foreground"
                      >
                        website <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Leadership */}
      {leadership.length > 0 && (
        <section>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
            <Users className="w-5 h-5" /> leadership
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {leadership.map((exp, index) => (
              <motion.div 
                key={index} 
                className="site-row p-4 md:p-5"
                variants={itemVariants}
              >
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Research */}
      {research.length > 0 && (
        <section>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
            <GraduationCap className="w-5 h-5" /> research
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {research.map((exp, index) => (
              <motion.div 
                key={index} 
                className="site-row p-4 md:p-5"
                variants={itemVariants}
              >
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Prior Experience */}
      {prior.length > 0 && (
        <section>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> prior experience
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {prior.map((exp, index) => (
              <motion.div 
                key={index} 
                className="site-row p-4 md:p-5"
                variants={itemVariants}
              >
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Community */}
      {community.length > 0 && (
        <section>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
            <Users className="w-5 h-5" /> community & affiliations
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {community.map((exp, index) => (
              <motion.div 
                key={index} 
                className="site-row p-4 md:p-5"
                variants={itemVariants}
              >
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </div>
  );
}
