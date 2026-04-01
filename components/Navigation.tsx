"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { profile } from "@/data/profile";

const navItems = [
  { name: "about", path: "/" },
  { name: "work", path: "/work" },
  { name: "open source", path: "/open-source" },
  { name: "research", path: "/research" },
  { name: "writing", path: "/writing" },
  { name: "experience", path: "/experience" },
  { name: "contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background p-8 flex flex-col">
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
  );
}
