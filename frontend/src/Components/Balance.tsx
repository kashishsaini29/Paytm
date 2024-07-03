import React from 'react'

export const Balance = ({balance}:any) => {
  return (
    <div className='flex gap-2 p-6'>
      <div className='font-bold flex'> Your Balance:</div>
      <div className='flex'>
        { `Rs. ${balance}`}
      </div>
    </div>
  )
}
