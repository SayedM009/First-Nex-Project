import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function loading({ count = 4 }) {
  return (
    <section className="flex gap-10 max-w-7xl flex-wrap" aria-busy="true">
      {/* Generate an empty array to loop over it */}
      {[...Array(count)].map((_, index) => (
        // Skeleton container
        <section
          className="border-1 border-primary-800 flex p-3 flex-1"
          key={index}
        >
          <Skeleton width={100} height={130} /> {/* Image skeleton */}
          <section className="w-full py-2 px-5">
            <Skeleton width={100} /> {/* Title skeleton */}
            <Skeleton width={150} /> {/* Details skeleton */}
            <div className="w-full text-right mt-5">
              <Skeleton width={150} /> {/* Price skeleton */}
              <div className="mt-5">
                <Skeleton width={170} height={35} /> {/* Action skeleton */}
              </div>
            </div>
          </section>
        </section>
      ))}
    </section>
  );
}
