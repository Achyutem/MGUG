import { FaWhatsapp } from "react-icons/fa";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";
import { impLinks } from "@/utils/data";
import { privacy } from "@/utils/data";

export default function Footer() {
  return (
    <div>
      <footer className="relative z-20 py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-16 gap-12">
            {/* Left Section: Logo, Name, and Social Links */}
            <div className="flex-1 min-w-[300px] max-w-[400px]">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="MGUG Logo"
                  className="w-12 h-12 rounded-xl"
                />
                <div>
                  <div className="text-lg font-bold text-orange-400">
                    Mahayogi Gorakhnath University Gorakhpur
                  </div>
                  <div className="text-sm text-white">Redefining Education</div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4 text-2xl">
                  <a
                    href="https://twitter.com/MGUGOfficial"
                    aria-label="Twitter"
                    className="hover:text-orange-400 transition-transform transform hover:scale-110"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/mgugfacebookpage/"
                    aria-label="Facebook"
                    className="hover:text-orange-400 transition-transform transform hover:scale-110"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/mgugofficial/"
                    aria-label="Instagram"
                    className="hover:text-orange-400 transition-transform transform hover:scale-110"
                  >
                    <FiInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC_RiXHng3aH9Qr20ob-lkDQ"
                    aria-label="YouTube"
                    className="hover:text-orange-400 transition-transform transform hover:scale-110"
                  >
                    <FiYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section: Contact, Important Links, Policy & Reports */}
            <div className="flex flex-col lg:flex-row lg:gap-16 gap-12 flex-1">
              {/* Contact */}
              <div className="min-w-[250px] max-w-[300px]">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">
                  Contact
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4" />
                    <a
                      href="tel:+919415266014"
                      className="hover:text-orange-400 hover:underline"
                    >
                      +91-9415266014
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4" />
                    <a
                      href="tel:+919935904499"
                      className="hover:text-orange-400 hover:underline"
                    >
                      +91-9935904499
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4" />
                    <a
                      href="https://wa.me/919794299451"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 hover:underline"
                    >
                      +91-9794299451
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiGlobe className="w-4 h-4" />
                    <a
                      href="mailto:mguniversitygkp@mgug.ac.in"
                      className="hover:text-orange-400 hover:underline"
                    >
                      mguniversitygkp@mgug.ac.in
                    </a>
                  </li>
                </ul>
                <p className="text-sm text-gray-400 mt-4">
                  Arogyadham, Balapar Road, Sonbarsa,
                  <br />
                  Gorakhpur-273007, Uttar Pradesh
                </p>
              </div>

              {/* Important Links */}
              <div className="min-w-[250px] max-w-[300px]">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">
                  Important Links
                </h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  {impLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="hover:text-orange-400 hover:underline"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy & Reports */}
              <div className="min-w-[200px] max-w-[250px]">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">
                  Policy & Reports
                </h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  {privacy.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="hover:text-orange-400 hover:underline"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Mahayogi Gorakhnath University Gorakhpur. All rights
              reserved.
            </p>
            <p className="text-orange-400 text-sm">स्वस्ति पन्थामनुचरेम्</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
