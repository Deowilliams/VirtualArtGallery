import * as React from 'react';
import './VirtualArtGallery.css'; 
import { useNavigate } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const VirtualArtGallery = () => {
  const navigate = useNavigate(); 
  
  const handleClick = () => {
    navigate("/Payment");
  }


  return (
    <div className="con">
      
      <div className="card" id='1'>
        <img className="image" src='https://img1.etsystatic.com/000/0/5879670/il_fullxfull.342643861.jpg' alt='im1'></img>
        <div className="details">
          <p className="name">Hendel</p>
          <p className="title">Vintage Landscape Oil Painting
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} className="favorite-button" /></p>
          <p className="price">$50</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='2'>
        <img className="image" src='https://afremov.com/media/catalog/product/cache/029c9410eb6b6a309d2f6c6bdfc6e2f2/RAINY-WEDDING_2.jpg' alt='im2'></img>
        <div className="details">
          <p className="name">Leonid Afremov</p>
          <p className="title">Rainy Wedding
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$178</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='3'>
        <img className="image" src='https://afremov.com/media/catalog/product/cache/029c9410eb6b6a309d2f6c6bdfc6e2f2/leonid-afremov-misty-mood_5.jpg' alt='im3'></img>
        <div className="details">
          <p className="name">Leonid Afremov</p>
          <p className="title">MISTY MOOD NIGHT
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='4'>
        <img className="image" src='https://tse4.mm.bing.net/th?id=OIP.qmO7U-uACC5PbjyZUmHRSwHaE5&pid=Api&P=0&h=180' alt='im4'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">City Street
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='5'>
        <img className="image" src='https://blog.breathingcolor.com/wp-content/uploads/2017/01/BC-digital-traditional-painting-COVER.jpg' alt='im5'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">Abstract Dreams
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='6'>
        <img className="image" src='https://wallup.net/wp-content/uploads/2019/09/1021490-digital-art-fantasy-art-architecture-building-house-artwork-beauty-1.jpg' alt='im6'></img>
        <div className="details">
          <p className="name">Arun Raj</p>
          <p className="title">Fantasy Home
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='7'>
        <img className="image" src='https://tse1.mm.bing.net/th?id=OIP.m6lMSO9zB8UF9dofey_qJAHaDH&pid=Api&P=0&h=180' alt='im7'></img>
        <div className="details">
          <p className="name">Gill Torento</p>
          <p className="title">Natural Landscapes
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='8'>
        <img className="image" src='https://tse2.mm.bing.net/th?id=OIP.rYtfdfhiHZjJ3vnFNUXUPAHaFZ&pid=Api&P=0&h=180' alt='im8'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">The Eye
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='9'>
        <img className="image" src='https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-doodle-art-doodling-2.jpg' alt='im9'></img>
        <div className="details">
          <p className="name">Rayan Smith</p>
          <p className="title">Doodle Design
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='10'>
        <img className="image" src='https://t3.ftcdn.net/jpg/02/23/24/00/360_F_223240002_6GAvK9B0uB4v5wGIkEiAUAOun4C4hwGd.jpg' alt='im10'></img>
        <div className="details">
          <p className="name">Lily Sun</p>
          <p className="title">The Ideas
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='11'>
        <img className="image" src='https://tse1.mm.bing.net/th?id=OIP.Vcj7DbeiAXsnD-loHZ5KBgHaFV&pid=Api&P=0&h=180' alt='im11'></img>
        <div className="details">
          <p className="name">Boobalan Bill</p>
          <p className="title">Social Media
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='12'>
        <img className="image" src='https://wallpapercave.com/wp/wp4828649.jpg' alt='im12'></img>
        <div className="details">
          <p className="name">Mike Tyson</p>
          <p className="title">Abstract Dreams
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>

      <div className="card" id='13'>
        <img className="image" src='https://i.etsystatic.com/5711041/r/il/6b2634/1739647487/il_fullxfull.1739647487_nvd7.jpg' alt='im1'></img>
        <div className="details">
          <p className="name">Hendel</p>
          <p className="title">Garden Painting
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$50</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='14'>
        <img className="image" src='https://webneel.com/daily/sites/default/files/images/daily/07-2013/20-fruitst-still-life-painting-by-dmitriy-annenkov.jpg' alt='im2'></img>
        <div className="details">
          <p className="name">Philip Gerrard</p>
          <p className="title">Apples Scattered
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$178</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='15'>
        <img className="image" src='https://img.xcitefun.net/users/2013/03/318560,xcitefun-oil-painting-5.jpg' alt='im3'></img>
        <div className="details">
          <p className="name">Akshay Kumar</p>
          <p className="title">Lovely Fairy
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='16'>
        <img className="image" src='https://www.mydesignbeauty.com/wp-content/uploads/2016/10/beautiful-oil-paintings-art-collection-by-mydesignbeauty-36.jpg' alt='im4'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">Colourfull Nature
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='17'>
        <img className="image" src='https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2019/10/16080303/Example-of-computer-illustration-digital-art-oct16.jpg' alt='im5'></img>
        <div className="details">
          <p className="name">Cameron Gill</p>
          <p className="title">Abstract Dreams
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='18'>
        <img className="image" src='https://wallpapercave.com/wp/wp2659185.jpg' alt='im6'></img>
        <div className="details">
          <p className="name">Arun Raj</p>
          <p className="title">Deserted Landed
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='19'>
        <img className="image" src='https://thinkml.ai/content/images/2021/01/creative-art.jpg' alt='im7'></img>
        <div className="details">
          <p className="name">Gill Torento</p>
          <p className="title">The Double Game
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='20'>
        <img className="image" src='https://i.pinimg.com/originals/8d/a5/af/8da5afdf41290e391279a5759067260e.jpg' alt='im8'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">The Rising Sun
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='21'>
        <img className="image" src='https://static.vecteezy.com/system/resources/previews/000/155/039/original/colorful-abstract-doodle-vector.jpg' alt='im9'></img>
        <div className="details">
          <p className="name">Rayan Smith</p>
          <p className="title">Doodle Painting
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='22'>
        <img className="image" src='https://tse1.mm.bing.net/th?id=OIP.QxzSHgjDHY95Q3BGsBh91QHaEw&pid=Api&P=0&h=180' alt='im10'></img>
        <div className="details">
          <p className="name">Lily Sun</p>
          <p className="title">The Wedding Party
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='23'>
        <img className="image" src='http://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-strange-doodle-by-bon-arts.jpg' alt='im11'></img>
        <div className="details">
          <p className="name">Boobalan Bill</p>
          <p className="title">Strange Art of Doodle
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='24'>
        <img className="image" src='https://d2jv9003bew7ag.cloudfront.net/uploads/Google-Doodle-via-youthkiawaaz-com1.jpg' alt='im12'></img>
        <div className="details">
          <p className="name">Mike Tyson</p>
          <p className="title">Google Doodle
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='1'>
        <img className="image" src='https://img1.etsystatic.com/000/0/5879670/il_fullxfull.342643861.jpg' alt='im1'></img>
        <div className="details">
          <p className="name">Hendel</p>
          <p className="title">Vintage Landscape Oil Painting
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} className="favorite-button" /></p>
          <p className="price">$50</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='2'>
        <img className="image" src='https://afremov.com/media/catalog/product/cache/029c9410eb6b6a309d2f6c6bdfc6e2f2/RAINY-WEDDING_2.jpg' alt='im2'></img>
        <div className="details">
          <p className="name">Leonid Afremov</p>
          <p className="title">Rainy Wedding
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$178</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='3'>
        <img className="image" src='https://afremov.com/media/catalog/product/cache/029c9410eb6b6a309d2f6c6bdfc6e2f2/leonid-afremov-misty-mood_5.jpg' alt='im3'></img>
        <div className="details">
          <p className="name">Leonid Afremov</p>
          <p className="title">MISTY MOOD NIGHT
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='4'>
        <img className="image" src='https://tse4.mm.bing.net/th?id=OIP.qmO7U-uACC5PbjyZUmHRSwHaE5&pid=Api&P=0&h=180' alt='im4'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">City Street
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='5'>
        <img className="image" src='https://blog.breathingcolor.com/wp-content/uploads/2017/01/BC-digital-traditional-painting-COVER.jpg' alt='im5'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">Abstract Dreams
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='6'>
        <img className="image" src='https://wallup.net/wp-content/uploads/2019/09/1021490-digital-art-fantasy-art-architecture-building-house-artwork-beauty-1.jpg' alt='im6'></img>
        <div className="details">
          <p className="name">Arun Raj</p>
          <p className="title">Fantasy Home
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='7'>
        <img className="image" src='https://tse1.mm.bing.net/th?id=OIP.m6lMSO9zB8UF9dofey_qJAHaDH&pid=Api&P=0&h=180' alt='im7'></img>
        <div className="details">
          <p className="name">Gill Torento</p>
          <p className="title">Natural Landscapes
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='8'>
        <img className="image" src='https://tse2.mm.bing.net/th?id=OIP.rYtfdfhiHZjJ3vnFNUXUPAHaFZ&pid=Api&P=0&h=180' alt='im8'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">The Eye
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='9'>
        <img className="image" src='https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-doodle-art-doodling-2.jpg' alt='im9'></img>
        <div className="details">
          <p className="name">Rayan Smith</p>
          <p className="title">Doodle Design
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='10'>
        <img className="image" src='https://t3.ftcdn.net/jpg/02/23/24/00/360_F_223240002_6GAvK9B0uB4v5wGIkEiAUAOun4C4hwGd.jpg' alt='im10'></img>
        <div className="details">
          <p className="name">Lily Sun</p>
          <p className="title">The Ideas
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='11'>
        <img className="image" src='https://tse1.mm.bing.net/th?id=OIP.Vcj7DbeiAXsnD-loHZ5KBgHaFV&pid=Api&P=0&h=180' alt='im11'></img>
        <div className="details">
          <p className="name">Boobalan Bill</p>
          <p className="title">Social Media
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='12'>
        <img className="image" src='https://wallpapercave.com/wp/wp4828649.jpg' alt='im12'></img>
        <div className="details">
          <p className="name">Mike Tyson</p>
          <p className="title">Abstract Dreams
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>

      <div className="card" id='13'>
        <img className="image" src='https://i.etsystatic.com/5711041/r/il/6b2634/1739647487/il_fullxfull.1739647487_nvd7.jpg' alt='im1'></img>
        <div className="details">
          <p className="name">Hendel</p>
          <p className="title">Garden Painting
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$50</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='14'>
        <img className="image" src='https://webneel.com/daily/sites/default/files/images/daily/07-2013/20-fruitst-still-life-painting-by-dmitriy-annenkov.jpg' alt='im2'></img>
        <div className="details">
          <p className="name">Philip Gerrard</p>
          <p className="title">Apples Scattered
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$178</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='15'>
        <img className="image" src='https://img.xcitefun.net/users/2013/03/318560,xcitefun-oil-painting-5.jpg' alt='im3'></img>
        <div className="details">
          <p className="name">Akshay Kumar</p>
          <p className="title">Lovely Fairy
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='16'>
        <img className="image" src='https://www.mydesignbeauty.com/wp-content/uploads/2016/10/beautiful-oil-paintings-art-collection-by-mydesignbeauty-36.jpg' alt='im4'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">Colourfull Nature
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='17'>
        <img className="image" src='https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2019/10/16080303/Example-of-computer-illustration-digital-art-oct16.jpg' alt='im5'></img>
        <div className="details">
          <p className="name">Cameron Gill</p>
          <p className="title">Abstract Dreams
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='18'>
        <img className="image" src='https://wallpapercave.com/wp/wp2659185.jpg' alt='im6'></img>
        <div className="details">
          <p className="name">Arun Raj</p>
          <p className="title">Deserted Landed
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='19'>
        <img className="image" src='https://thinkml.ai/content/images/2021/01/creative-art.jpg' alt='im7'></img>
        <div className="details">
          <p className="name">Gill Torento</p>
          <p className="title">The Double Game
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='20'>
        <img className="image" src='https://i.pinimg.com/originals/8d/a5/af/8da5afdf41290e391279a5759067260e.jpg' alt='im8'></img>
        <div className="details">
          <p className="name">Jane Smith</p>
          <p className="title">The Rising Sun
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='21'>
        <img className="image" src='https://static.vecteezy.com/system/resources/previews/000/155/039/original/colorful-abstract-doodle-vector.jpg' alt='im9'></img>
        <div className="details">
          <p className="name">Rayan Smith</p>
          <p className="title">Doodle Painting
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='22'>
        <img className="image" src='https://tse1.mm.bing.net/th?id=OIP.QxzSHgjDHY95Q3BGsBh91QHaEw&pid=Api&P=0&h=180' alt='im10'></img>
        <div className="details">
          <p className="name">Lily Sun</p>
          <p className="title">The Wedding Party
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='23'>
        <img className="image" src='http://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-strange-doodle-by-bon-arts.jpg' alt='im11'></img>
        <div className="details">
          <p className="name">Boobalan Bill</p>
          <p className="title">Strange Art of Doodle
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="card" id='24'>
        <img className="image" src='https://d2jv9003bew7ag.cloudfront.net/uploads/Google-Doodle-via-youthkiawaaz-com1.jpg' alt='im12'></img>
        <div className="details">
          <p className="name">Mike Tyson</p>
          <p className="title">Google Doodle
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></p>
          <p className="price">$150</p>
          <button onClick={handleClick} className="buy-button">Buy Now</button>
        </div>
      </div>
      
      
      <ScrollToTop
        smooth
        className="custom-scroll-to-top-button"
      />
    </div>
  );
};

export default VirtualArtGallery;