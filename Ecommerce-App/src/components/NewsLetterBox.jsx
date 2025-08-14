import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='text-center'>
            <p className="text-2xl font-medium text-gray-800">Subscribe Now  & get 20% off</p>
            <p className="tect-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a provident quod, officia nemo numquam eius, ab recusandae debitis ducimus ratione unde natus, reiciendis quaerat dicta. Tenetur dolore similique nesciunt.</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border  pl-3'>
                <input type="email" className="w-full sm:flex-1 outline-none" placeholder='Enter Your Email' required />
                <button type='submit' className='bg-black text-white  text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox