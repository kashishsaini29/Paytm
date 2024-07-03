import React from 'react'
import { Sendmoney } from '../Components/Sendmoney'

const SendMoney = () => {
  const user={
    name:"Vipul",
    userId:"adfad"
  }
  return (
    <div>
      <Sendmoney user={user}/>
    </div>
  )
}

export default SendMoney