// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'></h4>
            <h1>Gear Up with MotoXR</h1>
            <p>MotoXR is your go-to destination for premium motorcycle gear. Explore cutting-edge helmets, jackets, and accessories designed for safety, comfort, and style. Experience our Augmented Reality try-on feature and find the perfect fit before you hit the road.</p>
            <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner image" />
        </div>
    </div>
  )
}

export default Banner