import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aviral garg - ai/ml developer & researcher",
  description: "ai/ml developer, researcher, open-source contributor, and startup builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Navigation />
        <main className="pt-16 md:pt-0 md:ml-64 px-6 md:px-8 py-6 md:py-16 max-w-4xl">{children}</main>
      </body>
    </html>
  );
}
