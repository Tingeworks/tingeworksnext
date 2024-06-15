import PageHeader from "@/components/headings/pageheader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | Contact",
  description: "Get in touch with us. We would love to hear from you.",
};

const headerContent = {
  title: "Contact",
  pronunciation: "/ˈkɒntakt/",
};

export default function Contact() {
  return (
    <div className="mt-28">
      <PageHeader content={headerContent} />
    </div>
  );
}
