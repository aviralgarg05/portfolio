"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { profile } from "@/data/profile";

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
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background z-50 flex items-center justify-between px-6">
        <Link href="/" className="text-lg font-medium">
          aviral garg
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background z-40 pt-16"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="p-6">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={clsx(
                        "block text-base transition-colors",
                        isActive ? "text-foreground" : "text-accent"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col gap-3 text-sm text-accent">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                  github
                </a>
                <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer">
                  twitter
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin
                </a>
                <a href={profile.socials.devto} target="_blank" rel="noopener noreferrer">
                  dev.to
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r border-border bg-background p-8 flex-col">
        <div className="mb-12">
          <Link 
            href="/" 
            className="text-lg font-medium hover:opacity-70 transition-opacity"
          >
            aviral garg
          </Link>
          <div className="mt-2 text-sm text-accent">
            ai/ml developer & researcher
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
                      "block text-sm transition-colors",
                      isActive ? "text-foreground" : "text-accent hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="flex flex-col gap-2 text-sm text-accent">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              github
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              twitter
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              linkedin
            </a>
            <a href={profile.socials.devto} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              dev.to
            </a>
          </div>
          <div className="mt-4 text-xs text-accent">
            &copy; 2025 aviral garg
          </div>
        </div>
      </aside>
    </>
  );
}
