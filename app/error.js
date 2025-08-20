"use client";
export default function Error({ error, reset }) {
  return (
    <section className="text-center">
      <h1 className=" text-3xl text-accent-500 uppercase font-bold">
        somthing went wrong!
      </h1>
      <p className="text my-5">{error.message}</p>
      <button
        className="bg-accent-600 py-4 px-6 cursor-pointer hover:bg-accent-700 transition-colors"
        onClick={reset}
      >
        Try again
      </button>
    </section>
  );
}
