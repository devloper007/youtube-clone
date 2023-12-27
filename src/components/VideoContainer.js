import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import Simmer from './Simmer';
import { Link } from "react-router-dom";
import { addVideoInfo } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const {videoInfo} = useSelector(store => store.appSlice);
  useEffect(() =>{
    if(videoInfo && videoInfo.length > 0){
      setVideos(videoInfo);
    }else{
      getVideos();
    }
  }, [videos]);
  const getVideos = async() =>{
    // console.log('env', process.env.REACT_APP_YOUTUBE_VIDEOS_API);
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log('items',json.items);
    setVideos(json.items);
    console.log('videos',videos);
    dispatch(addVideoInfo(json.items));
  }
  return  (
    <>
    <div className='flex flex-wrap justify-items-stretch gap-2'>
      {
        !videos ? <Simmer /> :
      videos.map(video =>(
        <Link to={"/watch?v="+ video.id} key={video.id}><VideoCard key={video.id} info={video}/></Link>
      ))
      }
    </div>
    </>
  )
}

export default VideoContainer;

