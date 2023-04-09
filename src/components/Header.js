import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { AUTO_SUGGEST_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const autoSuggest = async (val) => {
    const res = await fetch(`${AUTO_SUGGEST_API}${search}`);
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    autoSuggest(search)
  }, [search])
  return (
    <div className="flex justify-between px-4 py-4 shadow-lg flex-wrap fixed w-full bg-white z-40">
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
