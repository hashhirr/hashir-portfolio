import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex flex-col items-center gap-4">
      <h4 className="text-[16px] font-semibold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Let’s connect</h4>
      <div className="flex justify-center gap-6 flex-wrap">
        <span
          title="Email icon (inactive)"
          aria-label="Email icon inactive"
        >
          <FaEnvelope size={24} />
        </span>
        <span
          title="Phone icon (inactive)"
          aria-label="Phone icon inactive"
        >
          <FaPhone size={24} />
        </span>
        <a
          href="https://github.com/hashhirr"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/hashirr-qureshii/" 
          target="_blank" 
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
