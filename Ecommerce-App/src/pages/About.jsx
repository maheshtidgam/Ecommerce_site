import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">Forever in the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </p>
          <p className="">Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our mission at Forever is to provide a unique and memorable experience for our customers by offering a wide range of high-quality products at competitive prices.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously inspect and test each product to ensure its quality meets our standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convinience:</b>
          <p className='text-gray-600'>With our User-friendly website, you can shop hassle-free from the comfort of your own home.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our Team is dedicated to providing exceptional customer service, ensuring a smooth and enjoyable shopping experience. </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About