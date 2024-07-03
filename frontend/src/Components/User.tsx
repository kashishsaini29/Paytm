import React from 'react'
import { Button } from './Button';

export const User = ({users,setUsers}:any) => {
  console.log("->>",users);
  return (
    <div className='p-6 flex flex-col gap-3' >
       <div className='font-bold'>Users</div>
       <input type='text' className='border border-gray-300 px-2 py-1' placeholder='Search ' />
      <div>
        {users.map((user:any) =>( 
          <div className='px-7 py-3 mb-4 flex justify-between items-center  shadow-md shadow-slate-200'>

          <div className='flex gap-6 items-center'>   
              <div className='flex border bg-gray-200 text-md items-center justify-center h-8 w-8 rounded-full'>
                {user.slice(0,1)}
              </div>
              <div className='flex text-lg'>
                 {user}
              </div>
          </div>
          <div className='flex'>
            <Button lable={"Send Money"}/>
          </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}
