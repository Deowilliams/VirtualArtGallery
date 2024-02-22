// import React from 'react'
// import './Home.css'
// import img from '../photos/home.png'
// import img1 from '../photos/home1.png'


// const Home = () => {
//   return (
//       <div id="hole">
//           <div style={{ display: 'flex', alignItems: 'center',backgroundColor:" rgba(0, 0, 0, 0.216" }}>
//       <img src={img} alt="Bookery Logo" width={200} height={100} style={{ marginRight: '-140px'}} />
//       <h1 style={{ margin: '0',color:"deeppink",}}>BOOKERY</h1>
//     </div>
//         <center>
//             <br></br>
//         <div id='body'>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//     <h2 style={{ margin: '0', marginLeft:'0px',marginRight: '1100px', marginTop:'-300px' ,color: 'black' }}>WELCOME TO BOOKERY</h2><br></br>
//     <h4  style={{ margin: '0', marginLeft:'-1000px',marginRight: '250px', marginTop:'-100px'}}>New Way To Explore Books<br></br>Read Reviews,Find new Books</h4>
//     <img src={img1} alt="Bookery Logo" width={800} height={500} style={{ marginRight: '-40px', marginTop: '-60px' }} />
// </div>
//     </div><div id='details'>
//         <h4 id='product'>PRODUCT DETAILS</h4>
//         <div>PHONE</div>
//         <div>LAPTOP</div>
//         <div>FRIDGE</div>
//         <div>TABLET</div>
//         <div>WATCH</div>
//         </div>
//             <div id='bottom'>
//                 <h4 id='product'>LATEST PRODUCT DETAILS</h4>
//                 <div >APPLE 15 PRO MAX</div>
//                 <div>LENOVO LOQ</div>
//                 <div>LG refrigerator</div>
//                 <div>SAMSUNG GALAXY TAB S6 LITE</div>
//                 <div>ROLEX</div>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//             </div>
//         </center>
//     </div>
//   )
// }

