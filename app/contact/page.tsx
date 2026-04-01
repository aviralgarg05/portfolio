"use client";

import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section>
        <h1 className="text-2xl md:text-3xl mb-4">contact</h1>
        <p className="text-sm text-accent leading-relaxed">
          open to collaborations, consulting, and interesting problems in ai/ml systems.
        </p>
      </section>

      {/* Direct Contact */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">get in touch</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between pb-3 border-b border-border">
            <span className="text-accent">email</span>
            <a 
              href={`mailto:${profile.identity.email}`}
              className="text-foreground hover:opacity-70 transition-opacity"
            >
              {profile.identity.email}
            </a>
          </div>
          <div className="flex justify-between pb-3 border-b border-border">
            <span className="text-accent">location</span>
            <span className="text-foreground">{profile.identity.location}</span>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">find me online</h2>
        <div className="space-y-3 text-sm">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:opacity-70 transition-opacity"
          >
            <span className="text-accent">github</span>
            <span className="text-foreground">@aviralgarg05 →</span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:opacity-70 transition-opacity"
          >
            <span className="text-accent">linkedin</span>
            <span className="text-foreground">aviral-garg99 →</span>
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:opacity-70 transition-opacity"
          >
            <span className="text-accent">twitter</span>
            <span className="text-foreground">@aviralgarg39805 →</span>
          </a>
          <a
            href={profile.socials.devto}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:opacity-70 transition-opacity"
          >
            <span className="text-accent">dev.to</span>
            <span className="text-foreground">@aviralgarg05 →</span>
          </a>
          <a
            href={profile.socials.geeksforgeeks}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:opacity-70 transition-opacity"
          >
            <span className="text-accent">geeksforgeeks</span>
            <span className="text-foreground">gargaviwmuu →</span>
          </a>
          <a
            href={profile.socials.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between pb-3 border-b border-border hover:opacity-70 transition-opacity"
          >
            <span className="text-accent">pypi</span>
            <span className="text-foreground">Aviral_Garg →</span>
          </a>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">interested in</h2>
        <div className="space-y-3 text-sm text-accent leading-relaxed">
          <p>• open source collaborations</p>
          <p>• ai/ml consulting projects</p>
          <p>• research collaborations</p>
          <p>• technical writing opportunities</p>
          <p>• speaking at conferences and meetups</p>
          <p>• building innovative products</p>
        </div>
      </section>

      {/* Response Time */}
      <section>
        <h2 className="text-lg md:text-xl mb-6">note</h2>
        <p className="text-sm text-accent leading-relaxed">
          i typically respond within 24-48 hours. for urgent matters, please mention it in the subject line or message.
        </p>
      </section>
    </div>
  );
}
