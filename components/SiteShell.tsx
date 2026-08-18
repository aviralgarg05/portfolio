"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";

const standaloneRoutes = new Set(["/gsoc-2026-nuttx"]);

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = standaloneRoutes.has(pathname);

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-8 md:ml-64 px-6 md:px-8 pb-6 md:pb-16 max-w-4xl">
        {children}
      </main>
    </>
  );
}
