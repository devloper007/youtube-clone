import React from 'react'

const LiveCommentCard = ({name, comment}) => {
  return (
    <div className='flex gap-2 items-center bg-slate-100 shadow-md rounded-md h-fit px-2 py-1 m-1'>
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
        <div className='flex items-start gap-2'>
        <p className='font-bold'>{name}</p>
        <p className='break-words overflow-hidden overflow-x-hidden'>{comment}</p>
        </div>
    </div>
  )
}

export default LiveCommentCard