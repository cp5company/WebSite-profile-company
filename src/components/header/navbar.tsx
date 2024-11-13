"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import DropdownMenuRadiochanglang from "../changlangouge";
import ModeToggle from "../them-toggel";
import { NavData } from "../type/typdata";

const Navbar: React.FC<{ navData: NavData }> = ({ navData }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="bg-gray-500 dark:bg-gray-800 border-gray-700 py-3 md:py-4">
      <div className="max-w-screen-xl flex justify-between items-center mx-4 md:mx-auto">
        <Link href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-semibold text-white">
            Navbar
          </span>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link
                href="#about"
                className="text-gray-300 hover:text-gray-50 dark:hover:text-blue-400 font-medium text-sm md:text-base"
              >
                {navData.about}
              </Link>
            </li>
            <li>
              <Link
                href="#Ourserver"
                className="text-gray-300  hover:text-gray-50 dark:hover:text-blue-400 font-medium text-sm md:text-base"
              >
                {navData.Ourserver}
              </Link>
            </li>
            <li>
              <Link
                href="#OurWork"
                className="text-gray-300  hover:text-gray-50 dark:hover:text-blue-400 font-medium text-sm md:text-base"
              >
                {navData.OurWork}
              </Link>
            </li>
            <li>
              <Link
                href="#Testimonials"
                className="text-gray-300  hover:text-gray-50 dark:hover:text-blue-400 font-medium text-sm md:text-base"
              >
                {navData.Testimonials}
              </Link>
            </li>
            <li>
              <Link
                href="#ourteam"
                className="text-gray-300  hover:text-gray-50 dark:hover:text-blue-400 font-medium text-sm md:text-base"
              >
                {navData.tem}
              </Link>
            </li>
            <li>
              <Link
                href="#Trusted"
                className="text-gray-300  hover:text-gray-50 dark:hover:text-blue-400 font-medium text-sm md:text-base"
              >
                {navData.Trust}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-300  hover:text-gray-50 dark:hover:text-blue-400 font-medium text-sm md:text-base"
              >
                {navData.connect}
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-2 md:space-x-4">
            <DropdownMenuRadiochanglang navData={navData} />
            <ModeToggle navData={navData} />
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-8 h-8 md:w-10 md:h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={navbarOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          navbarOpen ? "block" : "hidden"
        } md:hidden w-full mt-4 border-t border-gray-700 pt-4 px-4`}
      >
        <ul className="space-y-2">
          <li>
            <Link
              href="#about"
              className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700"
            >
              {navData.about}
            </Link>
          </li>
          <li>
            <Link
              href="#Ourserver"
              className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700"
            >
              {navData.Ourserver}
            </Link>
          </li>
          <li>
            <Link
              href="#OurWork"
              className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700"
            >
              {navData.OurWork}
            </Link>
          </li>
          <li>
            <Link
              href="#Testimonials"
              className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700"
            >
              {navData.Testimonials}
            </Link>
          </li>
          <li>
            <Link
              href="#ourteam"
              className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700"
            >
              {navData.tem}
            </Link>
          </li>
          <li>
            <Link
              href="#Trusted"
              className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700"
            >
              {navData.Trust}
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-700"
            >
              {navData.connect}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
