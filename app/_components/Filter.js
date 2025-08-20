"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Filter() {
  return (
    <section className="flex items-center gap-2">
      <Button filter="all">All cabins</Button>
      <Button filter="small">2-3 guests</Button>
      <Button filter="medium">4-7 guests</Button>
      <Button filter="large">8-12 guests</Button>
    </section>
  );
}

function Button({ children, filter }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeParam = searchParams.get("capacity") ?? "all";
  function handleClick() {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <button
      className={`px-5 py-3  hover:bg-primary-950 cursor-pointer transition-colors ${
        activeParam == filter
          ? "bg-primary-950 border-1 border-primary-800"
          : "bg-primary-800"
      }`}
      onClick={() => handleClick(filter)}
    >
      {children}
    </button>
  );
}
