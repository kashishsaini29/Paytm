import React, { useEffect, useState } from 'react'
import { Button } from './Button';
import axios from 'axios';
import { BACKEND_URL } from '../env';
import { useNavigate } from 'react-router-dom';

export const User = ({users,setUsers}:any) => {

   const [filter,setFilter]= useState("");
   const navigate = useNavigate();
   const handleFilter= async ()=>{
      const token = localStorage.getItem("token");
      if(token){
        const headers={
          "Authorization":`Bearer ${token}`
        }
        const params={
          name:filter
        }
        console.log("Request params:", params);
        try{
          axios.get(`${BACKEND_URL}user/getusers`,{headers,params})
             .then((response:any)=>{
                setUsers(response.data.data)
             })
        }catch(error){
          console.error("Error fetching users:", error);
        }
      }
   }
   const handleNavigate=(user:any)=>{
    navigate("/sendmoney?id=" + user?._id + "&name=" + user?.name + "&lastname=" + user?.lastname)
   }
   useEffect(()=>{
    console.log("User in Users",users); 
   },[users]);
     
     return (
    <div className='p-6 flex flex-col gap-3' >
       <div className='font-bold'>Users</div>
       <div className='w-9 flex items-center'>
       <input onChange={(e:any)=>setFilter(e.target.value)}  type='text' className='border border-gray-300 px-2 py-1' placeholder='Search ' />
       <div className='border border-gray-300 py-1 bg-black text-white font-semibold px-2'
        onClick={handleFilter}
       >Search</div>
       </div>
       
      <div>
        {users.length > 0 ? ( 
        users.map((user:any) =>( 
          <div className='px-7 py-3 mb-4 flex justify-between items-center  shadow-md shadow-slate-200'>

          <div className='flex gap-6 items-center'>   
              <div className='flex border bg-gray-200 text-md items-center justify-center h-8 w-8 rounded-full'>
                {user?.name?.slice(0,1)}
              </div>
              <div className='flex text-lg'>
                 {user?.name + ' ' + user?.lastname}
              </div>
          </div>
          <div className='flex'>
            <Button onClick={()=>handleNavigate(user)} 
            lable={"Send Money"} to={user._id}/>
          </div>
          </div>
        ))
      ):(
       <div className='font-semibold'>No data found</div>
      )}
      </div>
    </div>
  )
}
