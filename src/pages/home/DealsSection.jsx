// eslint-disable-next-line no-unused-vars
import React from 'react'
import dealsImg from "../../assets/deals.png"
const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>

        <div className='deals__content'>
            <h5>GetGear Up for Less!</h5>
            <h4>Deal of the Month</h4>
            <p>Do not miss out on our exclusive offer this month! Get up to 25% off on our best-selling helmets and jackets. Limited time only—grab your gear while the deal lasts!</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealsSection