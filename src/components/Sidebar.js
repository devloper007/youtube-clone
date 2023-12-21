import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuToggle = useSelector(store => store.appSlice.menuToggle);
  return (
    <div className="p-2 col-span-2 border-e mr-2">
   {
    menuToggle ?
<ul>
    <li>
<Link className="flex flex-row items-center hover:bg-blue-200 cursor-pointer rounded-md m-1 px-3 py-2 my-2 gap-4" to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>Home</Link>
</li>
<li className="flex flex-row items-center hover:bg-blue-200 cursor-pointer rounded-md m-1 px-3 py-2 my-2 gap-4"><img className='w-6' src="./images/youtube-shorts-logo.png" alt="shorts-logo"/>Shorts</li>
<li className="flex flex-row items-center hover:bg-blue-200 cursor-pointer rounded-md m-1 px-3 py-2 my-2 gap-4"><img className='w-6' src="./images/youtube-subscriptions-logo.png" alt="subscription-logo"/>Subscriptions</li>
<li><hr></hr></li>
<li className="flex flex-row items-center hover:bg-blue-200 cursor-pointer rounded-md m-1 px-3 py-2 my-2 gap-4"><img className="w-6 items-center" src="./images/youtube-library-logo.png" alt="library-logo"/>Library</li>
<li className="flex flex-row items-center hover:bg-blue-200 cursor-pointer rounded-md m-1 px-3 py-2 my-2 gap-4"><img className="w-6 items-center" src="./images/youtube-history-logo.png" alt="library-logo"/>History</li>
<li className="flex flex-row items-center hover:bg-blue-200 cursor-pointer rounded-md m-1 px-3 py-2 my-2 gap-4"><img className="w-6 items-center" src="./images/youtube-history-logo.png" alt="library-logo"/>Watch Later</li>
    </ul>
:
    <ul>
    <li>
<Link className="flex flex-col items-center m-1 my-2" to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>Home</Link>
</li>
    <li className="flex flex-col items-center m-1 my-2"><img className='w-6' src="./images/youtube-shorts-logo.png" alt="shorts-logo"/>Shorts</li>
    <li className="flex flex-col items-center m-1 my-2"><img className='w-6' src="./images/youtube-subscriptions-logo.png" alt="subscription-logo"/>Subscriptions</li>
    <li className="flex flex-col items-center m-1 my-2"><img className="w-6 items-center" src="./images/youtube-library-logo.png" alt="library-logo"/>Library</li>
</ul>
   } 
   </div>
  )
}

export default Sidebar;