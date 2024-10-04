// eslint-disable-next-line no-unused-vars
import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className="ri-glasses-fill"></i></span> 
            <h4>AR Try-On Experience</h4>
            <p>Not sure about the fit? Use our cutting-edge Augmented Reality try-on feature to find the perfect helmet or jacket virtually!</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-customer-service-line"></i></span>
            <h4>24/7 Customer Support</h4>
            <p>Our dedicated team is available around the clock to assist you with any questions or concerns. We are here to keep you riding worry-free.</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-truck-line"></i></span>  
            <h4>Fast & Free Delivery</h4>
            <p>Get your gear delivered to your doorstep quickly, with free shipping on all orders. We ensure your safety does not wait.</p>
        </div>
    </section>
  )
}

export default PromoBanner