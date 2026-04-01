"use client";

import { research } from "@/data/profile";

export default function ResearchPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section>
        <h1 className="text-2xl md:text-3xl mb-4">research</h1>
        <p className="text-sm text-accent leading-relaxed mb-6">
          active research pipeline in ai/ml systems, cybersecurity, and natural language processing.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="text-2xl md:text-3xl font-medium mb-1">{research.status.underReview}</div>
            <div className="text-xs text-accent">under review</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-medium mb-1">{research.status.readyToPublish}</div>
            <div className="text-xs text-accent">ready to publish</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-medium mb-1">{research.status.underDevelopment}</div>
            <div className="text-xs text-accent">in development</div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">projects</h2>
        <div className="space-y-8">
          {research.projects.map((project, index) => (
            <div key={index} className="border-b border-border pb-8 last:border-0">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg">{project.title}</h3>
                <span className="text-xs px-2 py-1 border border-border text-accent">
                  {project.status}
                </span>
              </div>
              
              {project.context && (
                <p className="text-xs text-accent mb-2">{project.context}</p>
              )}
              
              <p className="text-sm text-accent leading-relaxed mb-3">
                {project.description}
              </p>

              <div className="text-xs px-2 py-1 border border-border text-accent inline-block">
                {project.type}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Themes */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">research themes</h2>
        <div className="space-y-2">
          {research.themes.map((theme, index) => (
            <div key={index} className="text-sm text-accent">
              {theme}
            </div>
          ))}
        </div>
      </section>

      {/* Current Focus */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">areas of interest</h2>
        <div className="space-y-3 text-sm text-accent leading-relaxed">
          <p>• multi-agent systems and frameworks</p>
          <p>• real-time ai systems with low latency</p>
          <p>• cybersecurity applications of machine learning</p>
          <p>• natural language processing and translation</p>
          <p>• database optimization and ai-native databases</p>
          <p>• evaluation frameworks for ai systems</p>
        </div>
      </section>

      {/* Publications Note */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">publication status</h2>
        <p className="text-sm text-accent leading-relaxed">
          i have {research.status.underReview} paper under review, {research.status.readyToPublish} papers ready to publish, 
          and {research.status.underDevelopment} research projects currently in development. updates will be posted as papers are published.
        </p>
      </section>
    </div>
  );
}
