import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { megaMenus, menuItems, type MegaMenus } from "@/utils/data";
import { MegaMenu } from "@/components/megaMenu";
import { MobileMenuSection } from "@/components/mobileMenuSection";
import openSiennaMenu from "@/utils/sienna";
import { FaUniversalAccess } from "react-icons/fa";

export default function Navbar() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMegaMenuToggle = (menu: string) => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const toggleMobileSection = (sectionLabel: string) => {
    setMobileExpandedSections((prev) => ({
      ...prev,
      [sectionLabel]: !prev[sectionLabel],
    }));
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-blue-950 border-b border-gray-700/50"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="flex items-center space-x-3"
              aria-label="MGUG Home"
            >
              <img
                loading="eager"
                src="/logo.png"
                alt="Mahayogi Gorakhnath University Gorakhpur Logo"
                className="w-10 h-10 rounded-xl"
              />
              <div className="text-2xl bg-orange-400 bg-clip-text text-transparent font-bold">
                MGUG
              </div>
            </a>
          </div>

          {/* Links - Desktop */}
          <div
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
          >
            {menuItems.map((item) => {
              const hasMegaMenu = item in megaMenus;
              const isMegaMenuOpen = activeMegaMenu === item;

              if (!hasMegaMenu) {
                return (
                  <a
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Research"
                        ? "https://mgug.ac.in/research/re_facility.php"
                        : `#${item.toLowerCase()}`
                    }
                    className=" font-medium text-white hover:text-orange-400 transition-all duration-200 hover:scale-105"
                    aria-label={`Navigate to ${item} page`}
                  >
                    {item}
                  </a>
                );
              }

              return (
                <div key={item} className="relative">
                  <button
                    onClick={() => handleMegaMenuToggle(item)}
                    className="flex items-center space-x-1 transition-colors font-medium text-white hover:text-orange-400"
                    aria-expanded={isMegaMenuOpen}
                    aria-controls={`mega-menu-${item.toLowerCase()}`}
                    aria-label={`Toggle ${item} mega menu`}
                  >
                    <span>{item}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <MegaMenu
                    items={megaMenus[item as keyof MegaMenus]}
                    isOpen={isMegaMenuOpen}
                    onClose={closeMegaMenu}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Apply + Menu */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <button
              onClick={openSiennaMenu}
              className="p-1 md:p-[6px] lg:p-[8px] xl:p-[10px] font-2xl transition-all duration-200 hover:scale-105 hover:text-orange-400"
            >
              <FaUniversalAccess size={28} />
            </button>
            {/* Apply (Mobile) */}
            <a href="https://erp.mgug.ac.in/login.php">
              <button
                className="px-2 py-1 text-sm bg-orange-500 hover:bg-orange-700 transform transition duration-300 hover:scale-105 rounded-md font-medium lg:hidden text-white"
                aria-label="Login to MGUG ERP"
              >
                Login
              </button>
            </a>

            {/* Mobile Sheet Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden text-white hover:text-orange-400"
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="w-6 h-6" aria-hidden="true" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-64 sm:w-80 bg-blue-950 text-white p-6 border-0"
                id="mobile-menu"
                aria-label="Mobile navigation menu"
              >
                <div className="flex flex-col h-full justify-between pb-safe">
                  <nav
                    className="mt-6 space-y-4 text-base font-medium max-h-[calc(100vh-12rem)] overflow-y-auto"
                    aria-label="Mobile menu links"
                  >
                    {menuItems.map((item) => {
                      const hasMegaMenu = item in megaMenus;

                      if (!hasMegaMenu) {
                        return (
                          <a
                            key={item}
                            href={
                              item === "Home" ? "#" : `#${item.toLowerCase()}`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-white hover:text-orange-400 transition-colors tracking-wide py-2"
                            aria-label={`Navigate to ${item} page`}
                          >
                            {item}
                          </a>
                        );
                      }

                      return (
                        <div
                          key={item}
                          className="border-t border-white/20 pt-4 first:border-0 first:pt-0"
                          role="group"
                          aria-label={`${item} menu section`}
                        >
                          <h3 className="text-orange-400 font-semibold text-lg mb-3">
                            {item}
                          </h3>
                          <div className="space-y-1">
                            {megaMenus[item as keyof MegaMenus].map(
                              (section, index) => (
                                <MobileMenuSection
                                  key={index}
                                  section={section}
                                  isOpen={
                                    mobileExpandedSections[
                                      `${item}-${section.label}`
                                    ] || false
                                  }
                                  onToggle={() =>
                                    toggleMobileSection(
                                      `${item}-${section.label}`
                                    )
                                  }
                                />
                              )
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </nav>

                  {/* Footer */}
                  <div className="mt-16 border-t border-white/20 pt-6 text-sm text-gray-400 space-y-1">
                    <p className="font-medium text-white/80">
                      Explore MGUG deeply
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="hover:text-orange-400"
                        aria-label="View Privacy policy"
                      >
                        Privacy
                      </a>
                      <a
                        href="#"
                        className="hover:text-orange-400"
                        aria-label="View Terms of service"
                      >
                        Terms
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Apply (Desktop) */}
            <a href="https://erp.mgug.ac.in/">
              <button
                className="hidden lg:inline px-6 py-2 bg-orange-500 hover:bg-orange-700 transform transition duration-300 hover:scale-105 rounded-lg text-sm font-medium text-white"
                aria-label="Login to MGUG ERP"
              >
                Login
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay to close mega menu when clicking outside */}
      {activeMegaMenu && (
        <div
          className="fixed inset-0 z-30 bg-black/10"
          onClick={closeMegaMenu}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
    </nav>
  );
}
