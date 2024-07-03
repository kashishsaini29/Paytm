import React from 'react'

const Heading = ({lable}:any) => {
  return (
    <div className='flex justify-center font-bold text-3xl pt-3'  >
      {lable}
    </div>
  )
}

export default Heading