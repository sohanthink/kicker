import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { GrSend } from "react-icons/gr";
import { Link } from 'react-router-dom';


const Footer = () => {

    let handlesubscribe = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <div className="font-primary flex flex-col items-center bg-gray-950/90 text-white py-28 space-y-9 mt-3">
                <div className='animate-bounce'><GrSend /></div>
                <h3 className='text-center text-2xl md:text-4xl'>Get the best blog stories<br /> into your inbox!</h3>

                <div className='flex'>
                    <input onChange={(e) => handlesubscribe(e)} id="inputField" className='p-4 text-white rounded-l-2xl w-44 md:w-80 bg-slate-800 outline-none' type="text" placeholder='Enter Your Email' />
                    <p className="rounded-r-2xl bg-slate-800 px-4 flex justify-center items-center gap-4 border-l-[.3px] border-white">
                        <Link className='flex gap-3 justify-center items-center'> <GrSend /> subscribe</Link>
                    </p>
                </div>
                <div className="flex items-center">
                    <input onChange={(e) => handlesubscribe(e)} checked id="checked-checkbox" type="checkbox" value="subscribe" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    <label htmlFor="checked-checkbox" className="ms-2 hidden sm:block font-medium text-gray-900 dark:text-gray-300">I agree that my submitted data is being collected and stored.</label>

                    <label htmlFor="checked-checkbox" className="ms-2 font-medium block sm:hidden text-gray-900 dark:text-gray-300">I agree on the terms</label>
                </div>

            </div>

            <div className='bg-gray-950/90'>
                <div className='flex place-content-between w-11/12 md:w-4/5 mx-auto py-5 text-white border-t-[0.5px] border-white/75'>
                    <div><p className='font-primary text-xs md:text-lg'>&copy; 2024 <Link className='underline' to="https://sohanthink.com/">Sohanthink.com</Link>. All rights reserved.</p>
                    </div>

                    <div className='flex sm:gap-4'>
                        <div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaFacebookF />
                        </div>
                        <div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaXTwitter />
                        </div>
                        <div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaYoutube />
                        </div>
                        <div className='p-2 sm:p-3 rounded-full border-gray-300 border transition-all hover:animate-bounce cursor-pointer'>
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer