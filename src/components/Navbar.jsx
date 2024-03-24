import React from 'react'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    return (
        <div class="grid grid-cols-3 gap-7 w-4/5 mx-auto py-8">
            <div className='max-h-56'>
                <h5 className='font-primary font-extrabold text-4xl uppercase'>sohanthink</h5>
            </div>
            <div className='max-h-56'>
                <ul className='flex gap-9 cursor-pointer justify-center font-primary font-normal uppercase items-center py-3 text-s'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Design</li>
                </ul>
            </div>
            <div className='max-h-56 flex justify-end py-3'>
                <CiSearch className='text-2xl' />
            </div>
        </div>
    )
}

export default Navbar