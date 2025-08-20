import { Suspense } from "react";
import CabinsList from "../_components/CabinsList";
import CabinsSkeleton from "../_components/CabinsSkeleton";
import Filter from "../_components/Filter";

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const filter = params?.capacity ?? "all";
  return (
    <section>
      <h1 className="capitalize text-accent-400 text-4xl font-medium mb-5">
        our luxury cabins
      </h1>

      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end my-5">
        <Filter />
      </div>
      <Suspense fallback={<CabinsSkeleton />} key={filter}>
        <CabinsList filter={filter} />
      </Suspense>
    </section>
  );
}
