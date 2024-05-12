import links from "./links";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-5 uppercase text-sm">
        {links.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
