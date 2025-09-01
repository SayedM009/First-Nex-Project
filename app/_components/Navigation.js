import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";
const TABS = [
  { title: "About", path: "/about" },
  { title: "Cabins", path: "/cabins" },
  { title: "Guest area", path: "/account" },
];
export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-2xl ">
      <ul className="flex items-center gap-16">
        {TABS.map(({ title, path }) => (
          <li
            key={title}
            className="hover:text-accent-400 transition-colors flex flex-row-reverse items-center"
          >
            <Link href={path}>{title}</Link>
            {path === "/account" && session?.user && (
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={30}
                height={30}
                referrerPolicy="no-referrer"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
