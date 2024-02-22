import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const ForgetPassword = () => {
  return (
    <div id='fhole'>
        <center>
    <div id='forgethole'>
    <div id='error'>
      <ErrorIcon color="error" fontSize="large" />
    </div>
    <h2 id='forgetp'>Forget Password</h2>
    <p id='forgetp'>Enter your email and we'll send you <br></br>a link to reset your password.</p>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="email" label="Mail Id" variant="outlined" type='email'/>
    </Box>    
    <button type='button' id='forgetbutton'> Submit</button>
    </div><br></br><br></br>
    <a href='/login'>Back to Login</a>
    </center>
    </div>
  )
}

export default ForgetPassword