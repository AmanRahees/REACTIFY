import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white p-5 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Reactify. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
