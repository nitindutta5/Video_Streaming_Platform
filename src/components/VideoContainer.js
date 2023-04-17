import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    try {
      const result = await fetch(YOUTUBE_API);
      const data = await result.json();
      setVideos(data?.items);
      setLoading(false)
    }
    catch (e) {
      setLoading(false)
    }

  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="flex flex-wrap justify-evenly">
      {
        loading ?
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </> :
          videos?.map((item) => (
            <VideoCard info={item} key={item.id} />
          ))
      }

    </div>
  );
};

export default VideoContainer;
