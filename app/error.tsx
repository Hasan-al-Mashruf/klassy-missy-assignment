"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleTryAgain = () => {
    // Attempt to recover by trying to re-render the segment
    reset();
  };

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={handleTryAgain}
        className="bg-black rounded-sm text-sm font-medium capitalize text-white py-1 px-[18px]"
      >
        Try again
      </button>
    </div>
  );
}
