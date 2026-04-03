"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { profile } from "@/data/profile";
import { Menu, X as Close } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin, FaDev, FaMedium } from "react-icons/fa";

const navItems = [
  { name: "about", path: "/" },
  { name: "experience", path: "/experience" },
  { name: "work", path: "/work" },
  { name: "open source", path: "/open-source" },
  { name: "research", path: "/research" },
  { name: "writing", path: "/writing" },
  { name: "contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background/88 backdrop-blur-md z-50 flex items-center justify-between px-6">
        <Link href="/" className="text-lg font-medium hover:opacity-80 transition-opacity duration-500">
          Aviral Garg
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground hover:opacity-80 transition-opacity duration-500"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/92 backdrop-blur-md z-40 pt-16 animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="p-6">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path} className="animate-in slide-in-from-left duration-300">
                    <Link
                      href={item.path}
                      className={clsx(
                        "group inline-flex items-center gap-2 text-base transition-all duration-500 hover:translate-x-1",
                        isActive ? "text-foreground" : "text-accent hover:text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span
                        className={clsx(
                          "h-1.5 w-1.5 rounded-full transition-all duration-200",
                          isActive ? "scale-100 bg-amber-500 dark:bg-amber-300" : "scale-0 bg-foreground/40 group-hover:scale-100"
                        )}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex gap-6 text-sm text-accent">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform">
                  <FaGithub size={20} />
                </a>
                <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform">
                  <FaTwitter size={20} />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform">
                  <FaLinkedin size={20} />
                </a>
                <a href={profile.socials.devto} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform">
                  <FaDev size={20} />
                </a>
                <a href={profile.socials.medium} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform">
                  <FaMedium size={20} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r border-border bg-background/90 backdrop-blur-xl p-8 flex-col">
        <div className="mb-12">
          <Link 
            href="/" 
            className="text-lg font-medium hover:opacity-80 transition-all duration-500 hover:translate-x-0.5 inline-block"
          >
            Aviral Garg
          </Link>
          <div className="mt-2 text-sm text-accent">
            AI/ML Developer & Researcher
          </div>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={clsx(
                      "group inline-flex items-center gap-2 text-sm transition-all duration-500 hover:translate-x-1",
                      isActive ? "text-foreground font-medium" : "text-accent hover:text-foreground"
                    )}
                  >
                    <span
                      className={clsx(
                        "h-1.5 w-1.5 rounded-full transition-all duration-200",
                        isActive ? "scale-100 bg-amber-500 dark:bg-amber-300" : "scale-0 bg-foreground/40 group-hover:scale-100"
                      )}
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="flex gap-4 text-sm text-accent">
            <a 
              href={profile.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href={profile.socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a 
              href={profile.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href={profile.socials.devto} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform"
              aria-label="Dev.to"
            >
              <FaDev size={18} />
            </a>
            <a 
              href={profile.socials.medium} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-all duration-500 hover:scale-[1.03] transform"
              aria-label="Medium"
            >
              <FaMedium size={18} />
            </a>
          </div>
          <div className="mt-4 text-xs text-accent">
            &copy; 2025 Aviral Garg
          </div>
        </div>
      </aside>
    </>
  );
}
