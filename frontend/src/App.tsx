
import {Route, Routes, BrowserRouter } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Signup from "./Pages/Signup"
import Singin from "./Pages/Singin"
import SendMoney from "./Pages/SendMoney"

function App() {

  return (
    <>
    <BrowserRouter>
       <Routes>
            <Route path="/dashboard"  element={<Dashboard/>}/>
            <Route path="/signup"  element={<Signup/>}/>
            <Route path="/signin"  element={<Singin/>}/>
            <Route path="/sendmoney" element={<SendMoney/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
