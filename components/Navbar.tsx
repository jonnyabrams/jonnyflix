import Image from "next/image";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useState } from "react";

import NavbarItem from "./NavbarItem";
import { navLinks } from "@/utils/constants";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        <div className="ml-8 gap-7 hidden lg:flex">
          {navLinks.map((item) => (
            <NavbarItem label={item.label} key={item.label} />
          ))}
        </div>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
