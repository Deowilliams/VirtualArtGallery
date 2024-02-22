import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Payment.css'
  function RadioButtonExample() {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

  const navigate = useNavigate(); 
  
  const handleClick = () => {
    navigate("/PaymentDone");
  }
  const handleClick1 = () => {
    navigate("/Cashondel");
  }

  return (
    <div id='ji'> 
        <h1 id='shoph'>Shopping Art</h1>
        <div id='payback'>
            <h2 id='payamthead'>Pay amount</h2>
            <label id='lab'>
        <input 
          type="radio"
          value="Debit / ATM Card"
          checked={selectedOption === 'Debit / ATM Card'}
          onChange={handleOptionChange}/>
        Debit / ATM Card
      </label><br></br><br></br>
            <label id='cardno'>CARD NUMBER</label><br></br>
            <input id='pinput' type='number' placeholder='8881 2545 2545 2245'></input><br></br><br></br>
            <div style={{display:'flex'}}>
            <label id='expiry'>EXPIRY</label><br></br>
            <input id='expiryi' type='number' placeholder='MM / YY'></input>
            <label id='cvv'>CVV / CVC</label><br></br>
            <input id='cvvi' type='number' placeholder='123'></input>
            </div>
            <Link to="/"><button id='cancel'>Cancel</button></Link>
            <button onClick={handleClick} id='makepayment'>Make Payment</button>
        </div>
        <div id='payback1'>
            <h2 id='payamthead'>Pay amount</h2>
            <label id='lab'>
        <input 
          type="radio"
          value="Cash On Delivery"
          checked={selectedOption === 'Cash On Delivery'}
          onChange={handleOptionChange}/>
          Cash On Delivery
          </label>
          <img src='https://cdn.shopify.com/app-store/listing_images/ceb1a596e2b039d02dfb5772303f6273/promotional_image/CMuO0aXF7PoCEAE=.png?height=720&width=1280' alt='Cash On Delivery' id='cod'></img>
          <p id='lab'>Due to handling costs,a nominal fee 10 Ruppes will be charged</p>
            <Link to="/"><button id='cancel2'>Cancel</button></Link>
            <button onClick={handleClick1} id='makepayment2'>Make Payment</button>
            
        </div>
        <div id='payback2'>
        <h2 id='payamthead'>Pay amount</h2>
            <label id='lab'>
        <input 
          type="radio"
          value="UPI"
          checked={selectedOption === 'UPI'}
          onChange={handleOptionChange}/>
          UPI
          </label><br></br>
          <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/upi_0-sixteen_nine.jpg?VersionId=0zmtsk5G5IIzr_90yS4kX22cpZWwGfWO' alt='upi' id='upi'></img>
          <p id='lab'>Pay by any UPI app</p>
          <Link to="/"><button id='cancel3'>Cancel</button></Link>
          <button onClick={handleClick} id='makepayment3'>Make Payment</button>
            
        </div>
        <center>
        <div>
        <p id='pmethod'>PAYMENT METHOD : {selectedOption}</p>
        </div>
        </center>
        </div>
  )
}
export default RadioButtonExample;