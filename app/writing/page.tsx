"use client";

import { writing } from "@/data/profile";
import { motion } from "framer-motion";
import { PenTool, Heart, ExternalLink, BookOpen, Tag } from "lucide-react";
import { useStaggeredScrollAnimation, useStatsAnimation } from "@/hooks/useScrollAnimation";

export default function WritingPage() {
  const groupedWriting = writing.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, typeof writing>);

  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();
  const statsVariants = useStatsAnimation();

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl mb-4">writing</h1>
        <p className="text-sm text-accent leading-relaxed mb-6">
          Technical articles on AI/ML, databases, DevOps, and software engineering. Published on Dev.to and GeeksforGeeks.
        </p>
        <motion.div 
          className="grid grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={statsVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <PenTool className="w-6 h-6 text-foreground" />
              10
            </div>
            <div className="text-xs text-accent">total articles</div>
          </motion.div>
          <motion.div variants={statsVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <Heart className="w-6 h-6 text-foreground" />
              33
            </div>
            <div className="text-xs text-accent">reactions</div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* All Articles */}
      <section>
        <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5" /> all articles
        </h2>
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {writing.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-border pb-6 last:border-0 hover:bg-background/50 transition-colors p-4 -mx-4 rounded group"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <h3 className="text-sm md:text-base mb-2 flex items-center gap-2">
                {article.title} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <div className="flex items-center gap-4 text-xs text-accent">
                <span>{article.platform}</span>
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {article.category}
                </span>
                {article.reactions && (
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {article.reactions}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* By Category */}
      <section>
        <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
          <Tag className="w-5 h-5" /> by category
        </h2>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {Object.entries(groupedWriting).map(([category, articles]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-sm text-accent mb-4">{category} ({articles.length})</h3>
              <div className="space-y-3">
                {articles.map((article, index) => (
                  <a
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:opacity-70 transition-opacity flex items-center gap-2 group"
                  >
                    {article.title} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Platforms */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">platforms</h2>
        <div className="space-y-2 text-sm">
          <a
            href="https://dev.to/aviralgarg05"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            dev.to <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/gargaviwmuu"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            geeksforgeeks <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>
    </div>
  );
}
