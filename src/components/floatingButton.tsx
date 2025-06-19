"use client";

import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMapPin,
  FiYoutube,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SearchDialog from "./searchButton";
import { useState } from "react";

export default function FloatingButtonsCustom() {
  const [searchOpen, setSearchOpen] = useState(false);

  const whatsAppMessage =
    "Hello! I'm interested in learning more about Mahayogi Gorakhnath University.";
  const encodedWhatsAppMessage = encodeURIComponent(whatsAppMessage);

  const buttons = [
    {
      href: "https://www.facebook.com/mgugfacebookpage/",
      icon: FiFacebook,
      title: "Facebook",
    },
    {
      href: "https://x.com/MGUGOfficial",
      icon: FiTwitter,
      title: "Twitter (X)",
    },
    {
      href: "https://www.instagram.com/mgugofficial/",
      icon: FiInstagram,
      title: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UC_RiXHng3aH9Qr20ob-lkDQ",
      icon: FiYoutube,
      title: "YouTube",
    },
    {
      href: "tel:+919415266014",
      icon: FiPhone,
      title: "Call Us",
    },
    {
      href: `https://wa.me/+919415266014?text=${encodedWhatsAppMessage}`,
      icon: FaWhatsapp,
      title: "Chat on WhatsApp",
    },
    {
      href: "https://maps.google.com/?q=Mahayogi+Gorakhnath+University",
      icon: FiMapPin,
      title: "Find Us on Maps",
    },
  ];

  return (
    <>
      <SearchDialog open={searchOpen} setOpen={setSearchOpen} />
      <div className="fixed bottom-4 z-50 w-full flex justify-center md:bottom-6 md:right-4 md:w-auto lg:bottom-6 lg:right-6">
        <div className="flex md:flex-col items-center gap-2 bg-blue-950/30 backdrop-blur-md rounded-full px-2 py-2 lg:px-3 lg:py-3 border border-white/10 shadow-md shadow-black/20">
          {buttons.map(({ href, icon: Icon, title }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-transparent text-orange-400 p-2 md:p-[6px] lg:p-[8px] xl:p-[10px] rounded-full shadow shadow-black/30 hover:bg-blue-950/90 hover:backdrop-blur-sm transition-all duration-200 hover:scale-105"
            >
              <Icon className="w-[20px] h-[20px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]" />
              <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs lg:text-sm xl:text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                {title}
              </span>
            </a>
          ))}
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="group relative bg-transparent text-orange-400 p-2 md:p-[6px] lg:p-[8px] xl:p-[10px] rounded-full shadow shadow-black/30 hover:bg-blue-950/90 hover:backdrop-blur-sm transition-all duration-200 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.9-5.15A7 7 0 1110 3a7 7 0 018.55 8.55z"
              />
            </svg>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs lg:text-sm xl:text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              Search
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
