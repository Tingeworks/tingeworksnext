import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | Gallery",
  description:
    "Few interesting things we have worked on or are working here at Tingeworks.",
};

export default function Gallery() {
  return (
    <div className="container mx-auto px-5 lg:px-20 flex flex-col h-screen py-10">
      <Navbar />
      <h1 className="text-9xl font-bold mt-20 uppercase">Gallery</h1>
    </div>
  );
}
