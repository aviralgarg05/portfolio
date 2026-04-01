"use client";

import { experience } from "@/data/profile";

export default function ExperiencePage() {
  const current = experience.filter(exp => exp.type === "current");
  const research = experience.filter(exp => exp.type === "research");
  const leadership = experience.filter(exp => exp.type === "leadership");
  const prior = experience.filter(exp => exp.type === "prior");
  const community = experience.filter(exp => exp.type === "community");

  return (
    <div className="space-y-12 md:space-y-16">
      <section>
        <h1 className="text-2xl md:text-3xl mb-4">experience</h1>
        <p className="text-sm text-accent leading-relaxed">
          building products, conducting research, and contributing to the tech community.
        </p>
      </section>

      {/* Current Roles */}
      {current.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6">current</h2>
          <div className="space-y-8">
            {current.map((exp, index) => (
              <div key={index} className="border-b border-border pb-8 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg">{exp.title}</h3>
                  <span className="text-xs px-2 py-1 border border-border text-accent">
                    active
                  </span>
                </div>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3">{exp.period} • {exp.location}</div>
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
                        className="text-foreground hover:opacity-70 transition-opacity"
                      >
                        github →
                      </a>
                    )}
                    {exp.links.website && (
                      <a
                        href={exp.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:opacity-70 transition-opacity"
                      >
                        website →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Leadership */}
      {leadership.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6">leadership</h2>
          <div className="space-y-6">
            {leadership.map((exp, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3">{exp.period} • {exp.location}</div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Research */}
      {research.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6">research</h2>
          <div className="space-y-6">
            {research.map((exp, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3">{exp.period} • {exp.location}</div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prior Experience */}
      {prior.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6">prior experience</h2>
          <div className="space-y-6">
            {prior.map((exp, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3">{exp.period} • {exp.location}</div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Community */}
      {community.length > 0 && (
        <section>
          <h2 className="text-lg md:text-xl mb-6">community & affiliations</h2>
          <div className="space-y-6">
            {community.map((exp, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-sm md:text-base mb-1">{exp.title}</h3>
                <div className="text-sm text-accent mb-1">{exp.company}</div>
                <div className="text-xs text-accent mb-3">{exp.period} • {exp.location}</div>
                <p className="text-sm text-accent leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
