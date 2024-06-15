import PageHeader from "@/components/headings/pageheader";
import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";
import Image from "next/image";
import { getProjects } from "../../lib/gallery";
import $404 from "@/components/animations/404";
import GalleryCard from "@/components/cards/gallery";

export const metadata: Metadata = {
  title: "Tingeworks | Gallery",
  description:
    "Few interesting things we have worked on or are working here at Tingeworks.",
};

const headerContent = {
  title: "Gallery",
  pronunciation: "/ˈɡal(ə)ri/",
};

export default async function Gallery() {
  const projects = await getProjects();
  return (
    <div className="mt-28">
      <PageHeader content={headerContent} />

      {projects.data == null && (
        <div className="text-4xl mt-10">
          <$404 />
          <p className="text-2xl mt-2 lowercase opacity-50">
            Nothing to see here.
          </p>
        </div>
      )}

      <div className="mt-10">
        {projects.data != null &&
          projects.data.map((project, index) => (
            <GalleryCard
              key={index}
              slug={project.attributes.slug}
              title={project.attributes.name}
              description={project.attributes.description}
              image={project.attributes.preview.data.attributes.url}
              techStack={project.attributes.techstack}
            />
          ))}
      </div>
    </div>
  );
}
