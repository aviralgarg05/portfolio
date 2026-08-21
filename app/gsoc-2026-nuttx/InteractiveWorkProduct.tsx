"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  PackageCheck,
  Play,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState, type KeyboardEvent } from "react";
import styles from "./page.module.css";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type FlowStep = {
  id: string;
  number: string;
  label: string;
  title: string;
  explanation: string;
  input: string;
  action: string;
  result: string;
  icon: LucideIcon;
};

const flowSteps: FlowStep[] = [
  {
    id: "discover",
    number: "01",
    label: "Discover",
    title: "Read a package catalog",
    explanation:
      "nxpkg starts with a local or network catalog rather than hard-coding applications into the firmware image.",
    input: "Catalog and package metadata",
    action: "Parse names, versions, platforms, dependencies, and artifact locations",
    result: "A package that can be inspected before anything is installed",
    icon: Search,
  },
  {
    id: "verify",
    number: "02",
    label: "Verify",
    title: "Reject unsafe or inconsistent input",
    explanation:
      "Metadata, paths, versions, and SHA-256 digests are checked before package state is changed.",
    input: "Catalog entry and downloaded artifact",
    action: "Validate metadata, destination paths, compatibility, and digest",
    result: "Only a verified artifact reaches the staging area",
    icon: ShieldCheck,
  },
  {
    id: "manage",
    number: "03",
    label: "Manage",
    title: "Own the complete package lifecycle",
    explanation:
      "The package service coordinates versioned storage, locks, recovery, updates, rollback, removal, and persistent state.",
    input: "Verified staged package",
    action: "Install or transition package state without leaving a partial operation behind",
    result: "A recoverable installed version and a dependable public API",
    icon: PackageCheck,
  },
  {
    id: "run",
    number: "04",
    label: "Run",
    title: "Launch without reflashing the board",
    explanation:
      "NXStore consumes nxpkg state, then the NuttX loader and supervisor start and stop the selected ELF application.",
    input: "Installed application selected in NXStore or the shell",
    action: "Load the ELF process, supervise it, and return cleanly when it exits",
    result: "A device-side application workflow on already-flashed firmware",
    icon: Play,
  },
];

const deliverables = [
  {
    number: "01",
    title: "A complete package lifecycle",
    outcome: "Packages can be changed safely without reflashing the firmware.",
    status: "Merged",
    tone: "merged",
    body: "nxpkg grew from a local installer into a recoverable lifecycle: sync, install, update, rollback, remove, and list. It supports local and network catalogs, validates metadata and paths, verifies SHA-256 digests, uses configurable versioned storage, and handles locks and interrupted state changes.",
    links: [
      ["Initial implementation", "https://github.com/apache/nuttx-apps/pull/3474"],
      ["Hardening series", "https://github.com/apache/nuttx-apps/pull/3642"],
      ["Final lifecycle", "https://github.com/apache/nuttx-apps/pull/3720"],
    ],
  },
  {
    number: "02",
    title: "An application store that runs on the device",
    outcome: "Users can discover, install, launch, and close applications from a touchscreen UI.",
    status: "Merged · Tested",
    tone: "merged",
    body: "NXStore is now upstream. It reads nxpkg state through its public API, keeps slow work away from the LVGL event thread, and launches installed ELF applications under a supervisor. The same path was exercised with a diagnostic, calculator, games, exported metadata and icons, and NXDoom on an ESP32-S3 touchscreen target.",
    links: [
      ["NXStore", "https://github.com/apache/nuttx-apps/pull/3643"],
      ["Application set", "https://github.com/apache/nuttx-apps/pull/3660"],
      ["NXDoom", "https://github.com/apache/nuttx-apps/pull/3644"],
    ],
  },
  {
    number: "03",
    title: "Declarative shared-library packaging",
    outcome: "Applications can declare loadable libraries instead of embedding every dependency.",
    status: "Merged · Tested",
    tone: "merged",
    body: "Library.mk is now upstream with its companion documentation. It adds a small Android.mk-style declaration for building loadable libraries from C or C++ sources. I validated function and shared-data resolution, dependencies between modules, mixed-language inputs, and clean unloads on the tested Xtensa configuration. This is shared-library packaging; it is not an FDPIC claim.",
    links: [
      ["Library.mk", "https://github.com/apache/nuttx-apps/pull/3730"],
      ["Documentation", "https://github.com/apache/nuttx/pull/19888"],
    ],
  },
];

