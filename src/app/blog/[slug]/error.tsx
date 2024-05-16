"use client"; // Error components must be Client Components

import $404 from "@/components/animations/404";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-6xl">
        <$404 />
        <h1>Something went wrong!</h1>
      </div>
    </div>
  );
}
