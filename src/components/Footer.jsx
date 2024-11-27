import React from "react";
import { FaDiscord, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 text-black py-4 ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-between">
          {socialLinks.map((socialLink, i) => (
            <a
              href={socialLink.href}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black duration-500 ease-in-out hover:text-white transition-colors "
            >
                {socialLink.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>      </div>
    </footer>
  );
};

export default Footer;
