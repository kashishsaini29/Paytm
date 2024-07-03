import React, { useEffect, useState } from 'react'
import { Appbar } from '../Components/Appbar'
import { Balance } from '../Components/Balance'
import { User } from '../Components/User'
import axios from 'axios'
import { BACKEND_URL } from '../env'

const Dashboard = () => {

  console.log("dashboard---->>>>>>>>")
  const [users, setUsers]=useState([]);
  const [balance, setBalance] = useState();

   async function getUsers(){
      try{
        const token = localStorage.getItem("token");
        if(token){
          const headers = {
            "Authorization": `Bearer ${token}`
          }
         axios.get(`${BACKEND_URL}user/getusers`,{headers })
             .then((response:any)=>{
                 console.log("getUSers Reaponse",response.data.data);
              setUsers(response.data.data);
             })
        }
      }catch(error){
        console.log("Error getting users")
        throw error
      }
  }
  
async function getBalance(){
  try{
    const token = localStorage.getItem("token");
    if(token){
      const headers={
        "Authorization": `Bearer ${token}`
      }
      axios.get(`${BACKEND_URL}account/get`, {headers})
           .then((response:any)=>{
              setBalance(response.data.data);
           })
    }
  }catch(error){
    console.log("Error getting in Balance")
    throw error
  }
}

  useEffect(()=>{
    console.log("useEffect-------++++++++++")
   getUsers();
   getBalance();
  },[])

  return (
    <div className='flex flex-col'>
      <Appbar appName={"Paytm App"} user={"Kashish"}/>
      <Balance balance={balance}/>
      <User users={users} setUsers={setUsers} />
    </div>
  )
}

export default Dashboard