import PageHeader from "@/components/headings/pageheader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tingeworks | About us",
  description:
    "We are a team of passionate developers, designers, and creators who love to build things that matter.",
};

const headerContent = {
  title: "About",
  pronunciation: "/əˈbaʊt/",
};

const teamHeaderContent = {
  title: "Team",
  pronunciation: "/tiːm/",
};

const teammates = [
  {
    name: "Imtiaz Al Shariar",
    role: "CEO & Co-founder",
    image: "/teammates/imtiaz-al-shariar.jpg",
  },
  {
    name: "Wasik Zubair",
    role: "UI/UX Designer",
    image: "/teammates/wasik-zubair.jpg",
  },
  {
    name: "Fahimur Rahman Akib",
    role: "CFO",
    image: "/teammates/fahimur-rahman-akib.jpg",
  },
  {
    name: "Abdullah Ar Rafi",
    role: "CTO",
    image: "/teammates/abdullah-ar-rafi.jpg",
  },
  {
    name: "Jarif Ihtisum",
    role: "Backend Developer",
    image: "/teammates/jarif-ihtisum.jpg",
  },
  {
    name: "Asif Ikbal Mir",
    role: "Marketing",
    image: "/teammates/asif-ikbal.jpg",
  },
];

export default function Contact() {
  return (
    <div className="mt-28">
      <PageHeader content={headerContent} />
      <div className="mt-10 mb-20">
        <p className="mb-5">
          At Tingeworks, we specialize in developing cutting-edge websites,
          apps, and software solutions tailored to meet diverse needs. Our team
          of skilled developers, designers, and tech enthusiasts are dedicated
          to pushing the boundaries of technology, ensuring that our products
          are not only functional but also engaging and user-friendly.
        </p>
        <p className="mb-5">
          Our approach is rooted in understanding our clients&apos; unique
          challenges and goals. We collaborate closely with you to bring your
          vision to life, leveraging the latest advancements in technology to
          deliver solutions that stand out in a competitive landscape.
        </p>
        <p className="mb-5">
          Join us at Tingeworks, where we transform ideas into reality, one
          innovative solution at a time. Let&apos;s create software that works
          for everyone, no matter how they navigate the digital world.
        </p>
      </div>

      <PageHeader content={teamHeaderContent} />
      <div className="mb-20">
        <p className="mt-1">
          We have a diverse team of skilled professionals for designing,
          developing, testing and deploying.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-5 mb-28 gap-5">
          {teammates.map((teammate, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <Image
                width={600}
                height={600}
                className="object-cover"
                src={teammate.image}
                alt={teammate.name}
              />
              <div className="absolute bg-[white] bottom-0 w-full p-2 px-4 drop-shadow-lg">
                <h3 className="text-lg lg:text-xl xl:text-2xl mt-2">
                  {teammate.name}
                </h3>
                <p className="text-sm mt-1">{teammate.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
