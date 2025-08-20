import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <section className="h-screen grid items-center justify-center">
      <Spinner />
    </section>
  );
}
