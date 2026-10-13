"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, BookOpen } from "lucide-react";
import { FaGithub, FaApple } from "react-icons/fa";
import { TechTag } from "@/components/TechTag";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const cardSpring = {
  type: "spring" as const,
  stiffness: 90,
  damping: 20,
  mass: 0.9,
};

const REPO = "https://github.com/aviralgarg05/casement";
const LATEST = "https://github.com/aviralgarg05/casement/releases/latest";

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

const heroStats = [
  { label: "version", value: "0.4.2" },
  { label: "apps styled", value: "137" },
  { label: "or later", value: "macOS 14" },
];

const tech = ["Swift 6", "SwiftUI", "AppKit", "Accessibility", "MediaRemote", "SwiftPM"];

const doesThings = [
  {
    title: "Coding agents",
    body:
      "Watch Claude Code, Codex and Cursor work, answer their permission requests from the notch, and keep an eye on usage limits. The card opens where you are already looking, so approving a command costs nothing and you never leave the editor.",
  },
  {
    title: "Your iPhone's Live Activities",
    body:
      "Rides, deliveries, scores and flights in the notch instead of behind it, with 137 apps' own looks. How much shows depends on what each app exposes to Accessibility, and where that is too little Casement leaves Apple's own pill alone rather than covering it with less. Mirroring needs macOS 26 or later, and has only been tested on macOS 27.",
  },
  {
    title: "Now Playing",
    body:
      "From any app, browsers included, with synced lyrics, a scrubber that seeks and an output picker. Small app icons switch between whatever is playing.",
  },
  {
    title: "Meetings, timers and reminders",
    body:
      "A meeting counts down beside the notch and waits with a Join button until you join it.",
  },
  {
    title: "A shelf, clipboard history and downloads",
    body:
      "Drop files on the notch, AirDrop one in a click, and find the link you copied an hour ago.",
  },
  {
    title: "Eleven tools, each off until you want it",
    body:
      "To-dos, a note, a converter, emoji, the weather, a camera mirror, a teleprompter, stocks, sales, Shortcuts and a system readout, each a page under More.",
  },
  {
    title: "Your own activities",
    body:
      "From a script, the command line, a local HTTP API, the casement:// scheme or an iPhone Shortcut. Anything that can make a request can put something in the notch.",
  },
];

const restraint = [
  {
    title: "It lives in the menu bar row",
    body:
      "With Accessibility it measures the bar and shrinks to the space that is free, so it covers an icon only when the bar is genuinely full. Nothing hangs below the row.",
  },
  {
    title: "It costs nothing when idle",
    body:
      "Everything is driven by events, and the pointer is not watched until it reaches the notch. CPU is measured against a budget in ten island states on every release.",
  },
  {
    title: "It stays on your Mac",
    body:
      "No account, no telemetry, no analytics. The API listens on loopback and needs a token; the iPhone bridge is the one thing that goes further, and it is off until you turn it on.",
  },
];

