import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "GSoC 2026: Apache NuttX Work Product | Aviral Garg",
  description:
    "Aviral Garg's Google Summer of Code 2026 work product: a package-management and application-distribution layer for dynamic ELF applications in Apache NuttX.",
  alternates: {
    canonical: "https://aviralgarg.dev/gsoc-2026-nuttx",
  },
  openGraph: {
    title: "GSoC 2026: Apache NuttX Work Product",
    description:
      "A package-management and application-distribution layer for dynamic ELF applications in Apache NuttX.",
    url: "https://aviralgarg.dev/gsoc-2026-nuttx",
    type: "article",
  },
};

const REPORT_URL =
  "/gsoc-2026-nuttx/Aviral-Garg-GSoC-2026-Final-Work-Product.pdf";

const projectDetails = [
  ["Contributor", "Aviral Garg"],
  ["Organization", "Apache Software Foundation"],
  ["Project", "Apache NuttX"],
  ["Mentors", "Alan Carvalho de Assis · Halysson Carvalho"],
  ["Snapshot", "August 18, 2026"],
];

const stats = [
  ["18", "GSoC pull requests"],
  ["9", "merged upstream"],
  ["9", "open at snapshot"],
  ["10,783", "GitHub additions"],
];

const deliverables = [
  {
    number: "01",
    title: "A complete package lifecycle",
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
    status: "Tested · Open",
    tone: "open",
    body: "NXStore reads nxpkg state through its public API, keeps slow work away from the LVGL event thread, and launches installed ELF applications under a supervisor. The same path was exercised with a diagnostic, calculator, games, exported metadata and icons, and NXDoom on an ESP32-S3 touchscreen target.",
    links: [
      ["NXStore", "https://github.com/apache/nuttx-apps/pull/3643"],
      ["Application set", "https://github.com/apache/nuttx-apps/pull/3660"],
      ["NXDoom", "https://github.com/apache/nuttx-apps/pull/3644"],
    ],
  },
  {
    number: "03",
    title: "Declarative shared-library packaging",
    status: "Tested · Open",
    tone: "open",
    body: "Library.mk adds a small Android.mk-style declaration for building loadable libraries from C or C++ sources. I validated function and shared-data resolution, dependencies between modules, mixed-language inputs, and clean unloads on the tested Xtensa configuration. This is shared-library packaging; it is not an FDPIC claim.",
    links: [
      ["Library.mk", "https://github.com/apache/nuttx-apps/pull/3730"],
      ["Documentation", "https://github.com/apache/nuttx/pull/19888"],
    ],
  },
];

