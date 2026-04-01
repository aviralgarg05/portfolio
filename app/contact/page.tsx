"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Code, FileText, Package, ExternalLink, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
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
        <h1 className="text-2xl md:text-3xl mb-4">contact</h1>
        <p className="text-sm text-accent leading-relaxed">
          open to collaborations, consulting, and interesting problems in ai/ml systems.
        </p>
      </motion.section>

      {/* Direct Contact */}
      <section>
        <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" /> get in touch
        </h2>
        <motion.div 
          className="space-y-3 text-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <Mail className="w-4 h-4" /> email
            </span>
            <a 
              href={`mailto:${profile.identity.email}`}
              className="text-foreground hover:opacity-70 transition-opacity"
            >
              {profile.identity.email}
            </a>
          </motion.div>
          <motion.div 
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <MapPin className="w-4 h-4" /> location
            </span>
            <span className="text-foreground">{profile.identity.location}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Links */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">find me online</h2>
        <motion.div 
          className="space-y-3 text-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded group"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <Github className="w-4 h-4" /> github
            </span>
            <span className="text-foreground flex items-center gap-2">
              @aviralgarg05 <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.a>
          <motion.a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded group"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> linkedin
            </span>
            <span className="text-foreground flex items-center gap-2">
              aviral-garg99 <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.a>
          <motion.a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded group"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <Twitter className="w-4 h-4" /> twitter
            </span>
            <span className="text-foreground flex items-center gap-2">
              @aviralgarg39805 <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.a>
          <motion.a
            href={profile.socials.devto}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded group"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <FileText className="w-4 h-4" /> dev.to
            </span>
            <span className="text-foreground flex items-center gap-2">
              @aviralgarg05 <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.a>
          <motion.a
            href={profile.socials.geeksforgeeks}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded group"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <Code className="w-4 h-4" /> geeksforgeeks
            </span>
            <span className="text-foreground flex items-center gap-2">
              gargaviwmuu <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.a>
          <motion.a
            href={profile.socials.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:bg-background/50 transition-colors p-3 -mx-3 rounded group"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span className="text-accent flex items-center gap-2">
              <Package className="w-4 h-4" /> pypi
            </span>
            <span className="text-foreground flex items-center gap-2">
              Aviral_Garg <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* What I'm Looking For */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">interested in</h2>
        <motion.div 
          className="space-y-3 text-sm text-accent leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants}>• open source collaborations</motion.p>
          <motion.p variants={itemVariants}>• ai/ml consulting projects</motion.p>
          <motion.p variants={itemVariants}>• research collaborations</motion.p>
          <motion.p variants={itemVariants}>• technical writing opportunities</motion.p>
          <motion.p variants={itemVariants}>• speaking at conferences and meetups</motion.p>
          <motion.p variants={itemVariants}>• building innovative products</motion.p>
        </motion.div>
      </section>

      {/* Response Time */}
      <section>
        <h2 className="text-lg md:text-xl mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5" /> note
        </h2>
        <p className="text-sm text-accent leading-relaxed">
          i typically respond within 24-48 hours. for urgent matters, please mention it in the subject line or message.
        </p>
      </section>
    </div>
  );
}
