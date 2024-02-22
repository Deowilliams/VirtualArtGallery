import React from 'react'
import { Link } from 'react-router-dom';
const PaymentDone = () => {
  return (
    <div><center>
      <img src={'https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif'} alt='Gif' style={{width:"600px ",height: "400px",paddingTop:"20px",borderRadius:'30px'}}></img>
      <br></br><br></br>
      <h3 style={{color:"black"}}>YOUR ORDER HAS BEEN PROCESSED SUCCESSFULLY</h3>
      <br></br><br></br>
      <Link to="/"><button className='buy-button'>Continue Shopping</button></Link>
    </center>
    </div>
  )
}

export default PaymentDone