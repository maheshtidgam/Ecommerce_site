// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//     return (
//         <div className='flex flex-col sm:flex-row border border-gray-400'>
//             {/* Hero Left Side */}
//             <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
//                 <div className="text-[#414141]">
//                     <div className='flex items-center gap-2'>
//                         <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
//                         <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
//                     </div>
//                     <h1 className='text-3xl sm:py-3 lg:leading-relaxed prata-regular'>Latest Arrivals</h1>
//                     <div className="flex items-center gap-2">
//                         <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
//                         <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//                     </div>
//                 </div>
//             </div>
//             {/* Hero Right Side */}
//             <img src={assets.hero_img} className='w-full sm:w-1/2 ' alt="" />
//         </div>
//     )
// }

// export default Hero


import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='relative bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid md:grid-cols-2 gap-8 items-center min-h-[500px] py-12'>
                    {/* Left Content */}
                    <div className='space-y-6'>
                        <div className='inline-block'>
                            <span className='bg-black text-white px-4 py-2 text-sm font-medium tracking-wider'>
                                SUMMER COLLECTION 2025
                            </span>
                        </div>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                            Elevate Your<br />
                            Style Today
                        </h1>

                        <p className='text-lg text-gray-600 max-w-md'>
                            Discover our latest collection of premium fashion pieces crafted with quality and style in mind.
                        </p>


                    </div>

                    {/* Right Image */}
                    <div className='relative'>
                        <div className='relative overflow-hidden rounded-lg shadow-xl'>
                            <img
                                src={assets.hero_img}
                                alt="Hero"
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Features */}
            <div className='border-t border-gray-200 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                        <div>
                            <p className='text-2xl font-bold text-gray-900'>Free Shipping</p>
                            <p className='text-sm text-gray-600 mt-1'>On orders over $50</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-gray-900'>Easy Returns</p>
                            <p className='text-sm text-gray-600 mt-1'>30-day guarantee</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-gray-900'>Secure Payment</p>
                            <p className='text-sm text-gray-600 mt-1'>100% protected</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-gray-900'>24/7 Support</p>
                            <p className='text-sm text-gray-600 mt-1'>Always here to help</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero