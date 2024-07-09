import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <Image src="/loader.svg" width={100} height={100} alt="loader" />
    </div>
  );
};

export default Loading;
