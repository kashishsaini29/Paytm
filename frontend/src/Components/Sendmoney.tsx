import React from 'react'
import Heading from './Heading'

export const Sendmoney = ({user}:any) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <div className='flex flex-col border border-gray-300 rounded-md shadow-md shadow-gray-300 p-7'>
      <div className='px-32 pb-5' >
      <Heading lable={"Send Money"}/>
      </div>
      <div className='flex gap-4 items-center ' >
        <div className='h-10 w-10 bg-orange-200 text-orange-800 flex justify-center items-center rounded-full tex-md'>
            {user.name.slice(0,1)}
        </div>
        <div className='text-2xl  font-semibold'>
         {user.name}
        </div>
      </div>
      <div>
        <input type='text' placeholder='Enter amount' className='p-2 my-4 border border-slate-200 rounded-md w-full'/>
      </div>
      <div className='flex justify-center'>
        <button className='w-full bg-green-500 text-white font-semibold py-2 text-lg rounded-2xl'>Pay</button>
      </div>
    </div>
  </div>
  )
}
