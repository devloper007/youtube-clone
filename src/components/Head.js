import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToggleMenu } from '../utils/appSlice';

const Head = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const dispatch = useDispatch();
  const handleMenuClick = () =>{
     setMenuClicked(!menuClicked);
    console.log('menu status',menuClicked);
  }
  useEffect(() =>{
  dispatch(addToggleMenu(menuClicked));
},[menuClicked, dispatch])
  return (
  <div className='grid grid-flow-col p-1 items-center shadow-md'>
       <div className='flex items-center col-span-1'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer p-2 w-10 h-10" onClick={()=>handleMenuClick()}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<img className='h-10 ml-2 p-1' src="./images/original-youTube-Logo.png" alt="youtube-logo" /><sup>©</sup>
   </div>
   <div className='flex w-1/2 col-span-10 p-4 self-center'>
    <input className='w-full border border-black rounded-l-full' type="text"/>
    <button className='border border-black rounded-r-full border-s-0 px-4 bg-slate-100'>🔍</button>
   </div>
   <div>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-teal-500 rounded-full p-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
   </div>
  </div>
  )
}

export default Head