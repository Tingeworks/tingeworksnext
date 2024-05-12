import Nav from "./nav";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between">
      <a href="/">
        <img src="/tingeworks.svg" alt="Tingeworks logo" />
      </a>

      <Nav />
    </div>
  );
}
