'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          />
          <div className="hidden sm:flex font-bold ml-[10px] text-gray-300 text-sm md:text-base">Fazal Bakshi</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex w-auto max-w-[600px] h-full flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[15px] xl:px-[20px] py-[10px] rounded-full text-gray-200 gap-3 xl:gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-sm xl:text-base whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-sm xl:text-base whitespace-nowrap"
            >
              Source Code
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden lg:flex flex-row gap-3 xl:gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-5 w-5 xl:h-6 xl:w-6 text-white hover:text-purple-500 transition" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white focus:outline-none text-3xl sm:text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 lg:hidden shadow-lg">
          {/* Links */}
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center w-full py-2 hover:bg-purple-500/10 rounded text-base sm:text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center w-full py-2 hover:bg-purple-500/10 rounded text-base sm:text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white hover:text-purple-500 transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};