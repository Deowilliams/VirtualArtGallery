import React from 'react'
import { Link } from 'react-router-dom';
const Cashondel = () => {
  return (
    <div><center>
      <img src={'https://cdn.dribbble.com/users/335541/screenshots/7102045/media/5b7237fe7bbfa31531d6e765576f1bc4.jpg'} alt='COD' style={{width:"600px ",height: "400px"}}></img>
      <br></br><br></br>
      <h3 style={{color:"black"}}>YOUR ORDER HAS BEEN PROCESSED SUCCESSFULLY</h3>
      <br></br><br></br>
      <Link to="/"><button className='buy-button'>Continue Shopping</button></Link>
      </center>
    </div>
  )
}

export default Cashondel