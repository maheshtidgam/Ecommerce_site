import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contacts = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />

      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Nandnvan Station <br />Suite 350, Maharashtra, India</p>
          <p className='text-gray-500'>Tel": <span className='text-gray-500'>+91 1234567890</span></p>
          <p className='text-gray-500'>Email: <span className='text-gray-500'>2L2Xg@example.com</span>'</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Styleverse</p>
          <p className='text-gray-500'>Email: Learn more about our teams and job openings </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contacts