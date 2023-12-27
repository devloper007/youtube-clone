import React, { useState } from 'react';
import CommentList from './CommentList';

const Comment = ({commentData}) => {
    const [showReply,setShowReply] = useState(false);
    const {id, name, comment, replies} = commentData;
  return (
    <div className='flex gap-2 border-l-2 border-gray-500 bg-gray-200 rounded-md my-1 p-2'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 bg-teal-500 rounded-full p-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <div className='flex flex-col gap-1'>
            <p className='font-bold'>{name}</p>
            <p className='text-sm'>{comment}</p>
            <p className='font-semibold text-blue-600 text-sm hover:text-blue-800 cursor-pointer' onClick={() => setShowReply(!showReply)}>{showReply ?"Hide Replies": "Show Replies"}</p>
            {showReply && <div className='ml-2 mt-1'>
                <CommentList data={replies}/>
            </div>}
        </div>
    </div>
  )
}

export default Comment