import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import {
  ContributionExplorer,
  DeliverablesExplorer,
  ProjectFlow,
  ValidationExplorer,
} from "./InteractiveWorkProduct";
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
              <a className={styles.secondaryAction} href="#workflow">
                See how it works
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

        <section id="workflow" className={`${styles.shell} ${styles.section}`} aria-labelledby="workflow-title">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>01 / In one minute</span>
            <div>
              <h2 id="workflow-title">What happens after someone chooses an application?</h2>
              <p>
                The project is a four-stage path around NuttX&apos;s existing ELF loader.
                Choose a stage below to see its input, what <code>nxpkg</code> owns, and
                what becomes possible next.
              </p>
            </div>
          </div>
          <ProjectFlow />
        </section>

        <section className={`${styles.shell} ${styles.section}`} aria-labelledby="outcome-title">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>02 / Deliverables</span>
            <div>
              <h2 id="outcome-title">Three pieces make the workflow usable</h2>
              <p>
                The package lifecycle is the merged foundation. NXStore turns that API into a
                device-side experience, while Library.mk explores how applications can package
                shared dependencies. Open each outcome for the implementation detail and its
                review links.
              </p>
            </div>
          </div>
          <DeliverablesExplorer />
        </section>

        <section className={styles.darkSection} aria-labelledby="architecture-title">
          <div className={`${styles.shell} ${styles.section}`}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionNumber}>03 / Architecture</span>
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
            <div className={styles.architectureLegend} aria-label="How to read the architecture diagram">
              <div>
                <span>01</span>
                <strong>Repository input is untrusted</strong>
                <p>Catalogs and artifacts are checked before they can affect installed state.</p>
              </div>
              <div>
                <span>02</span>
                <strong>nxpkg owns package state</strong>
                <p>The shell and NXStore use the same lifecycle API instead of maintaining separate state.</p>
              </div>
              <div>
                <span>03</span>
                <strong>NuttX owns execution</strong>
                <p>The existing loader and a supervisor remain responsible for application processes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`} aria-labelledby="evidence-title">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>04 / Evidence</span>
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

          <ValidationExplorer />
        </section>

        <section id="contributions" className={`${styles.shell} ${styles.section}`} aria-labelledby="contributions-title">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>05 / Upstream work</span>
            <div>
              <h2 id="contributions-title">The public contribution record</h2>
              <p>
                These are the 18 pull requests in the final work-product snapshot. Merged means
                accepted into an Apache repository. Open means implemented publicly and tested
                where stated, but still subject to review and change.
              </p>
            </div>
          </div>

          <ContributionExplorer />
          <p className={styles.diffNote}>
            Diff totals describe the GitHub review surface. They do not measure lines written from scratch.
          </p>
        </section>

        <section className={styles.closingSection} aria-labelledby="next-title">
          <div className={`${styles.shell} ${styles.closingGrid}`}>
            <div>
              <span className={styles.sectionNumber}>06 / What remains</span>
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
