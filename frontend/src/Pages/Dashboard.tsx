import React, { useState } from 'react'
import { Appbar } from '../Components/Appbar'
import { Balance } from '../Components/Balance'
import { User } from '../Components/User'

const Dashboard = () => {
  const [users, setUsers]=useState(
    ["John","Ram","Vipul"]
  )
  return (
    <div className='flex flex-col'>
      <Appbar appName={"Paytm App"} user={"Kashish"}/>
      <Balance balance={5000}/>
      <User users={users} setUsers={setUsers} />
    </div>
  )
}

export default Dashboard