"use client";

import { writing } from "@/data/profile";
import { motion } from "framer-motion";
import { PenTool, Heart, ExternalLink, BookOpen, Tag, RefreshCw } from "lucide-react";
import { useStaggeredScrollAnimation, useStatsAnimation } from "@/hooks/useScrollAnimation";
import { useBlogPosts } from "@/hooks/useContent";
import { useState } from "react";

export default function WritingPage() {
  const { posts: livePosts, loading, error, refetch } = useBlogPosts();
  const [showLiveData, setShowLiveData] = useState(true);
  
  // Use live data if available, fallback to static data
  const articlesToShow = (showLiveData && livePosts.length > 0) ? livePosts : writing;
  
  const groupedWriting = articlesToShow.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, typeof articlesToShow>);

  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();
  const statsVariants = useStatsAnimation();
  
  // Calculate total reactions from live data
  const totalReactions = livePosts.reduce((sum, post) => sum + (post.reactions || 0), 0);
  const totalArticles = articlesToShow.length;

  return (
    <div className="space-y-12 md:space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl mb-4 flex items-center gap-3">
          writing
          <motion.button
            onClick={refetch}
            disabled={loading}
            className={`p-2 rounded-md border border-border hover:bg-background/50 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            title="Refresh content from live sources"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </motion.button>
        </h1>
        <p className="text-sm text-accent leading-relaxed mb-6">
          Technical articles on AI/ML, databases, DevOps, and software engineering. Published on Dev.to, Medium, and GeeksforGeeks.
          {livePosts.length > 0 && (
            <span className="block mt-2 text-xs text-green-400">
              ✓ Live data from {livePosts.filter(p => p.platform === 'Medium').length} Medium + {livePosts.filter(p => p.platform === 'Dev.to').length} Dev.to articles
            </span>
          )}
          {error && (
            <span className="block mt-2 text-xs text-red-400">
              ⚠ Using cached data (Live fetch failed: {error})
            </span>
          )}
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
              {totalArticles}
            </div>
            <div className="text-xs text-accent">total articles</div>
          </motion.div>
          <motion.div variants={statsVariants} whileHover={{ scale: 1.05 }}>
            <div className="text-2xl md:text-3xl font-medium mb-1 flex items-center gap-2">
              <Heart className="w-6 h-6 text-foreground" />
              {livePosts.length > 0 ? totalReactions : 33}
            </div>
            <div className="text-xs text-accent">reactions</div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* All Articles */}
      <section>
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
          <BookOpen className="w-5 h-5" /> all articles
        </h2>
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {articlesToShow.map((article, index) => (
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
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium flex items-center gap-2">
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
        <h2 className="text-xl md:text-2xl mb-6 text-foreground font-medium">platforms</h2>
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
            href="https://medium.com/@gargaviral99"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            medium <ExternalLink className="w-3 h-3" />
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
