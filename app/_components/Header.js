import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center pt-5 min-w-7xl m-auto justify-between">
      <Logo />
      <Navigation />
    </header>
  );
}