type ValidationFilter = "all" | "hardware" | "simulator" | "limited";

type ValidationEntry = {
  scenario: string;
  result: "Pass" | "Environment-limited";
  environment: string;
  filters: Exclude<ValidationFilter, "all">[];
};

const validation: ValidationEntry[] = [
  { scenario: "Valid and invalid ELF fixtures", result: "Pass", environment: "Hardware", filters: ["hardware"] },
  { scenario: "Bad digest and staging cleanup", result: "Pass", environment: "Hardware", filters: ["hardware"] },
  { scenario: "Update, rollback, remove", result: "Pass", environment: "Hardware", filters: ["hardware"] },
  { scenario: "Live and stale package locks", result: "Pass", environment: "Hardware", filters: ["hardware"] },
  { scenario: "NXStore launch and close loop", result: "Pass", environment: "Hardware", filters: ["hardware"] },
  { scenario: "NXDoom RGB565 output", result: "Pass", environment: "Simulator + hardware", filters: ["hardware", "simulator"] },
  { scenario: "Shared-library load and unload", result: "Pass", environment: "Hardware", filters: ["hardware"] },
  {
    scenario: "Fresh network re-test",
    result: "Environment-limited",
    environment: "Active image lacked Wi-Fi/loopback",
    filters: ["limited"],
  },
];

type Contribution = {
  repo: "nuttx-apps" | "nuttx";
  number: number;
  state: "Merged" | "Open" | "Open draft";
  title: string;
  diff: string;
};

const contributions: Contribution[] = [
  { repo: "nuttx-apps", number: 3474, state: "Merged", title: "Basic package lifecycle helper", diff: "+2,920 · 15 files" },
  { repo: "nuttx-apps", number: 3519, state: "Merged", title: "Module metadata for executable tools", diff: "+32 −18 · 11 files" },
  { repo: "nuttx-apps", number: 3526, state: "Merged", title: "Packaged shared-library fixtures", diff: "+729 −31 · 8 files" },
  { repo: "nuttx-apps", number: 3531, state: "Merged", title: "ELF and nxpkg validation fixtures", diff: "+687 −3 · 6 files" },
  { repo: "nuttx-apps", number: 3642, state: "Merged", title: "Configurable, crash-aware package storage", diff: "+522 −57 · 5 files" },
  { repo: "nuttx-apps", number: 3718, state: "Merged", title: "Catalog, path, and version validation", diff: "+355 −56 · 2 files" },
  { repo: "nuttx-apps", number: 3719, state: "Merged", title: "Network catalog and artifact fetching", diff: "+734 −1 · 4 files" },
  { repo: "nuttx-apps", number: 3720, state: "Merged", title: "Lifecycle, rollback, locks, and recovery", diff: "+628 −111 · 2 files" },
  { repo: "nuttx-apps", number: 3659, state: "Merged", title: "LVGL touchscreen diagnostic", diff: "+266 · 5 files" },
  { repo: "nuttx-apps", number: 3643, state: "Merged", title: "NXStore touchscreen frontend", diff: "+1,941 −87 · 7 files" },
  { repo: "nuttx-apps", number: 3644, state: "Open", title: "NXDoom module and RGB565 fixes", diff: "+267 −23 · 16 files" },
  { repo: "nuttx-apps", number: 3660, state: "Open", title: "LVGL touchscreen calculator", diff: "+625 · 5 files" },
  { repo: "nuttx-apps", number: 3661, state: "Open", title: "Supervised loadable game processes", diff: "+95 −28 · 4 files" },
  { repo: "nuttx-apps", number: 3662, state: "Merged", title: "Brickmatch touchscreen and module support", diff: "+324 −17 · 4 files" },
  { repo: "nuttx-apps", number: 3663, state: "Open", title: "Package metadata and RGB565 icon export", diff: "+123 −8 · 1 file" },
  { repo: "nuttx-apps", number: 3730, state: "Merged", title: "Declarative shared-library support", diff: "+257 −27 · 8 files" },
  { repo: "nuttx", number: 18875, state: "Open draft", title: "nxpkg and NXStore documentation", diff: "+253 · 3 files" },
  { repo: "nuttx", number: 19888, state: "Merged", title: "Shared-library declaration documentation", diff: "+25 · 1 file" },
];