export default function CasementContent() {
  const shouldReduceMotion = useReducedMotion();
  const { containerVariants, itemVariants } = useStaggeredScrollAnimation();
  const { ref: doesRef, opacity: doesOpacity, y: doesY, scale: doesScale } = useScrollAnimation();
  const { ref: calmRef, opacity: calmOpacity, y: calmY, scale: calmScale } = useScrollAnimation();
  const { ref: getRef, opacity: getOpacity, y: getY, scale: getScale } = useScrollAnimation();

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
          Open source, macOS
        </motion.div>
        <h1 className="text-2xl md:text-3xl mb-4">Casement</h1>
        <p className="max-w-2xl text-sm text-accent leading-relaxed">
          A Dynamic Island for the MacBook notch. Approve your coding agent&apos;s permission
          requests without leaving your editor, mirror your iPhone&apos;s Live Activities, and keep
          Now Playing, meetings and a shelf in the one piece of screen you were ignoring.
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

        {/* The tech tags drop below the demo on a phone. An earlier revision ran
            them straight after the stats, so the GIF's top edge measured y=701
            against an 812 fold and a first-time visitor scrolled past six
            framework names before seeing the app. Desktop order is unchanged. */}
        <div className="flex flex-col">
          <div className="order-last mt-6 flex flex-wrap gap-2 md:order-none">
            {tech.map((item, index) => (
              <TechTag key={item} tech={item} index={index} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs">
            <motion.a
              href={LATEST}
              target="_blank"
              rel="noopener noreferrer"
              className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
              whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Download className="w-3 h-3" /> download
              <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
              whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <FaGithub className="w-3 h-3" /> github
              <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={`${REPO}/tree/main/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
              whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <BookOpen className="w-3 h-3" /> docs
              <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* The recording is 480x270. An earlier revision let it fill max-w-2xl,
              which upscaled the page's proof image 1.4x, and marked it priority,
              which preloaded 2.4 MB for something below the fold on a phone. */}
          <figure className="mt-8">
            <Image
              src="/casement/agent-approval.gif"
              alt="Claude Code asks to run a command, the card opens in the notch, and one click on Allow lets it carry on"
              width={480}
              height={270}
              sizes="(max-width: 768px) 100vw, 448px"
              unoptimized
              className="w-full max-w-md border border-border"
            />
            <figcaption className="mt-2 text-xs text-accent">
              An agent asks to run a command. The card opens in the notch and one click lets it carry
              on.
            </figcaption>
          </figure>
        </div>
      </motion.section>

      <motion.section
        ref={doesRef}
        style={{ opacity: doesOpacity, y: doesY, scale: doesScale }}
      >
        <SectionHeading title="What it does" detail="seven things" />
        <div className="space-y-0">
          {doesThings.map((item) => (
            <motion.div
              key={item.title}
              className="site-row group py-4"
              whileHover={shouldReduceMotion ? undefined : { x: 1.5 }}
              transition={cardSpring}
            >
              <h3 className="text-sm md:text-base text-foreground mb-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                {item.title}
              </h3>
              <p className="max-w-2xl text-xs md:text-sm text-accent leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <figure className="mt-8">
          <Image
            src="/casement/island-open-home.png"
            alt="The island open on Home: a song playing, with a meeting, a build and a coding agent beside it"
            width={1688}
            height={628}
            sizes="(max-width: 768px) 100vw, 896px"
            className="w-full border border-border"
          />
          <figcaption className="mt-2 text-xs text-accent">
            The island open on Home, with a song playing and a meeting, a build and an agent beside
            it.
          </figcaption>
        </figure>
      </motion.section>

      <motion.section
        ref={calmRef}
        style={{ opacity: calmOpacity, y: calmY, scale: calmScale }}
      >
        <SectionHeading title="How it stays out of the way" detail="restraint" />
        <div className="space-y-0">
          {restraint.map((item) => (
            <motion.div
              key={item.title}
              className="site-row group py-4"
              whileHover={shouldReduceMotion ? undefined : { x: 1.5 }}
              transition={cardSpring}
            >
              <h3 className="text-sm md:text-base text-foreground mb-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                {item.title}
              </h3>
              <p className="max-w-2xl text-xs md:text-sm text-accent leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <figure className="mt-8">
          <Image
            src="/casement/island-closed-states.png"
            alt="The closed island: music with everything else in bubbles, a ride mirrored from the iPhone, and a coding agent's plan at step 3 of 5"
            width={1208}
            height={752}
            sizes="(max-width: 768px) 100vw, 640px"
            className="w-full max-w-xl border border-border"
          />
          <figcaption className="mt-2 text-xs text-accent">
            Closed: music with everything else in bubbles, a ride from the iPhone, an agent at step
            three of five.
          </figcaption>
        </figure>
      </motion.section>

      <motion.section ref={getRef} style={{ opacity: getOpacity, y: getY, scale: getScale }}>
        <SectionHeading title="Getting it" detail="macOS 14 or later" />
        <p className="max-w-2xl text-xs md:text-sm text-accent leading-relaxed mb-4">
          Free and MIT licensed. Universal, so it runs on Intel and Apple silicon. Mirroring your
          iPhone&apos;s Live Activities needs macOS 26 or later and has only been tested on macOS
          27; everything else needs macOS 14. The build is not notarised by Apple, so
          macOS blocks the first launch: open it once from System Settings, Privacy and
          Security, Open Anyway. The readme has the four steps.
        </p>
        <div className="flex flex-wrap gap-4 text-xs">
          <motion.a
            href={LATEST}
            target="_blank"
            rel="noopener noreferrer"
            className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
            whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <FaApple className="w-3 h-3" /> latest release
            <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </motion.a>
          <motion.a
            href={`${REPO}/blob/main/CHANGELOG.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="site-link-pill group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-foreground hover:text-foreground"
            whileHover={shouldReduceMotion ? undefined : { y: -0.5 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <BookOpen className="w-3 h-3" /> changelog
            <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
