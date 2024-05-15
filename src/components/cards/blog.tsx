import Link from "next/link";

const TextWithLimit = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => (
  <span>
    {text.length > maxLength ? `${text.substring(0, maxLength)}...` : text}
  </span>
);

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.attributes.slug}`}>
      <article className="shadow bg-slate-50 p-10 hover:shadow-md transition-shadow h-full flex flex-col justify-between">
        <h2 className="text-2xl">{blog.attributes.title} </h2>
        <p className="text-gray-500 mt-2 flex gap-4">
          {new Date(blog.attributes.createdAt).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
        </p>
      </article>
    </Link>
  );
}
