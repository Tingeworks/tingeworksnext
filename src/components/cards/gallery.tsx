import Image from "next/image";
import Link from "next/link";

interface GalleryCardProps {
  title: string;
  description: string;
  techStack: {
    name: string;
    color: string;
    url: string;
  }[];
  image: string;
}

export default function GalleryCard({
  title,
  description,
  techStack,
  image,
}: GalleryCardProps): JSX.Element {
  return (
    <div className="bg-gray-900 flex flex-col lg:flex-row transition-transform cursor-pointer active:scale-95 shadow hover:shadow-lg">
      <div className="flex-1">
        <Image
          src={`https://admin.tingeworks.com${image}`}
          alt="Gallery"
          width={600}
          height={50}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="text-white p-10 lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl">{}</h2>
          <p className="text-xl mt-2">{description}</p>
        </div>
        <ul className="flex gap-5">
          {techStack.map((tech, index) => (
            <li
              key={index}
              style={{
                color: tech.color,
              }}
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
