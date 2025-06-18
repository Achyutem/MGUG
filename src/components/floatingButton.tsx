import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  MapPin,
  Youtube,
  HeartHandshake,
} from "lucide-react";
import openSiennaMenu from "@/utils/sienna";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtonsCustom() {
  const whatsAppMessage =
    "Hello! I'm interested in learning more about Mahayogi Gorakhnath University.";

  const encodedWhatsAppMessage = encodeURIComponent(whatsAppMessage);

  const buttons = [
    {
      href: "https://www.facebook.com/mgugfacebookpage/",
      icon: Facebook,
      title: "Facebook",
    },
    {
      href: "https://x.com/MGUGOfficial",
      icon: Twitter,
      title: "Twitter (X)",
    },
    {
      href: "https://www.instagram.com/mgugofficial/",
      icon: Instagram,
      title: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UC_RiXHng3aH9Qr20ob-lkDQ",
      icon: Youtube,
      title: "YouTube",
    },
    {
      href: "tel:+919415266014",
      icon: Phone,
      title: "Call Us",
    },
    {
      href: `https://wa.me/+919415266014?text=${encodedWhatsAppMessage}`,
      icon: FaWhatsapp,
      title: "Chat on WhatsApp",
    },
    {
      href: "https://maps.google.com/?q=Mahayogi+Gorakhnath+University",
      icon: MapPin,
      title: "Find Us on Maps",
    },
  ];

  return (
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
            {/* Glassmorphic Tooltip */}
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs lg:text-sm xl:text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              {title}
            </span>
          </a>
        ))}

        {/* Sienna Button */}
        <button
          onClick={openSiennaMenu}
          className="group relative bg-transparent text-orange-400 p-2 md:p-[6px] lg:p-[8px] xl:p-[10px] rounded-full shadow shadow-black/30 hover:bg-blue-950/90 hover:backdrop-blur-sm transition-all duration-200 hover:scale-105"
        >
          <HeartHandshake className="w-[20px] h-[20px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]" />
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs lg:text-sm xl:text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Accessibility menu
          </span>
        </button>
      </div>
    </div>
  );
}
