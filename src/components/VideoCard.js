import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(thumbnails);

  return (
    <Link to={`watch?v=${info.id}`}>
      <div className="p-2 m-2 w-[280px]">
        <img src={thumbnails?.medium?.url} className="rounded-lg" />
        <h2 className="font-bold text-base py-1 max-h-16 text-ellipsis line-clamp-2">
          {title}
        </h2>
        <p className="text-sm">{channelTitle}</p>
        <p className="text-xs">{statistics?.viewCount} views</p>
      </div>
    </Link>
  );
};

export default VideoCard;