function getTransition(shouldReduceMotion: boolean | null) {
  return shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: EASE_OUT };
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.textLink}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export function ProjectFlow() {
  const [activeId, setActiveId] = useState(flowSteps[0].id);
  const shouldReduceMotion = useReducedMotion();
  const activeIndex = flowSteps.findIndex((step) => step.id === activeId);
  const activeStep = flowSteps[activeIndex];

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % flowSteps.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + flowSteps.length) % flowSteps.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = flowSteps.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveId(flowSteps[nextIndex].id);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    tabs?.[nextIndex]?.focus();
  }

  return (
    <div className={styles.flowExplorer}>
      <div className={styles.flowTabs} role="tablist" aria-label="Package workflow stages">
        {flowSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id === activeId;

          return (
            <button
              key={step.id}
              id={`flow-tab-${step.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`flow-panel-${step.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.flowTab} ${isActive ? styles.flowTabActive : ""}`}
              onClick={() => setActiveId(step.id)}
              onKeyDown={(event) => handleTabKey(event, index)}
            >
              <span className={styles.flowTabTop}>
                <span>{step.number}</span>
                <Icon aria-hidden="true" />
              </span>
              <span className={styles.flowTabLabel}>{step.label}</span>
            </button>
          );
        })}
        <motion.span
          className={styles.flowProgress}
          aria-hidden="true"
          animate={{ scaleX: (activeIndex + 1) / flowSteps.length }}
          transition={getTransition(shouldReduceMotion)}
        />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeStep.id}
          id={`flow-panel-${activeStep.id}`}
          role="tabpanel"
          aria-labelledby={`flow-tab-${activeStep.id}`}
          className={styles.flowPanel}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={getTransition(shouldReduceMotion)}
        >
          <div className={styles.flowPanelIntro}>
            <span>Stage {activeStep.number}</span>
            <h3>{activeStep.title}</h3>
            <p>{activeStep.explanation}</p>
          </div>
          <div className={styles.flowRoute} aria-label={`${activeStep.input}, then ${activeStep.action}, resulting in ${activeStep.result}`}>
            <div>
              <span>Input</span>
              <strong>{activeStep.input}</strong>
            </div>
            <ArrowRight aria-hidden="true" />
            <div>
              <span>nxpkg does</span>
              <strong>{activeStep.action}</strong>
            </div>
            <ArrowRight aria-hidden="true" />
            <div>
              <span>Result</span>
              <strong>{activeStep.result}</strong>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className={styles.interactiveHint}>Select a stage to follow one package from catalog to running application.</p>
    </div>
  );
}

export function DeliverablesExplorer() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div className={styles.deliverables} layout={!shouldReduceMotion}>
      {deliverables.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <motion.article
            key={item.number}
            className={styles.deliverable}
            layout={!shouldReduceMotion}
            transition={getTransition(shouldReduceMotion)}
          >
            <button
              type="button"
              className={styles.deliverableToggle}
              aria-expanded={isOpen}
              aria-controls={`deliverable-panel-${item.number}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className={styles.deliverableIndex}>{item.number}</span>
              <span className={styles.deliverableToggleMain}>
                <span className={styles.deliverableHeading}>
                  <span className={styles.deliverableTitle} role="heading" aria-level={3}>{item.title}</span>
                  <span className={item.tone === "merged" ? styles.statusMerged : styles.statusOpen}>
                    {item.status}
                  </span>
                </span>
                <span className={styles.deliverableOutcome}>{item.outcome}</span>
              </span>
              <motion.span
                className={styles.deliverableChevron}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={getTransition(shouldReduceMotion)}
                aria-hidden="true"
              >
                <ChevronDown />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`deliverable-panel-${item.number}`}
                  className={styles.deliverablePanel}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={getTransition(shouldReduceMotion)}
                >
                  <p>{item.body}</p>
                  <div className={styles.inlineLinks}>
                    {item.links.map(([label, href]) => (
                      <ExternalLink key={href} href={href}>{label}</ExternalLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

const validationFilters: Array<{ id: ValidationFilter; label: string }> = [
  { id: "all", label: "All checks" },
  { id: "hardware", label: "Hardware" },
  { id: "simulator", label: "Simulator" },
  { id: "limited", label: "Limited" },
];

function matchesValidationFilter(item: ValidationEntry, filter: ValidationFilter) {
  return filter === "all" || item.filters.includes(filter);
}

export function ValidationExplorer() {
  const [filter, setFilter] = useState<ValidationFilter>("all");
  const shouldReduceMotion = useReducedMotion();
  const visibleValidation = useMemo(
    () => validation.filter((item) => matchesValidationFilter(item, filter)),
    [filter],
  );

  return (
    <div className={styles.validationExplorer}>
      <div className={styles.filterBar} role="group" aria-label="Filter validation evidence">
        {validationFilters.map((item) => {
          const count = item.id === "all"
            ? validation.length
            : validation.filter((entry) => matchesValidationFilter(entry, item.id)).length;

          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.filterButton} ${filter === item.id ? styles.filterButtonActive : ""}`}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
              <span>{count}</span>
            </button>
          );
        })}
      </div>

      <p className={styles.filterSummary} aria-live="polite">
        Showing {visibleValidation.length} of {validation.length} checks. Hardware, simulator, and environment-limited evidence stay explicitly separated.
      </p>

      <motion.div className={styles.validationList} role="list" aria-label="Validation summary" layout={!shouldReduceMotion}>
        <AnimatePresence initial={false} mode="popLayout">
          {visibleValidation.map((item) => (
            <motion.div
              key={item.scenario}
              className={styles.validationRow}
              role="listitem"
              layout={!shouldReduceMotion}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={getTransition(shouldReduceMotion)}
            >
              <span>{item.scenario}</span>
              <strong className={item.result === "Pass" ? styles.pass : styles.limited}>{item.result}</strong>
              <span>{item.environment}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

type ContributionFilter = "all" | "merged" | "review";

const contributionFilters: Array<{ id: ContributionFilter; label: string }> = [
  { id: "all", label: "All work" },
  { id: "merged", label: "Merged" },
  { id: "review", label: "In review" },
];

export function ContributionExplorer() {
  const [filter, setFilter] = useState<ContributionFilter>("merged");
  const shouldReduceMotion = useReducedMotion();
  const visibleContributions = useMemo(
    () => contributions.filter((item) => {
      if (filter === "merged") return item.state === "Merged";
      if (filter === "review") return item.state !== "Merged";
      return true;
    }),
    [filter],
  );

  return (
    <div className={styles.contributionExplorer}>
      <div className={styles.snapshotMeter}>
        <div className={styles.snapshotMeterHeader}>
          <span>Upstream snapshot</span>
          <strong>13 merged · 5 in review</strong>
        </div>
        <div className={styles.snapshotMeterTrack} aria-label="Thirteen of 18 pull requests were merged at the August 21 snapshot">
          <span />
        </div>
      </div>

      <div className={styles.filterBar} role="group" aria-label="Filter pull requests by status">
        {contributionFilters.map((item) => {
          const count = item.id === "all"
            ? contributions.length
            : contributions.filter((entry) => item.id === "merged" ? entry.state === "Merged" : entry.state !== "Merged").length;

          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.filterButton} ${filter === item.id ? styles.filterButtonActive : ""}`}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
              <span>{count}</span>
            </button>
          );
        })}
      </div>

      <p className={styles.filterSummary} aria-live="polite">
        {filter === "all" && "Showing the complete 18-PR work-product record."}
        {filter === "merged" && "Showing 13 pull requests accepted into Apache repositories."}
        {filter === "review" && "Showing 5 public pull requests still under review at the snapshot."}
      </p>

      <div className={styles.contributionHeader} aria-hidden="true">
        <span>Pull request</span>
        <span>Contribution</span>
        <span>Status</span>
        <span>Snapshot diff</span>
      </div>
      <motion.ol className={styles.contributionList} layout={!shouldReduceMotion}>
        <AnimatePresence initial={false} mode="popLayout">
          {visibleContributions.map((item) => {
            const href = `https://github.com/apache/${item.repo}/pull/${item.number}`;
            return (
              <motion.li
                key={`${item.repo}-${item.number}`}
                layout={!shouldReduceMotion}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={getTransition(shouldReduceMotion)}
              >
                <a href={href} target="_blank" rel="noreferrer" className={styles.contributionLink}>
                  <span className={styles.prRef}>{item.repo} #{item.number}</span>
                  <span className={styles.prTitle}>{item.title}</span>
                  <span className={item.state === "Merged" ? styles.stateMerged : styles.stateOpen}>
                    {item.state}
                  </span>
                  <span className={styles.prDiff}>{item.diff}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ol>
    </div>
  );
}
