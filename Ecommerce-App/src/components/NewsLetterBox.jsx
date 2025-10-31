import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className='text-center'>
            <p className="text-2xl font-medium text-gray-800">Subscribe Now  & get 20% off</p>
            <p className="tect-gray-400 mt-3">Join our community and stay updated on new arrivals, exclusive offers, and style inspiration — delivered straight to your inbox.
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border  pl-3'>
                <input type="email" className="w-full sm:flex-1 outline-none" placeholder='Enter Your Email' required />
                <button type='submit' className='bg-black text-white  text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox