import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  return (
    <div className={isMenuOpen ? ' left-60 relative w-[calc(100%-280px)] ' : ' w-fit p-2 '}>
      <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${params.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    <CommentsContainer />
    </div>
  );
};

export default Watch;
