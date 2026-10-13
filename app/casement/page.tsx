import type { Metadata } from "next";
import { profile } from "@/data/profile";
import CasementContent from "./CasementContent";

// Absolute URLs: app/layout.tsx sets no metadataBase, so a relative URL-based
// metadata field would fail the build.
const SITE = "https://aviralgarg.dev";
const PAGE_URL = `${SITE}/casement`;
const SOCIAL_CARD = `${SITE}/casement/social-card.png`;

// Mirroring needs macOS 26, which the description used to leave out: the claim
// travels further than the page does, so it carries its own qualifier.
const DESCRIPTION =
  "A Dynamic Island for the MacBook notch. Approve your coding agent's permission requests without leaving your editor, and mirror your iPhone's Live Activities (macOS 26 or later).";

// profile.socials.twitter is the profile URL; the card wants the handle.
const TWITTER_CREATOR = `@${profile.socials.twitter.replace(/\/+$/, "").split("/").pop()}`;

const CARD_ALT =
  "Casement: a coding agent asks to run a command in the MacBook notch, with Deny and Allow beneath it";

export const metadata: Metadata = {
  title: "Casement | Aviral Garg",
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    // No "| Aviral Garg" suffix: the card already shows the domain beneath the
    // title, and app/gsoc-2026-nuttx/page.tsx drops it the same way.
    title: "Casement",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: SOCIAL_CARD,
        width: 1280,
        height: 640,
        alt: CARD_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casement",
    description: DESCRIPTION,
    creator: TWITTER_CREATOR,
    images: [
      {
        url: SOCIAL_CARD,
        alt: CARD_ALT,
      },
    ],
  },
};

export default function CasementPage() {
  return <CasementContent />;
}
