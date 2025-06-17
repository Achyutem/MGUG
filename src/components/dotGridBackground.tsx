//! line background but soft
// export default function PlaidGlowBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       {/* Base gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />

//       {/* Animated crosshatch grid overlay */}
//       <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] before:bg-[size:40px_40px] before:animate-glowshift" />

//       <style>{`
//         @keyframes glowshift {
//           0% {
//             background-position: 0 0, 0 0;
//           }
//           100% {
//             background-position: 40px 40px, 40px 40px;
//           }
//         }
//         .before\\:animate-glowshift::before {
//           content: '';
//           animation: glowshift 60s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

//! table background
// export default function PulseGridBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />
//       <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
//         {Array.from({ length: 400 }).map((_, i) => (
//           <div
//             key={i}
//             className="border border-white/5 hover:border-white/10 transition duration-500"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

//! moving waves
// export default function WaveBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       {/* Gradient base */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />

//       {/* Scrolling waves */}
//       <div className="absolute inset-0 flex w-[200%] h-full animate-waveScroll">
//         <svg
//           className="w-1/2 h-full"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="white"
//             fillOpacity="0.05"
//             d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
//           />
//         </svg>
//         <svg
//           className="w-1/2 h-full"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="white"
//             fillOpacity="0.05"
//             d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z"
//           />
//         </svg>
//       </div>

//       <style>{`
//         @keyframes waveScroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-waveScroll {
//           animation: waveScroll 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

//! wave background
export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black" />

      {/* Layered animated waves */}
      <div className="absolute inset-0 w-[200%] h-full flex animate-waveScrollSlow">
        <WaveSVG className="w-1/2 h-full opacity-5 fill-white" />
        <WaveSVG className="w-1/2 h-full opacity-5 fill-white" />
      </div>

      <div className="absolute inset-0 w-[200%] h-full flex animate-waveScrollFast">
        <WaveSVG className="w-1/2 h-full opacity-10 fill-blue-300" />
        <WaveSVG className="w-1/2 h-full opacity-10 fill-blue-300" />
      </div>

      {/* Optional blur layer for dreamy glow */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Custom keyframes (inline if not using Tailwind config) */}
      <style>{`
        @keyframes waveScrollSlow {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes waveScrollFast {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-waveScrollSlow {
          animation: waveScrollSlow 60s linear infinite;
        }
        .animate-waveScrollFast {
          animation: waveScrollFast 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Reusable SVG wave component
function WaveSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96V320H0Z" />
    </svg>
  );
}
