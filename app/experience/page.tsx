"use client";

import { experience } from "@/data/profile";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Clock, MapPin, ExternalLink, Globe } from "lucide-react";

export default function ExperiencePage() {
  const current = experience.filter(exp => exp.type === "current");
  const research = experience.filter(exp => exp.type === "research");
  const leadership = experience.filter(exp => exp.type === "leadership");
  const prior = experience.filter(exp => exp.type === "prior");
  const community = experience.filter(exp => exp.type === "community");

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
        <h1 className="text-2xl md:text-3xl mb-4">experience</h1>
        <p className="text-sm text-accent leading-relaxed">
          building products, conducting research, and contributing to the tech community.
        </p>
      </motion.section>

      {/* Current Roles */}
      {current.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> current
          </h2>
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {current.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-b border-border pb-8 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg">{exp.title}</h3>
                  <span className="text-xs px-2 py-1 border border-border text-accent">
                    active
                  </span>
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
                        className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
                      >
                        <Globe className="w-3 h-3" /> github <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {exp.links.website && (
                      <a
                        href={exp.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
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
          <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
            <Users className="w-5 h-5" /> leadership
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {leadership.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
                variants={itemVariants}
                whileHover={{ x: 4 }}
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
          <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" /> research
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {research.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
                variants={itemVariants}
                whileHover={{ x: 4 }}
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
          <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> prior experience
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {prior.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
                variants={itemVariants}
                whileHover={{ x: 4 }}
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
          <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
            <Users className="w-5 h-5" /> community & affiliations
          </h2>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {community.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded"
                variants={itemVariants}
                whileHover={{ x: 4 }}
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
