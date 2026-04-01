"use client";

import Link from "next/link";
import { projects, achievements } from "@/data/profile";

export default function WorkPage() {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

  return (
    <div className="space-y-12 md:space-y-16">
      <section>
        <h1 className="text-2xl md:text-3xl mb-4">work</h1>
        <p className="text-sm text-accent leading-relaxed">
          projects spanning ai/ml systems, developer tools, and open source contributions
        </p>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="border-b border-border pb-4 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                <h3 className="text-sm md:text-base">{achievement.title}</h3>
                <span className="text-xs text-accent">{achievement.year}</span>
              </div>
              {achievement.description && (
                <p className="text-xs md:text-sm text-accent">{achievement.description}</p>
              )}
              {achievement.project && (
                <span className="text-xs text-accent">project: {achievement.project}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">featured projects</h2>
        <div className="space-y-6 md:space-y-8">
          {featured.map((project) => (
            <div key={project.name} className="border-b border-border pb-6 md:pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                <h3 className="text-base md:text-lg">{project.name}</h3>
                {project.status && (
                  <span className="text-xs px-2 py-1 border border-border text-accent self-start">
                    {project.status}
                  </span>
                )}
              </div>
              
              <p className="text-xs text-accent mb-2">{project.tagline}</p>
              <p className="text-xs md:text-sm text-accent leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 border border-border text-accent">
                    {tech}
                  </span>
                ))}
              </div>

              {project.metrics && (
                <div className="flex flex-wrap gap-4 text-xs text-accent mb-4">
                  {project.metrics.stars && <span>★ {project.metrics.stars}</span>}
                  {project.metrics.forks && <span>⑂ {project.metrics.forks}</span>}
                  {project.metrics.downloads && <span>↓ {project.metrics.downloads}</span>}
                  {project.metrics.version && <span>v{project.metrics.version}</span>}
                </div>
              )}

              {project.achievement && (
                <div className="text-xs text-foreground mb-4 font-medium">
                  🏆 {project.achievement}
                </div>
              )}

              <div className="flex flex-wrap gap-4 text-xs">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    github →
                  </a>
                )}
                {project.links.pypi && (
                  <a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    pypi →
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    live →
                  </a>
                )}
                {project.links.article && (
                  <a
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    article →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {other.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6">other projects</h2>
          <div className="space-y-6">
            {other.map((project) => (
              <div key={project.name} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-sm md:text-base mb-2">{project.name}</h3>
                <p className="text-xs md:text-sm text-accent leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 border border-border text-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div className="flex gap-4 text-xs text-accent mb-3">
                    {project.metrics.stars && <span>★ {project.metrics.stars}</span>}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 text-xs">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:opacity-70 transition-opacity"
                    >
                      github →
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:opacity-70 transition-opacity"
                    >
                      live →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
