import React from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import { Button } from '../Components/Button'
import { BottomWarning } from '../Components/BottomWarning'

const Singin = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
    <div className='flex flex-col px-8 py-4 border border-slate-100  shadow-slate-400 shadow-2xl'>
      <Heading  lable={"Sign In"}/>
      <SubHeading lable={"Enter your credentials to access your account"}/>
      <InputBox placeholder="example@exampl.com" lable={"Email"}/>
      <InputBox placeholder="enter your password" lable={"Password"}/>
      <Button  lable={"Sign In"}/>
      <BottomWarning lable={"Don't have a account? "} buttonText={"Sign Up"} to={"/signup"}/>
      </div>
    </div>
  )
}

export default Singin