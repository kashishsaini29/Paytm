import React from 'react'

const InputBox = ({placeholder, lable,onChange}:any) => {
  return (
    <div className='w-full  mb-2 '>
      <div className='font-semibold text-md mb-1 '>
        {lable}
      </div>
      <input onChange={onChange} type='text' placeholder={placeholder}  className='p-1  w-full text-slate-400 border border-slate-400 rounded-md'/>
    </div>
  )
}

export default InputBox