const validation = [
  ["Valid and invalid ELF fixtures", "Pass", "Hardware"],
  ["Bad digest and staging cleanup", "Pass", "Hardware"],
  ["Update, rollback, remove", "Pass", "Hardware"],
  ["Live and stale package locks", "Pass", "Hardware"],
  ["NXStore launch and close loop", "Pass", "Hardware"],
  ["NXDoom RGB565 output", "Pass", "Simulator + hardware"],
  ["Shared-library load and unload", "Pass", "Hardware"],
  ["Fresh network re-test", "Environment-limited", "Active image lacked Wi-Fi/loopback"],
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
  { repo: "nuttx-apps", number: 3643, state: "Open", title: "NXStore touchscreen frontend", diff: "+1,941 −87 · 7 files" },
  { repo: "nuttx-apps", number: 3644, state: "Open", title: "NXDoom module and RGB565 fixes", diff: "+267 −23 · 16 files" },
  { repo: "nuttx-apps", number: 3660, state: "Open", title: "LVGL touchscreen calculator", diff: "+625 · 5 files" },
  { repo: "nuttx-apps", number: 3661, state: "Open", title: "Supervised loadable game processes", diff: "+95 −28 · 4 files" },
  { repo: "nuttx-apps", number: 3662, state: "Open", title: "Brickmatch touchscreen and module support", diff: "+324 −17 · 4 files" },
  { repo: "nuttx-apps", number: 3663, state: "Open", title: "Package metadata and RGB565 icon export", diff: "+123 −8 · 1 file" },
  { repo: "nuttx-apps", number: 3730, state: "Open", title: "Declarative shared-library support", diff: "+257 −27 · 8 files" },
  { repo: "nuttx", number: 18875, state: "Open draft", title: "nxpkg and NXStore documentation", diff: "+253 · 3 files" },
  { repo: "nuttx", number: 19888, state: "Open", title: "Shared-library declaration documentation", diff: "+25 · 1 file" },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.textLink}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export default function GSoCWorkProductPage() {
  return (
    <article className={styles.page}>
      <a className={styles.skipLink} href="#work-product">
        Skip to work product
      </a>

      <main id="work-product">
        <section className={`${styles.shell} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <div className={`page-kicker ${styles.snapshot}`}>
              <span className={styles.snapshotDot} aria-hidden="true" />
              Google Summer of Code 2026
            </div>
            <h1>Building an application distribution layer for Apache NuttX</h1>
            <p className={styles.lead}>
              My GSoC project turned NuttX&apos;s ELF loader into a usable path for
              discovering, validating, installing, updating, and running
              applications after the firmware has already been flashed.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href={REPORT_URL} target="_blank" rel="noreferrer">
                Read the final report
                <Download aria-hidden="true" />
              </a>
              <a className={styles.secondaryAction} href="#contributions">
                Browse contributions
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl className={styles.details}>
            {projectDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.statsBand} aria-label="Project totals">
          <div className={`${styles.shell} ${styles.stats}`}>
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} aria-labelledby="outcome-title">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>01 / Outcome</span>
            <div>
              <h2 id="outcome-title">From one ELF package to a device-side workflow</h2>
              <p>
                NuttX could already load an ELF binary. The missing part was everything around
                that loader: package metadata, checks before installation, persistent state,
                safe lifecycle operations, and an interface that could start and stop installed
                applications. I built the project in that dependency order, beginning with one
                local <code>hello</code> package and adding the UI only after the package state was
                dependable enough to consume.
              </p>
            </div>
          </div>

          <div className={styles.deliverables}>
            {deliverables.map((item) => (
              <article key={item.number} className={styles.deliverable}>
                <div className={styles.deliverableIndex}>{item.number}</div>
                <div className={styles.deliverableBody}>
                  <div className={styles.deliverableHeading}>
                    <h3>{item.title}</h3>
                    <span className={item.tone === "merged" ? styles.statusMerged : styles.statusOpen}>
                      {item.status}
                    </span>
                  </div>
                  <p>{item.body}</p>
                  <div className={styles.inlineLinks}>
                    {item.links.map(([label, href]) => (
                      <ExternalLink key={href} href={href}>{label}</ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.darkSection} aria-labelledby="architecture-title">
          <div className={`${styles.shell} ${styles.section}`}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionNumber}>02 / Architecture</span>
              <div>
                <h2 id="architecture-title">One owner for package state, one runtime path</h2>
                <p>
                  The command line and NXStore call the same <code>nxpkg</code> service.
                  Repository input is checked before it reaches the configured package root;
                  the loader and supervisor then own process execution and shutdown.
                </p>
              </div>
            </div>

            <figure className={styles.architectureFigure}>
              <Image
                src="/gsoc-2026-nuttx/nxpkg-architecture.png"
                alt="Architecture diagram showing a static package repository flowing through nxpkg into persistent package state, NXStore, and the NuttX loader and supervisor"
                width={2160}
                height={1260}
                sizes="(max-width: 760px) 100vw, 1120px"
                loading="eager"
              />
              <figcaption>
                The final boundary: repository input, verified package state, and supervised
                dynamic applications remain separate concerns.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} aria-labelledby="evidence-title">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>03 / Evidence</span>
            <div>
              <h2 id="evidence-title">Tested beyond a successful module load</h2>
              <p>
                I kept hardware, simulator, and environment-limited evidence separate. The
                primary final workflow ran on an ESP32-S3 800 × 480 touchscreen board; the NuttX
                simulator helped isolate NXDoom&apos;s display path, and the earlier package fixtures
                ran on a XIAO ESP32S3 Sense.
              </p>
            </div>
          </div>

          <div className={styles.gallery}>
            <figure>
              <div className={styles.imageFrame}>
                <Image
                  src="/gsoc-2026-nuttx/nxstore-esp32s3.jpg"
                  alt="NXStore catalog running on an ESP32-S3 touchscreen board"
                  width={1600}
                  height={1200}
                  sizes="(max-width: 760px) 100vw, 54vw"
                  loading="eager"
                />
              </div>
              <figcaption>NXStore reading the catalog on the target device.</figcaption>
            </figure>
            <figure>
              <div className={styles.imageFrame}>
                <Image
                  src="/gsoc-2026-nuttx/nxdoom-hardware.jpg"
                  alt="NXDoom title screen running as a supervised module on the ESP32-S3 touchscreen board"
                  width={2000}
                  height={1500}
                  sizes="(max-width: 760px) 100vw, 46vw"
                  loading="eager"
                />
              </div>
              <figcaption>NXDoom reaching the title screen inside the supervised view.</figcaption>
            </figure>
          </div>

          <div className={styles.validationList} role="list" aria-label="Validation summary">
            {validation.map(([scenario, result, environment]) => (
              <div key={scenario} className={styles.validationRow} role="listitem">
                <span>{scenario}</span>
                <strong className={result === "Pass" ? styles.pass : styles.limited}>{result}</strong>
                <span>{environment}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contributions" className={`${styles.shell} ${styles.section}`} aria-labelledby="contributions-title">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>04 / Upstream work</span>
            <div>
              <h2 id="contributions-title">The public contribution record</h2>
              <p>
                These are the 18 pull requests in the final work-product snapshot. Merged means
                accepted into an Apache repository. Open means implemented publicly and tested
                where stated, but still subject to review and change.
              </p>
            </div>
          </div>

          <div className={styles.contributionHeader} aria-hidden="true">
            <span>Pull request</span>
            <span>Contribution</span>
            <span>Status</span>
            <span>Snapshot diff</span>
          </div>
          <ol className={styles.contributionList}>
            {contributions.map((item) => {
              const href = `https://github.com/apache/${item.repo}/pull/${item.number}`;
              return (
                <li key={`${item.repo}-${item.number}`}>
                  <a href={href} target="_blank" rel="noreferrer" className={styles.contributionLink}>
                    <span className={styles.prRef}>{item.repo} #{item.number}</span>
                    <span className={styles.prTitle}>{item.title}</span>
                    <span className={item.state === "Merged" ? styles.stateMerged : styles.stateOpen}>
                      {item.state}
                    </span>
                    <span className={styles.prDiff}>{item.diff}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ol>
          <p className={styles.diffNote}>
            Diff totals describe the GitHub review surface. They do not measure lines written from scratch.
          </p>
        </section>

        <section className={styles.closingSection} aria-labelledby="next-title">
          <div className={`${styles.shell} ${styles.closingGrid}`}>
            <div>
              <span className={styles.sectionNumber}>05 / What remains</span>
              <h2 id="next-title">A solid base, with clear next steps</h2>
            </div>
            <div className={styles.remainingWork}>
              <p>
                The merged core is usable today. The immediate work is to finish review on NXStore,
                the application set, Library.mk, and the documentation, then keep tightening the
                workflow as more boards exercise it.
              </p>
              <ul>
                <li>Integrate the open product and library pull requests into mainline.</li>
                <li>Add signed catalogs or packages; SHA-256 alone does not authenticate a publisher.</li>
                <li>Build and maintain a public demonstration catalog.</li>
                <li>Explore FDPIC and the optional Dropbear extension without claiming support early.</li>
              </ul>
              <div className={styles.closingLinks}>
                <ExternalLink href="https://github.com/apache/nuttx/issues/17351">Original project issue</ExternalLink>
                <ExternalLink href="https://github.com/apache/nuttx-apps">Apache NuttX Apps</ExternalLink>
                <a className={styles.textLink} href={REPORT_URL} target="_blank" rel="noreferrer">
                  Final report
                  <Download aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <p>
            Built during Google Summer of Code 2026 with Apache NuttX. Thanks to Alan Carvalho de
            Assis, Halysson Carvalho, and the NuttX community for the reviews and guidance.
          </p>
          <span>Work-product snapshot · August 18, 2026</span>
        </div>
      </footer>
    </article>
  );
}
