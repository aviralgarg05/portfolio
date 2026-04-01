import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Aviral Garg</h3>
            <p className="text-sm text-accent leading-relaxed">
              AI/ML Developer, Researcher, and Startup Builder based in New Delhi, India.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-foreground transition-colors inline-flex items-center group"
                >
                  GitHub
                  <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-foreground transition-colors inline-flex items-center group"
                >
                  LinkedIn
                  <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href={profile.socials.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-foreground transition-colors inline-flex items-center group"
                >
                  Dev.to
                  <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
            <a 
              href={`mailto:${profile.identity.email}`}
              className="text-sm text-accent hover:text-foreground transition-colors break-all"
            >
              {profile.identity.email}
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs font-mono text-accent text-center">
            © {new Date().getFullYear()} Aviral Garg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
