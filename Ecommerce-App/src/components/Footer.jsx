import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=''>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm ">
                <div className="">
                    <img src={assets.logo} className="w-32 mb-5" alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aut, maiores inventore pariatur fugiat molestiae temporibus quo odio sed aperiam labore. Dolores quidem quo saepe distinctio ducimus nobis. Nesciunt, eaque.</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li className="">Home </li>
                        <li className="">About us</li>
                        <li className="">Delivery</li>
                        <li className="">Privacy Policy</li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1234567890</li>
                        <li>contact@forver.com</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <hr  className='w-full'/>
                <p className="py-5 text-sm text-center">Copyright 2025@forever.com - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer