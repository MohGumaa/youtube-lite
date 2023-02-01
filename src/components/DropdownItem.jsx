import React from "react";
import { Link } from "react-router-dom";

const DropdownItem = ({
  goToMenu,
  leftIcon,
  rightIcon,
  children,
  HandleMenuChange,
  linkLocation = "#",
}) => {
  return (
    <Link
      to={linkLocation}
      className="text-white text-sm cursor-pointer h-10 flex items-center px-4 hover:bg-white/[0.15] menu-item"
      onClick={() => goToMenu && HandleMenuChange(goToMenu)}
    >
      <span className="icon-button text-xl mr-3">{leftIcon}</span>
      {children}
      <span className="icon-right text-sm ml-auto">{rightIcon}</span>
    </Link>
  );
};

export default DropdownItem;
