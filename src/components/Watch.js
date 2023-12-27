import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Simmer from "./Simmer";
import HorizontalVideoCard from "./HorizontalVideoCard";
import { addVideoInfo } from "../utils/appSlice"; 
import LiveComments from "./LiveComments";

const Watch = () => {
  const [searchParam] = useSearchParams();
  const {videoInfo} = useSelector(store => store.appSlice);

  return (
    <div className="col-span-10 my-2 pr-2">
      <div className="grid grid-cols-10 grid-rows-2 gap-4">
      <div className="col-span-6 rounded-lg">
      <iframe
      className="rounded-lg w-full"
        height="450"
        src={"https://www.youtube.com/embed/"+ searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    <div className="mt-6"><CommentContainer /></div>
    </div>
   <div className="flex flex-col gap-4 col-span-4">
   <div className='flex flex-col gap-2 w-full border border-slate-300 shadow-md rounded-md h-fit p-2 mr-2'>
    <LiveComments />
    </div>
    <div className='flex flex-col gap-2 w-full'>
      {
        !videoInfo ? <Simmer /> :
      videoInfo.map(video =>(
        <Link to={"/watch?v="+ video.id} key={video.id}><HorizontalVideoCard key={video.id} info={video}/></Link>
      ))
      }
    </div>
   </div>
      </div>
    </div>
  );
};

export default Watch;
