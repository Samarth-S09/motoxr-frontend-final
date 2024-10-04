// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import ProductCards from './ProductCards'

import products from "../../data/products.json"

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }
    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Hot Picks for Riders</h2>
            <p className='section__subheader mb-12'>
                Discover the latest in motorcycle helmets, jackets, and accessories trending in the biking world. Whether you need enhanced protection or want to upgrade your style, our handpicked selection is here to gear you up. Do not miss out on the top-selling products of the season, designed for performance and durability!
            </p>

            {/* products card */}
            <div className='mt-12'>
            <ProductCards products={products.slice(0, visibleProducts)}/>
            </div>

            {/* load more products btn */}
            <div className='product__btn'>
                {
                    visibleProducts < products.length && (
                        <button className='btn' onClick={loadMoreProducts}>Load More</button>
                    )
                }
            </div>
        </section>
    )
}

export default TrendingProducts