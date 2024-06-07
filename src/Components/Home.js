import React from 'react'
import img from '../Assets/attr_2077 1.png'
import './Home.css'
import Slider from './Slider'
export default function Home() {
  return (
    <div className='home'>
      <div className="image">
        <img src={img} alt="" />
        <h1 className='text'>Welcome to Indore uncover hidden gems & local charms</h1>
      </div>
      {/* <div className='searchbar'>
       <IoSearchOutline id='searchicon' /> 
       <input id='search' type='text' name='Search' placeholder='Search for Product, Brand and more'/>
     </div> */}
      <Slider />
    </div>
  )
}
