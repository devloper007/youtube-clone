import React from 'react'

const ButtonList = () => {
  const buttonsList = ['songs','movies','movies','classic songs','education','entertainment','games','aarti','comedy','fight','reciepe','coding','reciepe','farming','factory']
  return (
    <div className='my-3'> 
      <ul className='flex flex-row gap-4'>
        {
       buttonsList.map((e,index) =>(
         <li key={index} className='bg-gray-200 hover:bg-gray-300 border cursor-pointer rounded-md px-2 py-1'>{e}</li>
       ))
      }
       
      </ul>
    </div>
  )
}

export default ButtonList;
