import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20 ml-3 mr-3">
      <img src={assets.logo} alt="Logo" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright &copy;
        <a
          href="https://nish.techifive.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          Nish.techifive.com
        </a>
        | All rights reserved.
      </p>
      <div className="flex gap-2.5">
        <a
          href="https://github.com/Git-Nish14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.github_icon} width={35} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/nishpatel14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.linkedin_icon} width={35} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/nish_p14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.instagram_icon} width={35} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
