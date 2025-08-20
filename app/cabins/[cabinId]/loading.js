import Spinner from "@/app/_components/Spinner";

export default function loading() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center">
      <Spinner />
      <h1 className="capitalize text-2xl text-primary-200">
        loading cabins data...
      </h1>
    </section>
  );
}
