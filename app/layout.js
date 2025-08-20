import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s / Asfartrip.com",
    default: "Welcome to Asfartrip.com",
  },
  description:
    "Asfartrip.com is a platform who providers all kind of travel services",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} bg-primary-950 text-primary-100 text-2xl flex flex-col min-h-screen  `}
      >
        <Header />
        <section className="flex-1 px-8 py-12 grid">
          <main className="m-auto  max-w-7xl w-full h-full">{children}</main>
        </section>
      </body>
    </html>
  );
}
