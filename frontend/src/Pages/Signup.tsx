import React, { useState } from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import { Button } from '../Components/Button'
import { BottomWarning } from '../Components/BottomWarning'
import { BACKEND_URL } from '../env';
import axios from 'axios'
const Signup = () => {
  const [name,setName]= useState("");
  const [lastname,setLastname]= useState("");
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  return (
    <div className='flex justify-center items-center h-screen '>
    <div className='flex flex-col px-8 py-4 border border-slate-100  shadow-slate-400 shadow-2xl'>
      <Heading  lable={"Sign Up"}/>
      <SubHeading lable={"Enter Your Information to create an account"}/>
      <InputBox onChange={(e:any)=>{setName(e.target.value)}} placeholder="Kashish" lable={"First Name"}/>
      <InputBox onChange={(e:any)=>{setLastname(e.target.value)}}  placeholder="Saini" lable={"Last Name"}/>
      <InputBox onChange={(e:any)=>{setUsername(e.target.value)}} placeholder="example@exampl.com" lable={"Email"}/>
      <InputBox onChange={(e:any)=>{setPassword(e.target.value)}} placeholder="enter your password" lable={"Password"}/>
      <Button 
      onClick={async()=>{
        const response:any = await axios.post(`${BACKEND_URL}/user/signup`,{
          name,
          lastname,
          username,
          password
        })
        console.log("response-->>>>>>>",response.data.data);
        localStorage.setItem("token", response.data.data);
      }}
      lable={"Submit"}
       />
      <BottomWarning lable={"Already have a account? "} buttonText={"Sign In"} to={"/signin"}/>
      </div>
    </div>
  )
}

export default Signup