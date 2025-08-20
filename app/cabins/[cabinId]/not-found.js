"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NotFound({ url }) {
  const pathname = usePathname();
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found {pathname}
      </h1>
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back cabins
      </Link>
    </main>
  );
}

export default NotFound;
