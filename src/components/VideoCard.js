import React from "react";

const VideoCard = ({ info }) => {
  // console.log("info", info);
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <>
      <div className="rounded-md w-60 p-1 h-full">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <ul>
          <li className="font-bold">{title}</li>
          <li className="font-semibold text-gray-600 text-sm">{channelTitle} </li>
          <li className="font-semibold text-gray-600 text-sm">{viewCount} views</li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
