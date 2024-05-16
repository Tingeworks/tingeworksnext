import { getBlog } from "../../../lib/blog";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getBlog(params.slug);

  if (article.data === null) {
    throw new Error("404");
  }

  return (
    <div className="mt-36">
      <h1 className="text-6xl">{article.data[0].attributes.title}</h1>
      <p className="text-2xl my-2">
        {new Date(article.data[0].attributes.createdAt).toLocaleDateString(
          "en-gb",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        )}{" "}
      </p>

      <div className="mt-20">
        {article.data[0].attributes.content.map((content, index) => {
          if (content.type === "paragraph") {
            return (
              <div key={index} className="text-xl my-5">
                {/* {content.text} */}
                {content.children.map((child, index) => {
                  if (child.type === "text") {
                    if (child.bold === true) {
                      return (
                        <span key={index} className="font-bold">
                          {child.text}
                        </span>
                      );
                    } else return <span key={index}>{child.text}</span>;
                  }

                  return null;
                })}
              </div>
            );
          }

          // if (content.type === "image") {
          //   return (
          //     <img
          //       key={index}
          //       src={content.value}
          //       alt={content.alt}
          //       className="w-full my-5"
          //     />
          //   );
          // }

          // if (content.type === "video") {
          //   return (
          //     <video
          //       key={index}
          //       src={content.value}
          //       controls
          //       className="w-full my-5"
          //     />
          //   );
          // }

          return null;
        })}
      </div>
    </div>
  );
}
