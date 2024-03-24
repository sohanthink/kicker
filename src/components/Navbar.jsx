import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <div class="grid grid-cols-3 gap-7 w-4/5 mx-auto sm:py-8 py-6">
            <div className='max-h-56'>
                <h5 className='font-primary font-extrabold md:text-4xl text--xl uppercase md:py-1 py-3'>sohanthink</h5>
            </div>
            <div className='max-h-56'>
                <ul className='flex gap-9 cursor-pointer justify-center font-primary font-normal uppercase items-center py-3 text-s '>
                    <li className='hidden md:block'> <NavLink className="ease-in duration-300" to="/">Home</NavLink></li>
                    <li className='hidden md:block'><NavLink className="ease-in duration-300" to="/about">About</NavLink></li>
                    <li className='hidden md:block'>Blogs</li>
                    <li className='hidden md:block'>Design</li>
                </ul>
            </div>
            <div className='max-h-56 flex justify-end py-3 gap-4'>
                <CiSearch className='text-2xl hidden sm:block' />
                <RxAvatar className='text-2xl hidden sm:block' />
                <FaBars className='text-2xl sm:hidden' />
            </div>
        </div>
    )
}

export default Navbar