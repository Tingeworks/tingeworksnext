import PageHeader from "@/components/headings/pageheader";
import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";
import { getBlogs } from "../../lib/blog";
import $404 from "@/components/animations/404";
import BlogCard from "@/components/cards/blog";

export const metadata: Metadata = {
  title: "Tingeworks | Blog",
  description: "Read about our thoughts, ideas, and learnings on our blog.",
};

const headerContent = {
  title: "Blog",
  pronunciation: "/blɒɡ/",
  type: "noun",
  definition: [
    {
      meaning:
        "a regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style.",
      example: "many travel bloggers write about their trips",
      similar: ["weblog", "web log", "online journal", "web diary"],
    },
  ],
};

export default async function Page() {
  const data = await getBlogs();

  return (
    <div className="mt-28">
      <PageHeader content={headerContent} />
      <div className="mt-20">
        {data.data == null && (
          <div className="text-4xl">
            <$404 />
            <p className="text-2xl mt-2 lowercase opacity-50">
              Nothing to see here.
            </p>
          </div>
        )}

        {data.data != null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {data.data.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
