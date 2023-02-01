import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/constants";
import { useApiContext } from "../hooks/useApiContext";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } = useApiContext();
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:black w-[240px] overflow-y-auto py-4 h-[calc(100%-56px)] bg-black absolute md:fixed z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex flex-col h-full px-5">
        <div>
          {categories &&
            categories.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <LeftNavMenuItem
                    text={item.type === "home" ? "Home" : item.name}
                    icon={item.icon}
                    action={() => {
                      clickHandler(item.name, item.type);
                      navigate("/");
                    }}
                    className={`${
                      selectCategories === item.name ? "bg-white/[0.15]" : ""
                    } `}
                  />
                  {item.divider && <hr className="my-5 border-white/[0.2]" />}
                </React.Fragment>
              );
            })}
        </div>
        {/* <hr className="my-5 border-white/[0.2]" /> */}
        <span className="text-white/[0.5] text-[12px] px-3 pb-1 mt-auto">
          © {currentYear} Live Sport Video
        </span>
      </div>
    </div>
  );
};

export default LeftNav;
