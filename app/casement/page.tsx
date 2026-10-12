import type { Metadata } from "next";
import CasementContent from "./CasementContent";

// Absolute URLs: app/layout.tsx sets no metadataBase, so a relative URL-based
// metadata field would fail the build.
export const metadata: Metadata = {
  title: "Casement | Aviral Garg",
  description:
    "A Dynamic Island for the MacBook notch. Approve your coding agent's permission requests without leaving your editor, and mirror your iPhone's Live Activities.",
  alternates: {
    canonical: "https://aviralgarg.dev/casement",
  },
  openGraph: {
    title: "Casement | Aviral Garg",
    description:
      "A Dynamic Island for the MacBook notch. Approve your coding agent's permission requests without leaving your editor, and mirror your iPhone's Live Activities.",
    url: "https://aviralgarg.dev/casement",
    type: "article",
  },
};

export default function CasementPage() {
  return <CasementContent />;
}
