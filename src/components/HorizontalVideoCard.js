import React from 'react'

const HorizntalVideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;
    const { viewCount } = statistics;
    return (
      <>
        <div className="flex gap-2 rounded-md p-1 h-full">
          <img
            className="rounded-lg"
            src={thumbnails?.medium?.url}
            alt="thumbnail"
          />
          <div>
          <ul>
            <li className="font-bold text-sm">{title}</li>
            <li className="font-semibold text-gray-600 text-sm">{channelTitle} </li>
            <li className="font-semibold text-gray-600 text-sm">{viewCount} views</li>
          </ul>
          </div>
        </div>
      </>
    );
  };

export default HorizntalVideoCard