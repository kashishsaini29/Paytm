import React from 'react'
import { Link } from 'react-router-dom'
import Singin from '../Pages/Singin'

export const BottomWarning = ({lable,buttonText,to}:any) => {
  return (
    <div className='text-slate-700 text-sm flex justify-center'>
      {lable}
      <Link to={to} className='underline cursor-pointer'>{buttonText}</Link>
    </div>
  )
}
