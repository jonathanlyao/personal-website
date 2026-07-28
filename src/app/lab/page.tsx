import type { Metadata } from "next";
import { LabPageHeader } from "@/components/lab/LabPageHeader";
import { LabRegistry } from "@/components/lab/LabRegistry";
import { labItems } from "@/data/lab";

export const metadata: Metadata = {
  title: "Lab | Lee Yao",
  description:
    "Product experiments and local-first workflow systems by Lee Yao, combining browser integration, data processing, persistence, scoring, automation, and human review.",
  alternates: {
    canonical: "/lab",
  },
  openGraph: {
    title: "Lab | Lee Yao",
    description:
      "Tools and engineering experiments connecting data, interfaces, automation, and human decision-making.",
    type: "website",
    url: "/lab",
  },
};

export default function LabPage() {
  return (
    <main className="lab-page" id="top" tabIndex={-1}>
      <LabPageHeader items={labItems} />
      <LabRegistry items={labItems} />
    </main>
  );
}
