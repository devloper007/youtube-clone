import React from "react";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParam] = useSearchParams();
  return (
    <div className="col-span-11 py-1 rounded-lg">
      <iframe
      className="rounded-lg"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+ searchParam.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
