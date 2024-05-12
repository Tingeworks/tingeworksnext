import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | Blog",
  description: "Read about our thoughts, ideas, and learnings on our blog.",
};

export default function Blog() {
  return (
    <div className="container mx-auto px-5 lg:px-20 flex flex-col h-screen py-10">
      <Navbar />
      <h1 className="text-9xl font-bold mt-20 uppercase">Blog</h1>
    </div>
  );
}
