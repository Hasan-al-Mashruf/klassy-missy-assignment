import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray pt-5 pb-[38px] mb-[27px]">
      <div className="container">
        <Link href="/">
          <h2 className="text-lg font-medium text-black">
            Client Regimen Request
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
