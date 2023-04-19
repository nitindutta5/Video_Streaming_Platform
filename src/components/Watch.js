import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  return (
    <div  className={isMenuOpen ? 'p-2 left-60 relative w-[calc(100%-280px)] ' : 'p-2 w-full '}>
      <div className="flex">
      <iframe
        width="800"
        height="500"
        src={`https://www.youtube.com/embed/${params.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full"
      ></iframe>
  <LiveChat/>
      </div>
    <CommentsContainer />
    </div>
  );
};

export default Watch;
