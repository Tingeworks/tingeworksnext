import PageHeader from "@/components/headings/pageheader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | About us",
  description:
    "We are a team of passionate developers, designers, and creators who love to build things that matter.",
};

const headerContent = {
  title: "About",
  pronunciation: "/əˈbaʊt/",
  type: "preposition",
  definition: [
    {
      meaning: "on the subject of; concerning.",
      example: "a book about the film",
      similar: ["regarding", "concerning", "with reference to", "relating to"],
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
