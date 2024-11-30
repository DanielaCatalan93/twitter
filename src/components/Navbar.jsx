import React from "react";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="bg-blue-500 p-4 flex justify-center">
          <FaTwitter size={30} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
