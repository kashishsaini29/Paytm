import React from 'react'

export const Appbar = ({appName, user}:any) => {
  return (
    <div className='shadow-md flex justify-between p-3  items-center'>
        <div className='font-bold text-xl'>
           {appName}
        </div>

        <div className='flex gap-2 mr-3 items-center'>
        <div>
         {user}
        </div>
        <div className='border rounded-full text-black bg-gray-300 h-8 w-8 text-md font-semibold p-2 flex justify-center items-center'>
           {user.slice(0,1)}
        </div>
        </div>
    </div>
  )
}
