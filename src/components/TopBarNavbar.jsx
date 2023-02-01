import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBarNavbar = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <img
        onClick={() => setOpen(!open)}
        src={icon}
        // src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
        alt="avatars"
        className="h-full w-full object-cover"
      />
      {open && children}
    </li>
  );
};

export default TopBarNavbar;
