import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestseller, setBestseller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller === true)
        setBestseller(bestProduct.slice(0, 5))
    }, [products])
    return (
        <div className='my-10'>
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLER"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Explore our best-selling products, loved by our customers for their quality, design, and performance. These top picks have earned their place as customer favorites — a perfect mix of reliability and style that keeps shoppers coming back.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:gird-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
                {
                    bestseller.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller