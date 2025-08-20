import Link from "next/link";
const TABS = [
  { title: "About", path: "/about" },
  { title: "Cabins", path: "/cabins" },
  { title: "Guest area", path: "/account" },
];
export default function Navigation() {
  return (
    <nav className="z-10 text-2xl ">
      <ul className="flex items-center gap-16">
        {TABS.map(({ title, path }) => (
          <li key={title} className="hover:text-accent-400 transition-colors">
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
