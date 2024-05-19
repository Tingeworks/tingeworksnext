import { getProject } from "../../../lib/gallery";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (project.data === null) {
    throw new Error("404");
  }

  return (
    <div className="mt-36">
      <h1 className="text-3xl lg:text-5xl xl:text-6xl">
        {project.data[0].attributes.name}
      </h1>
      <p className="text-lg lg:text-2xl my-2">
        {new Date(project.data[0].attributes.createdAt).toLocaleDateString(
          "en-gb",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        )}{" "}
      </p>

      <div className="mt-20">
        {project.data[0].attributes.content.map((content, index) => {
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
          return null;
        })}
      </div>
    </div>
  );
}
