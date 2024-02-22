// import React from 'react'
// import './Login.css'
// import img from '../photos/art.png'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const navigate=useNavigate()
//     const handclick=()=>{
//       navigate("/")
//     }
//   return (
//     <div id='loghead'>
//         <center>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <img src={img} alt="Bookery Logo" width={130} height={70} style={{ marginRight: '-25px'}} />
//       <h1 style={{ margin: '0', color:"deeppink" }}>ART GALLERY</h1>
//     </div>
//           <div id='logbody'>
//             <h1 id='log'>Wolcome Back! </h1>
//             <h3 id='log'>Login to Continue</h3>
//   <h3 id='email'>EMAIL ID</h3>
//              <input type='email' placeholder='EMAIL ID' id='emaili'></input>
//              <h3 id='password'>PASSWORD</h3>
//              <input type='password' placeholder='PASSWORD' id='passwordi' required></input><br></br><br></br>
//              <input type='checkbox' placeholder='remember me'></input>
  
//              <button onClick={handclick} id='logbutton'> LOGIN</button>
//              <h6 id='fpassword'>FORGET PASSWORD?</h6>
//              </div><br></br>
//              <p>CREATE AN ACCOUNT?</p>
//              <a href="/register">SIGNUP</a>
             
//         </center>
//     </div>
//   )
// }

// export default Login
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css'
import img from '../photos/pandaart.png'
import { Link, useNavigate } from 'react-router-dom'

export default function BasicTextFields() {
  const navigate=useNavigate()
       const handclick=()=>{
         navigate("/")
       }
  return (
    <div id='loghead'>
        <center>
        <div style={{marginLeft:'-30px'}}>
       <img src={img} alt="Bookery Logo" width={300} height={130}/>
     </div>
           <div id='logbody'>
             <h1 id='log'>Welcome Back! </h1>
             <h3 id='log'>Login to Continue</h3>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="email" label="Mail Id" variant="outlined" type='email'/>
    </Box>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="password" label="Password" variant="outlined" type='password'/>
    </Box><br></br>

              <Link to="/forgetpassword">
              <p id='fpassword'>FORGET PASSWORD?</p><br></br>
              </Link>
              <button onClick={handclick} id='logbutton'> LOGIN</button>
              </div>
              <p>CREATE AN ACCOUNT?</p>
              <Link to="/register">
              <p>SIGNUP</p>
              </Link>
         </center>
     </div>
  );
}