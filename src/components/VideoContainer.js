import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const result = await fetch(YOUTUBE_API);
    const data = await result.json();
    setVideos(data?.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {videos?.map((item) => (
        <VideoCard info={item} key={item.id}/>
      ))}
    </div>
  );
};

export default VideoContainer;
