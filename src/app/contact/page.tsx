import Navbar from "@/components/navigation/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tingeworks | Contact",
  description: "Get in touch with us. We would love to hear from you.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-5 lg:px-20 flex flex-col h-screen py-10">
      <Navbar />
      <h1 className="text-9xl font-bold mt-20 uppercase">Contact</h1>
    </div>
  );
}
