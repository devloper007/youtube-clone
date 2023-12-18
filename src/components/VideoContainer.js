import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import Simmer from './Simmer';
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() =>{
    getVideos();
  }, []);
  const getVideos = async() =>{
    // console.log('env', process.env.REACT_APP_YOUTUBE_VIDEOS_API);
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log('items',json.items);
    setVideos(json.items);
    console.log('videos',videos);
  }
  return  (
    <>
    <div className='flex flex-wrap justify-items-stretch gap-2'>
      {
        videos.length === 0 ? <Simmer /> :
      videos.map(video =>(
        <Link to={"/watch?v="+ video.id}><VideoCard key={video.id} info={video}/></Link>
      ))
      }
    </div>
    </>
  )
}

export default VideoContainer;

