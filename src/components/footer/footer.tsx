import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer-wrap" className="bg-gray-500 dark:bg-gray-800 border-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <footer
          id="footer"
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between"
        >
          {/* Logo Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <div className="flex flex-col items-start space-y-4">
              <Link
                href="/#"
                aria-label="Logo"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src="/images/footer-logo.svg"
                  alt="Logo"
                  width={141}
                  height={32}
                  className="w-auto h-auto"
                />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src="/images/part-media.svg"
                  alt="Media 77"
                  width={115}
                  height={30}
                  className="w-auto h-auto"
                />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-3/4">
            <div className="flex flex-col space-y-6">
              <ul className="flex flex-col sm:flex-row flex-wrap gap-y-4 sm:gap-x-8 text-sm">
                <li>
                  <Link
                    href="mailto:22abdualftah@gmail.com"
                    className="flex items-center hover:text-gray-300 transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full mr-2 group-hover:bg-gray-700 transition-colors duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    22abdualftah@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+966541528076"
                    className="flex items-center hover:text-gray-300 transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full mr-2 group-hover:bg-gray-700 transition-colors duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    +966 54 152 80 76
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.google.com/maps"
                    target="_blank"
                    className="flex items-center hover:text-gray-300 transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full mr-2 group-hover:bg-gray-700 transition-colors duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    نجم الدين الأيوبي الفرعي, Tuwaiq, Riyadh 14936
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
            {/* Copyright Text */}
            <div className="text-sm text-center md:text-left order-2 md:order-1 mt-6">
              <p className="text-gray-300">
                © 2024 Brackets Technology. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-4 gap-6 md:flex md:space-x-6  justify-center">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    title={`Brackets ${social.name}`}
                    target="_blank"
                    className="group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors duration-300">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="w-full h-full object-contain group-hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/abdualftah.alrashid/?hl=en",
    icon: "/images/instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bracketstech",
    icon: "/images/facebook.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/brackets-technology",
    icon: "/images/linkedin.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Brackets_Tech",
    icon: "/images/twitter.svg",
  },
];
