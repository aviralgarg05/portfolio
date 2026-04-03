"use client";

import { research } from "@/data/profile";
import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, Beaker, Lightbulb, BookOpen } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { TechTag } from "@/components/TechTag";
import { useStaggeredScrollAnimation, useStatsAnimation } from "@/hooks/useScrollAnimation";

export default function ResearchPage() {
  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();
  const statsVariants = useStatsAnimation();

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="page-kicker mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-300" />
          Research
        </div>
        <h1 className="text-2xl md:text-3xl mb-4">research</h1>
        <p className="max-w-2xl text-sm text-accent leading-relaxed mb-6">
          Active research pipeline in AI/ML systems, cybersecurity, and natural language processing.
        </p>
        <motion.div 
          className="grid grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
        >
          <motion.div variants={statsVariants} className="site-stat px-4 py-4 md:px-5 md:py-5">
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <Clock className="w-6 h-6 text-foreground" />
              {research.status.underReview}
            </div>
            <div className="text-xs text-accent">under review</div>
          </motion.div>
          <motion.div variants={statsVariants} className="site-stat px-4 py-4 md:px-5 md:py-5">
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-foreground" />
              {research.status.readyToPublish}
            </div>
            <div className="text-xs text-accent">ready to publish</div>
          </motion.div>
          <motion.div variants={statsVariants} className="site-stat px-4 py-4 md:px-5 md:py-5">
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <Beaker className="w-6 h-6 text-foreground" />
              {research.status.underDevelopment}
            </div>
            <div className="text-xs text-accent">in development</div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Research Projects */}
      <section>
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
          <FileText className="w-5 h-5" /> projects
        </h2>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-30px" }}
        >
          {research.projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="site-card p-4 md:p-5"
              variants={itemVariants}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg">{project.title}</h3>
                <StatusBadge status={project.status} />
              </div>
              
              {project.context && (
                <p className="text-xs text-accent mb-2">{project.context}</p>
              )}
              
              <p className="text-sm text-accent leading-relaxed mb-3">
                {project.description}
              </p>

              <TechTag tech={project.type} index={0} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Research Themes */}
      <section>
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> research themes
        </h2>
        <motion.div 
          className="space-y-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {research.themes.map((theme, index) => (
            <motion.div 
              key={index} 
              className="site-link-pill inline-flex items-center px-3 py-1.5 text-sm text-accent hover:text-foreground cursor-default"
              variants={itemVariants}
            >
              • {theme}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Current Focus */}
      <section>
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
          <BookOpen className="w-5 h-5" /> areas of interest
        </h2>
        <motion.div 
          className="space-y-3 text-sm text-accent leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p variants={itemVariants}>• multi-agent systems and frameworks</motion.p>
          <motion.p variants={itemVariants}>• real-time ai systems with low latency</motion.p>
          <motion.p variants={itemVariants}>• cybersecurity applications of machine learning</motion.p>
          <motion.p variants={itemVariants}>• natural language processing and translation</motion.p>
          <motion.p variants={itemVariants}>• database optimization and ai-native databases</motion.p>
          <motion.p variants={itemVariants}>• evaluation frameworks for ai systems</motion.p>
        </motion.div>
      </section>

      {/* Publications Note */}
      <section>
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium">publication status</h2>
        <p className="text-sm text-accent leading-relaxed">
          i have {research.status.underReview} paper under review, {research.status.readyToPublish} papers ready to publish, 
          and {research.status.underDevelopment} research projects currently in development. updates will be posted as papers are published.
        </p>
      </section>
    </div>
  );
}
