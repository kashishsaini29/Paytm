import React, { useState } from 'react'
import Heading from './Heading'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { BACKEND_URL } from '../env';

export const Sendmoney = () => {
  const [searchParams] =useSearchParams();
  const to:any= searchParams.get("id");
  const name:any= searchParams.get("name");
  const lastname:any= searchParams.get("lastname");
  
  const [pay,setPay]= useState();

  const sendMoney =async()=>{
    try{
      const token = localStorage.getItem("token");
      const headers={
        "Authorization":`Bearer ${token}`
      }
      const body = {
        to:to,
        amount:pay
      }
      if(token){
        axios.post(`${BACKEND_URL}account/transfer`,body,{headers})
             .then((response:any)=>{
                if(response.data.status ==="success"){
                  alert("transfer success")
                }
             })
      }
    }catch(err){
      console.log("Error sending money",err);
      throw err;
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <div className='flex flex-col border border-gray-300 rounded-md shadow-md shadow-gray-300 p-7'>
      <div className='px-32 pb-5' >
      <Heading lable={"Send Money"}/>
      </div>
      <div className='flex gap-4 items-center ' >
        <div className='h-10 w-10 bg-orange-200 text-orange-800 flex justify-center items-center rounded-full tex-md'>
            {name.slice(0,1)}
        </div>
        <div className='text-2xl  font-semibold'>
         {name+" "+lastname}
        </div>
      </div>
      <div>
        <input onChange={(e:any)=>setPay(e.target.value)} type='text' placeholder='Enter amount' className='p-2 my-4 border border-slate-200 rounded-md w-full'/>
      </div>
      <div className='flex justify-center'>
        <button  onClick={()=> sendMoney()} className='w-full bg-green-500 text-white font-semibold py-2 text-lg rounded-2xl'>Pay</button>
      </div>
    </div>
  </div>
  )
}
