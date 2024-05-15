"use client";

import { usePathname } from "next/navigation";

export default function NavItem({
  href,
  label,
}: Readonly<{
  href: string;
  label: string;
}>) {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <li className={`${pathname == href && "opacity-70"}`}>
      <a href={href}>{label}</a>
    </li>
  );
}
