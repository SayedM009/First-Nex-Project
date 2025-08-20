import React from "react";

import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export default async function CabinsList({ filter }) {
  const cabins = await getCabins();
  if (!cabins.length)
    return (
      <h2 className="uppercase text-primary-50 text-4xl fw-semibold text-center mt-5">
        Unfortinatlly, No cabins.
      </h2>
    );

  let displayedCabins;
  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity > 7);
  return (
    <section className="grid sm:gird-cols-1 md:grid-cols-2 gap-8 lg-gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </section>
  );
}
