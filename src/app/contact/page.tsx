import PageHeader from "@/components/headings/pageheader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | Contact",
  description: "Get in touch with us. We would love to hear from you.",
};

const headerContent = {
  title: "Contact",
  pronunciation: "/ˈkɒntakt/",
  type: "noun",
  definition: [
    {
      meaning:
        "communicate with (someone), typically in order to give or receive information.",
      example: "anyone with any information should contact Darlington police",
      similar: ["get in touch with", "communicate with", "approach"],
    },
  ],
};

export default function Contact() {
  return (
    <div className="mt-28">
      <PageHeader content={headerContent} />
    </div>
  );
}
