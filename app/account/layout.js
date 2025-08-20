import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <section className="grid grid-cols-[16rem_1fr] h-full gap-5">
      <SideNavigation />
      <section className="py-1">{children}</section>
    </section>
  );
}
