// import React from 'react'
// import './Register.css'
// import img from '../photos/art.png'

// const Contact = () => {

//   return (
//     <div id='holer'><center>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <img src={img} alt="Bookery Logo" width={130} height={70} style={{ marginRight: '-25px' }} />
//       <h1 style={{ margin: '0', color:"deeppink" }}>ART GALLERY</h1>
//     </div>
//       <div id='rbody'>
//             <h1 id='reg'>REGISTER</h1>
//             <h3 id='label'>FULL NAME</h3>
//             <input typeof='text' placeholder='LASTNAME' id='input'></input>
//             <h3 id='label'>EMAIL ID</h3>
//             <input typeof='email' placeholder='EMAIL ID' id='input'></input>
//             <h3 id='label'>PASSWORD</h3>
//             <input type='password'placeholder='PASSWORD' id='input'></input>
//             <h3 id='label'>CONFIRM PASSWORD</h3>
//             <input type='password'placeholder='CONFIRM PASSWORD' id='input'></input><br></br><br></br>
//             <button type='button' id='regbutton'>CREATE AN ACCOUNT</button>
//             <br></br><br></br>
//             <p>ALREADY HAVE AN ACCOUNT?<a href="/login"> LOGIN</a></p>
            
//             </div> </center>
//     </div>
//   )
// }

// export default Contact

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Register.css'
import img from '../photos/pandaart.png'
import { useNavigate } from 'react-router-dom'

export default function BasicTextFields() {
  const navigate=useNavigate()
       const handclick=()=>{
         navigate("/registersuccess")
       }
  return (
    <div id='reghead'>
        <center>
        <div style={{ marginLeft:'-30px' }}>
        <img src={img} alt="Bookery Logo" width={300} height={130}/>
     </div>
           <div id='regbody'>
             <h1 id='reg'>Create Account</h1>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="email" label="Mail Id" variant="outlined" type='email'/>
    </Box>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="name" label="Full Name" variant="outlined" type='email'/>
    </Box>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="password" label="Password" variant="outlined" type='password'/>
    </Box>
              <button onClick={handclick} id='regbutton'> Create</button>
              </div>
              <p>ALREADY HAVE AN ACCOUNT</p>
              <a href="/login">Login</a>
            
         </center>
     </div>
  );
}