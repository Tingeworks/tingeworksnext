import PageHeader from "@/components/headings/pageheader";
import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | Gallery",
  description:
    "Few interesting things we have worked on or are working here at Tingeworks.",
};

const headerContent = {
  title: "Gallery",
  pronunciation: "/ˈɡal(ə)ri/",
  type: "noun",
  definition: [
    {
      meaning: "a room or building for the display or sale of works of art.",
      example: "an art gallery",
      similar: ["exhibition room", "display room", "art gallery", "museum"],
    },
  ],
};

export default function Gallery() {
  return (
    <div className="mt-28">
      <PageHeader content={headerContent} />
    </div>
  );
}
