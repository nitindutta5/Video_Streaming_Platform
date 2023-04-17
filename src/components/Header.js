import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { AUTO_SUGGEST_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const cachedData = useSelector((store) => store?.search);


  const autoSuggest = async () => {
    const res = await fetch(`${AUTO_SUGGEST_API}${search}`);
    const data = await res.json();
    dispatch(cacheResults({ [search]: data?.[1] }));
    setSuggestion(data?.[1])
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (cachedData[search]) {
        setSuggestion(cachedData[search])
      }
      else {
        autoSuggest()
      }
    }, 500)
    return () => {
      clearTimeout(timer);
    }
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
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="ytlogo"
            className="h-8 ml-4"
          />
        </a>
      </div>
      <div className="w-1/4 relative">
        <div className="flex justify-stretch ">
          <input
            type="text"
            className="border rounded-l-full w-full px-2 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            placeholder="Search"
          />
          <button className="bg-gray-300 px-3 py-1 rounded-r-full">
            <img src="./assets/search.png" className="h-3 m-2" alt="search" />
          </button>
        </div>
        {/* Suggestion List */}
        <div className="absolute z-10 bg-white p-1 w-full">
          {
            showSuggestion && suggestion?.map(item => (
              <div className="cursor-pointer flex" onClick={() => setSearch(item)}>  <img src="./assets/search.png" className="h-3 m-2" alt="search" />{item}</div>
            ))
          }
        </div>
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
