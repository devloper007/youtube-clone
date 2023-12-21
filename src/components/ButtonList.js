import React from 'react'

const ButtonList = () => {
  const buttonsList = ['songs','movies','movies','classic songs','education','entertainment','games','aarti','comedy','fight','reciepe','coding','reciepe','farming','factory','games','aarti','comedy','fight','reciepe','coding','reciepe','farming','factory']
  return (
    <div className='my-3 overflow-hidden w-full'> 
      <ul className='flex flex-row gap-4 overflow-x-auto focus:scroll-auto no-scrollbar transition duration-150'>
        {
       buttonsList.map((e,index) =>(
         <li key={index} className='flex-shrink-0 bg-gray-200 hover:bg-gray-300 border cursor-pointer rounded-md px-2 py-1 h-10'>{e}</li>
       ))
      }
       
      </ul>
    </div>
  )
}

export default ButtonList;
