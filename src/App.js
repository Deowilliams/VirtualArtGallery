import React from 'react'
import {BrowserRouter,Route,Link,Routes,Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import Support from './Pages/Contact'
import RegisterSuccess from './Pages/RegisterSuccess'
import ForgetPassword from './Pages/ForgetPassword'
import VirtualArtGallery from './Pages/VirtualArtGallery';
import Payment from './Pages/Payment';
import PaymentDone from './Pages/PaymentDone';
import Cashondel from './Pages/Cashondel';


const Layout = () => {
  return (
    <div style={{backgroundColor:"white" }}><hr/>
      <div style={{display: "flex", justifyContent: "right"}}>
  <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/">Home</Link>
  <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/login">Login</Link>
  <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/register">Register</Link>
  <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/about">About</Link>
  <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/support">Contact</Link>
  <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/registersuccess"></Link>
  <Link style={{color:"black",textDecoration:"none", margin: "0 10px"}} to="/forgetpassword"></Link>
</div><hr/>
      <Outlet />
      
    </div>
  );
};
const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<VirtualArtGallery/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="registersuccess" element={<RegisterSuccess/>}/>
        <Route path="forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/virtualartgallery" element={<VirtualArtGallery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentdone" element={<PaymentDone/>}/>
        <Route path="/cashondel" element={<Cashondel/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App