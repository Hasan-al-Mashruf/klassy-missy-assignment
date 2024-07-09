import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h2 className="text-3xl font-bold mb-4">404 Not Found</h2>
      <p className="text-gray-600 mb-8">
        Sorry, the page you requested could not be found.
      </p>
      <Link
        href="/"
        className="bg-black rounded-sm text-sm font-medium capitalize text-white py-1 px-[18px]"
      >
        Return Home
      </Link>
    </div>
  );
}
