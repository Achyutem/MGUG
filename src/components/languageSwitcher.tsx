import { UseLanguage } from "@/context/languageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = UseLanguage();

  return (
    <span
      onClick={toggleLanguage}
      className="cursor-pointer underline text-sm text-white hover:text-orange-400 transition-colors"
      aria-label="Toggle language"
    >
      {language === "english" ? "हिन्दी" : "English"}
    </span>
  );
};

export default LanguageToggle;

// import { UseLanguage } from "@/context/languageContext";

// const LanguageToggle = () => {
//   const { language, toggleLanguage } = UseLanguage();

//   return (
//     <button
//       onClick={toggleLanguage}
//       className="fixed top-4 right-4 px-4 py-2 text-sm bg-orange-500 hover:bg-orange-700 transform transition duration-300 hover:scale-105 rounded-md font-medium text-white z-50"
//       aria-label="Toggle language"
//     >
//       {language === "english" ? "Hindi" : "English"}
//     </button>
//   );
// };

// export default LanguageToggle;
