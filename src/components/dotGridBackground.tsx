// export default function BlueDotGridBackground() {
//   return (
//     <div className="fixed inset-0 z-0">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-900/30" />
//       <div
//         className="absolute inset-0 opacity-25"
//         style={{
//           backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`, // Tailwind blue-500
//           backgroundSize: "32px 32px",
//           backgroundPosition: "0 0, 16px 16px",
//         }}
//       />
//       <div
//         className="absolute inset-0 opacity-15"
//         style={{
//           backgroundImage: `radial-gradient(circle, #60a5fa 0.5px, transparent 0.5px)`, // Tailwind blue-400
//           backgroundSize: "48px 48px",
//           backgroundPosition: "24px 24px",
//         }}
//       />
//     </div>
//   );
// }

//! block grid background
export default function BlockGridBackground() {
  const gridSize = 20;
  const cells = Array.from({ length: gridSize * gridSize });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
        {cells.map((_, i) => (
          <div
            key={i}
            className="border border-white/3 bg-white/0 animate-gridpulse"
            style={{ animationDelay: `${Math.random() * 10}s` }}
          />
        ))}
      </div>
      <style>{`
        @keyframes gridpulse {
          0%, 100% { background-color: transparent; opacity: 0.2; }
          50% { background-color: rgba(255, 255, 255, 0.05); opacity: 0.4; }
        }
        .animate-gridpulse {
          animation: gridpulse 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

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

//! glowing shaped grid
// export default function GlowingBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />
//       <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05))] bg-[length:50px_50px] animate-diagonalglow" />
//       <style>{`
//         @keyframes diagonalglow {
//           0% { background-position: 0 0; }
//           100% { background-position: 100px 100px; }
//         }
//         .animate-diagonalglow {
//           animation: diagonalglow 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

//! light sweep background
// export default function LightSweepBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sweep" />
//       </div>
//       <style>{`
//         @keyframes sweep {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-sweep {
//           animation: sweep 6s ease-in-out infinite;
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

//! multiple line waves
// export default function WaveLinesBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-black" />

//       {/* Seamlessly scrolling pattern waves */}
//       <div className="absolute inset-0 flex w-[200%] h-full animate-waveScroll opacity-10">
//         {[1, 2].map((_, i) => (
//           <svg
//             key={i}
//             className="w-1/2 h-full"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <pattern
//                 id={`movingWaves-${i}`}
//                 width="200"
//                 height="100"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path
//                   d="M 0 50 Q 50 0 100 50 T 200 50"
//                   stroke="white"
//                   fill="transparent"
//                   strokeWidth="1.5"
//                 />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill={`url(#movingWaves-${i})`} />
//           </svg>
//         ))}
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

//! DOTGRIDBACKGROUND
// export default function DotGridBackground() {
//   return (
//     <div className="fixed inset-0 z-0">
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/20 to-black" />
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
//           backgroundSize: "32px 32px",
//           backgroundPosition: "0 0, 16px 16px",
//         }}
//       />
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `radial-gradient(circle, #fb923c 0.5px, transparent 0.5px)`,
//           backgroundSize: "48px 48px",
//           backgroundPosition: "24px 24px",
//         }}
//       />
//     </div>
//   );
// }
