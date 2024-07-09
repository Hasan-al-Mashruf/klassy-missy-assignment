import Link from "next/link";
import React from "react";
import LogOut from "./LogOut";

const Header = () => {
  return (
    <header className="bg-gray pt-5 pb-[38px] mb-[27px]">
      <div className="container mx-auto flex items-center md:justify-between flex-wrap gap-5 justify-center">
        <Link href="/">
          <h2 className="text-lg font-medium text-black">
            Client Regimen Request
          </h2>
        </Link>
        <div className="flex gap-4">
          <Link
            href="/regiment"
            className="bg-black rounded-sm text-sm font-medium capitalize text-white py-3 px-[18px] "
          >
            Create Regiment
          </Link>
          <LogOut />
        </div>
      </div>
    </header>
  );
};

export default Header;
