"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import logo from "../../../public/Assets/logo.png";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaPhoneAlt } from "react-icons/fa";
import whatsApp from "../../../public/Assets/whatsApp.png";
import facebook from "../../../public/Assets/facebook.png";

const Header = ({ activeItem }) => {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState("+8801711-160462");

  const handleClose = (e) => {
    const target = e.target;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setactive(true);
        } else {
          setactive(false);
        }
      });
    }
  }, []);

  const handlePhoneChange = (e) => {
    setSelectedPhone(e.target.value);
  };

  return (
    <div
      className={`w-full min-h-[50px] transition-opacity top-0 left-0 z-[9999] dark:bg-black dark:text-white ${active && "bg-white fixed shadow-lg"
        }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src={logo} className="w-20 h-20" alt="logo" />
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-4">
          <div className="border-2 rounded-full p-1 bg-white">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B8801712343359&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={whatsApp} width={25} height={25} alt="WhatsApp" />
            </a>
          </div>
          <div className="border-2 rounded-full p-1 bg-white ml-2 mr-2">
            <a
              href="https://www.facebook.com/AbroadTickets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebook} width={25} height={25} alt="Facebook" />
            </a>
          </div>
          <div className="relative">
            <div className="flex items-center p-2 border border-indigo-600 rounded-md">
              <FaPhoneAlt className="text-[15px] mr-2" />
              <select
                value={selectedPhone}
                onChange={handlePhoneChange}
                className="bg-white text-black border-none focus:outline-none"
              >
                <option value="+8801711-160462">+8801711-160462</option>
                <option value="+8801711-902509">+8801711-902509</option>
                <option value="+8801911-248972">+8801911-248972</option>
             </select>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile screen */}
      <div className="w-full md:hidden flex items-center justify-between">
        <div>
          <Link href="/">
            <h1>
              <Link href="/">
                <Image src={logo} className="w-20 h-20" alt="logo" />
              </Link>
            </h1>
          </Link>
        </div>

        <div className="mr-4">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {open && (
          <div
            className="fixed md:hidden w-full h-screen top-0 right-0 z-[99999] bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed bg-white h-screen top-0 left-0 w-[50%] z-[9999]">
              <div className="mt-20 p-5">
                <Navigation activeItem={activeItem} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
