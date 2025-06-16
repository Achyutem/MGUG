import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  MapPin,
  Youtube,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";
import openSiennaMenu from "@/utils/sienna";

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
      href: `https://wa.me/+919794299451?text=${encodedWhatsAppMessage}`,
      icon: MessageCircle,
      title: "Chat on WhatsApp",
    },
    {
      href: "https://maps.google.com/?q=Mahayogi+Gorakhnath+University",
      icon: MapPin,
      title: "Find Us on Maps",
    },
  ];

  return (
    <div className="fixed bottom-4 z-50 w-full flex justify-center md:bottom-6 md:right-4 md:w-auto">
      <div className="flex md:flex-col items-center gap-2 bg-background backdrop-blur-md rounded-full px-2 py-2 border border-white/10 shadow-md shadow-black/20">
        {buttons.map(({ href, icon: Icon, title }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-background text-orange-400 p-2 md:p-[6px] rounded-full shadow shadow-black/30 hover:bg-gray-900 transition-all duration-200 hover:scale-105"
          >
            <Icon className="w-[20px] h-[20px] md:w-[16px] md:h-[16px]" />
            {/* Custom Tooltip */}
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {title}
            </span>
          </a>
        ))}

        {/* Custom Button to Open Sienna */}
        <button
          onClick={openSiennaMenu}
          className="group relative bg-background text-orange-400 p-2 md:p-[6px] rounded-full shadow shadow-black/30 hover:bg-gray-900 transition-all duration-200 hover:scale-105"
        >
          <HeartHandshake className="w-[20px] h-[20px] md:w-[16px] md:h-[16px]" />
          {/* Custom Tooltip */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Accessibility menu
          </span>
        </button>
      </div>
    </div>
  );
}

// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Phone,
//   MapPin,
//   Youtube,
//   MessageCircle,
//   HeartHandshake,
// } from "lucide-react";
// import openSiennaMenu from "@/utils/sienna";

// export default function FloatingButtons() {
//   return (
//     <div className="fixed bottom-4 z-50 w-full flex justify-center md:bottom-6 md:right-4 md:w-auto">
//       <div className="flex md:flex-col items-center gap-2 bg-background backdrop-blur-md rounded-full px-2 py-2 border border-white/10 shadow-md shadow-black/20">
//         {[
//           {
//             href: "https://www.facebook.com/mgugfacebookpage/",
//             icon: Facebook,
//             title: "Facebook",
//           },
//           {
//             href: "https://x.com/MGUGOfficial",
//             icon: Twitter,
//             title: "Twitter (X)",
//           },
//           {
//             href: "https://www.instagram.com/mgugofficial/",
//             icon: Instagram,
//             title: "Instagram",
//           },
//           {
//             href: "https://www.youtube.com/channel/UC_RiXHng3aH9Qr20ob-lkDQ",
//             icon: Youtube,
//             title: "YouTube",
//           },
//           {
//             href: "tel:+919415266014",
//             icon: Phone,
//             title: "Call Us",
//           },
//           {
//             href: "https://wa.me/919794299451",
//             icon: MessageCircle,
//             title: "Chat on WhatsApp",
//           },
//           {
//             href: "https://maps.google.com/?q=Mahayogi+Gorakhnath+University",
//             icon: MapPin,
//             title: "Find Us on Maps",
//           },
//         ].map(({ href, icon: Icon, title }, i) => (
//           <a
//             key={i}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             title={title}
//             className="bg-background text-orange-400 p-2 md:p-[6px] rounded-full shadow shadow-black/30 hover:bg-gray-900 transition-all duration-200 hover:scale-105"
//           >
//             <Icon className="w-[20px] h-[20px] md:w-[16px] md:h-[16px]" />
//           </a>
//         ))}

//         {/* Custom Button to Open Sienna */}
//         <button
//           onClick={openSiennaMenu}
//           title="Accessibility menu"
//           className="bg-background text-orange-400 p-2 md:p-[6px] rounded-full shadow shadow-black/30 hover:bg-gray-900 transition-all duration-200 hover:scale-105"
//         >
//           <HeartHandshake className="w-[20px] h-[20px] md:w-[16px] md:h-[16px]" />
//         </button>
//       </div>
//     </div>
//   );
// }
