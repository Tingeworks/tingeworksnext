import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | About us",
  description:
    "We are a team of passionate developers, designers, and creators who love to build things that matter.",
};

export default function About() {
  return (
    <div className="container mx-auto px-5 lg:px-20 flex flex-col h-screen py-10">
      <Navbar />
      <h1 className="text-9xl font-bold mt-20 uppercase">About</h1>
    </div>
  );
}
