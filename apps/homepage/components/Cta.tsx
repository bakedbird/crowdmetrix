import Link from "next/link";

const Cta = () => {
  return (
    <div className="bg-slate-600 dark:bg-slate-700 py-10 text-slate-300 flex flex-col gap-4 items-center justify-center">
      <p className="text-xl">Lorem ipsum dolor sit amet consectetur</p>
      <Link
        className="py-2 px-4 bg-teal-500 rounded-lg text-slate-800 text-lg font-medium"
        href="/app"
      >
        Try now
      </Link>
    </div>
  );
};
export default Cta;
