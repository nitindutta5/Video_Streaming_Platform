import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-2 py-4 mb-2 shadow-lg flex-wrap">
      <div className="flex items-center">
        <img
          src="./assets/menu-burger.png"
          alt="menu"
          className="h-5"
          onClick={() => dispatch(toggleMenu())}
        />
        <a  href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="ytlogo"
          className="h-8 ml-4"
        />
        </a>
      </div>
      <div className="flex justify-stretch w-1/4">
        <input
          type="text"
          className="border rounded-l-full w-full px-2 focus:outline-none"
        />
        <button className="bg-gray-300 px-3 py-1 rounded-r-full">
          <img src="./assets/search.png" className="h-3 m-2" alt="search" />
        </button>
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png"
          alt="User Icon - Member Icon Png, Transparent Png@kindpng.com"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
