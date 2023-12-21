import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
// import VideoCard from "./VideoCard";

const Watch = () => {
  const [searchParam] = useSearchParams();
  return (
    <div className="col-span-10 my-2">
      <div className="grid grid-cols-10 gap-4">
      <div className="col-span-7 rounded-lg">
      <iframe
      className="rounded-lg w-full"
        height="450"
        src={"https://www.youtube.com/embed/"+ searchParam.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div className="col-span-3 border border-gray-500 h-screen">Video Card</div>
    <div className="col-span-7 border border-red-400"><CommentContainer /></div>
      </div>
    </div>
  );
};

export default Watch;