// export default Home
import * as React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handclick = () => {
    navigate("/login");
  };

  return (
    <center>
      <div id="top">
        <br></br>
        <h1 id='homeh1'>Open your own art <br></br>exhibition.</h1>
        <h2 id="homeh2">Share your art with the world.<br></br>
          Create your own online art exhibition with easy and <br></br>fast online tools.<br></br>
          Share your art freely and get instant visitors to your art exhibitions.<br></br>
          Connect directly with art lovers globally and sell your art directly to <br></br>
          collectors, without middlemen or commissions.​​</h2>
      </div>
      <div id="f1">
        <div>
          <br></br>
          <h4 id='homeh4' style={{ marginLeft: '100px' }}>Search Artworks : </h4>
          <input
            type="text"
            placeholder="Start Your Search..."
            id='search'
          />

          <h4 id='homeh4' style={{ marginLeft: '100px' }}>Our Top Artists</h4>
          <br></br>
        </div>
        <div id="f2">
          <div class="d1" id="c">
            <div class="d2b1"></div>
            <div class="det1">
              <p>With a career spanning nearly six decades, Gerhard Richter is widely considered one of the greatest artists of our time.<br></br>
                To explore the artist's work and life, click on an image below.</p>
            </div>
          </div>
          <div class="d1" id="s">
            <div class="d2b2"></div>
            <div class="det1">
              <p>Robin Eley (born in London, England in 1978) is an Australian hyperrealist painter.<br></br>
                Eley has been a finalist in numerous Australian art prizes, most notably Runner Up 2010 and Highly Commended 2011 in the Doug Moran National Portrait Prize, the world's richest prize for portraiture. In addition, he has also been a finalist in the Archibald Prize
                <br></br> 2012 the Eutick Memorial Still Life Art Prize 2010, 2012 and the Nora Heysen Still Life Art Award 2011 In 2012 he was the recipient of an International Presentation Grant from Arts SA<br></br>
                which enabled him to accept an invitation to travel to the United States to exhibit his work at the Westmont Ridley-Tree Museum of Art in Santa Barbara, California. His work is also included in the museum's permanent collection.</p>
            </div>
          </div>

          <div class="d1" id="e">
            <div class="d2b3"></div>
            <div class="det1">
              <p>Anna-Lou Leibovitz born October 2, 1949 is an American portrait photographer best known for her engaging portraits, which often feature subjects in intimate settings and poses.
                The Library of Congress declared her a Living Legend,
                and she is the first woman to have a feature exhibition at Washington's National Portrait Gallery</p>
            </div>
          </div>

          <div class="d1" id="t">
            <div class="d2b4"></div>
            <div class="det1">
              <p>Magdalena Carmen Frida Kahlo y Calderón (Spanish pronunciation: ˈfɾiða ˈkalo'; 6 July 1907 – 13 July 1954) was a Mexican painter known for her many portraits, self-portraits,
                and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.<br></br>
                She is also known for painting about her experience of chronic pain.</p>
            </div>
          </div>

          <h4 id='homeh4' style={{ marginLeft: '100px' }}>VAG'S CHOICE </h4>
        </div>
        <div id="f2">
          <div class="d1" id="c">
            <div class="d3b1"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>LOVE ARTS </p>
              </Link>
              <p style={{fontSize:'20px',marginLeft:'100px'}}>BY - Albrecht Dürer</p>
            </div>
          </div>

          <div class="d1" id="s">
            <div class="d3b2"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>OIL ARTS </p>
            </Link>  
              <p style={{fontSize:'20px',marginLeft:'100px'}}>BY - ohannes Vermeer </p>
            </div>
          </div>
          
          <div class="d1" id="s">
            <div class="d3b3"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>DOODLE ART</p> 
            </Link>
              <p  style={{fontSize:'20px',marginLeft:'100px'}}>BY - SAM COX</p></div>
          </div>
          <div class="d1" id="s">
            <div class="d3b4"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>DIGITAL ART</p>
              </Link>
              <p style={{fontSize:'20px',marginLeft:'100px'}}>BY - TURIEN TRAN</p>
            </div>
          </div></div>
          <div id="f2">
          <div class="d1" id="s">
            <div class="d4b1"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>DIGITAL ART</p>
              </Link>
              <p style={{fontSize:'20px',marginLeft:'100px'}}>BY - CLAIVE KEN</p>
            </div>
          </div>
          <div class="d1" id="s">
            <div class="d4b2"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>OIL ART</p>
              </Link>
              <p style={{fontSize:'20px',marginLeft:'100px'}}>BY - JOSEPH BLACK</p>
            </div>
          </div>
          <div class="d1" id="s">
            <div class="d4b3"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>DOODLE ART</p>
              </Link>
              <p style={{fontSize:'20px',marginLeft:'80px'}}>BY - MEGAN ROSE</p>
            </div>
          </div>
          <div class="d1" id="s">
            <div class="d4b4"></div>
            <div class="det1">
            <Link to="/home">
              <p style={{fontSize:'30px',marginLeft:'100px'}}>LOVE ART</p>
              </Link>
              <p style={{fontSize:'20px',marginLeft:'80px'}}>BY - OLIVER MELODY</p>
            </div>
          </div>
          </div>
          <div id="f3">
            <div class="f4">
            <h1 id='homeh1' style={{marginLeft:'120px'}}>Join in, it’s free.</h1>
            <h3 id='homeh3' style={{marginLeft:'120px'}}>An Open Art Platform

For Art lovers, artists, galleries, collectors, universities,<br></br> companies and anyone who is involved in the art world in some way.<br></br>
<br></br>
Create your free profile and company page, publish articles, start or<br></br> join a group, make connections, get followers, post on your wall and <br></br>much more.</h3>
<h1 id='homeh1'style={{marginLeft:'120px',fontSize:'40px'}}>VAG's Shop is an Art Marketplace</h1>
<h3 id='homeh3' style={{marginLeft:'120px'}}>The world’s first direct and secondary marketplace for art!<br></br>
Find all three artwork types, physical, digital and NFT. We're re-<br></br>writing the rules; democratising the art-online-shop world.<br></br>
Buy and sell artworks commission-free.

</h3>
<h1 id='homeh1' style={{marginLeft:'120px',fontSize:'40px'}}>Media Channel</h1>
<h3 style={{marginLeft:'120px'}} id='homeh3'>Not in the market for buying or selling art? VAG's is free for anyone <br></br>who is interested in reading art news, watching videos of cutting<br></br> edge projects, and connecting with other art enthusiasts.</h3>
          </div>
   
          <button onClick={handclick} class="gs">GET STARTED</button>
          
          <div style={{marginBottom:'300px'}}>
            <h6 style={{color:'white'}}>_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</h6>
          <Footer/>
          </div>
          </div> 
        </div>

    </center>
  );
}

export default Home;