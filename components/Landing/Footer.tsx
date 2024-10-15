import React from "react";
import SocialLinks from "../SocialLinks";
const Footer = () => {
  return (
    <footer className="flex0 w-full bg-dark-200 py-4 text-white-900">
      {/* Container for footer content */}
      <div className="custom-responsive-width mx-auto flex flex-col items-center justify-between ">
        {/* Social Links Section */}
        <nav aria-label="Social media links" className="mb-4 md:mb-0">
          <SocialLinks type="social" />
        </nav>

        {/* Additional Footer Information */}
        <div className="text-white-700 text-center text-sm md:text-left">
          <p>© 2024 Adam Gordon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
