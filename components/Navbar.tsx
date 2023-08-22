import Image from "next/image";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useEffect, useState } from "react";

import { navLinks } from "@/utils/constants";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-2 sm:px-4 md:px-16 py-6 flex items-center transition duration-500 ${
          showBackground && "bg-zinc-900 bg-opacity-90"
        }`}
      >
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
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu && "rotate-180"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 max-sm:hidden cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 max-sm:hidden cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={() => setShowAccountMenu(!showAccountMenu)}
            className="flex items-center cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                src="/images/profiles-blue.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
            <BsChevronDown
              className={`text-white transition max-lg:hidden ${
                showAccountMenu && "rotate-180"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
