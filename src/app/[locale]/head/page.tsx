// src/components/Header.tsx
"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ContentDataTitle } from "@/components/type/typdata";

const Header: React.FC<{ headerdata: ContentDataTitle }> = ({ headerdata }) => {
  const handleClick = (): void => {
    alert("Let's Discuss Your Project");
  };

  return (
    <header className="relative p-4 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 from-primary to-accent opacity-90" />
      <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl text-black dark:text-white font-bold tracking-tight mb-8 animate-fade-in">
          {headerdata.title}
        </h1>
        <h2 className="text-2xl md:text-4xl text-black dark:text-white font-semibold mb-12 animate-slide-up">
          {headerdata.body}
        </h2>
        <a
          href="mailto:pdell9846@gmail.com"
          className="bg-primary hover:bg-primary/90 border border-solid border-black text-primary-foreground px-8 py-4 rounded-[var(--radius)] text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Let&apos;s Discuss Your Project
        </a>
        <div className="flex justify-center space-x-6 mt-16">
          <SocialIcon Icon={FaFacebookF} href="#" />
          <SocialIcon Icon={FaInstagram} href="#" />
          <SocialIcon Icon={FaLinkedinIn} href="#" />
          <SocialIcon Icon={FaTimes} href="#" />
        </div>
      </div>
    </header>
  );
};

interface SocialIconType {
  Icon: React.FC<{ className?: string }>;
  href: string;
}

const SocialIcon: React.FC<SocialIconType> = ({ Icon, href }) => (
  <a
    href={href}
    className="w-12 h-12 rounded-full m-3 dark:bg-primary/10 flex items-center justify-center hover:bg-black/20 dark:hover:bg-primary/20 transition-colors duration-300 transform hover:scale-105"
  >
    <Icon className="w-5 h-5 text-primary " />{" "}
    {/* Adjust icon color to match the theme */}
  </a>
);

export default Header;