import Nav from "./nav";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 py-5 bg-white z-10">
      <div className="flex container mx-auto px-5 lg:px-20 justify-between">
        <a href="/">tingeworks.</a>
        <Nav />
      </div>
    </div>
  );
}
