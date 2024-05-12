import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-5 lg:px-20 flex flex-col h-screen py-10">
      <Navbar />
      <img
        className="w-3/4 block mt-20"
        src="/tingeworks-text.svg"
        alt="Tingeworks text logo"
      />
      <p className="text-2xl my-5">
        Fingers, tentacles or telekinesis <br />
        no matter what users use to surf the net, we develop software that works
        for your users.
      </p>
      <div className="flex-1 bg-gray-200 w-full"></div>
    </div>
  );
}
