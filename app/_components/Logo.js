import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-10 items-center z-10">
      <Image
        src="/logo.png"
        width="50"
        height="50"
        alt="The website logo"
        quality={100}
      />
      <h1 className="uppercase">the wild oasis</h1>
    </Link>
  );
}
