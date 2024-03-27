import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import CategoryCard from '../pages/home/CategoryCard';



const Navbar = () => {
    return (
        <>
            <div class="grid grid-cols-3 gap-7 w-11/12 md:w-4/5 mx-auto sm:py-8 py-6 relative">
                <div className='max-h-56'>
                    <h5 className='font-primary font-extrabold md:text-4xl text--xl uppercase md:py-1 py-3'>sohanthink</h5>
                </div>
                <div className='max-h-56'>
                    <ul className='flex gap-9 cursor-pointer justify-center font-primary font-normal uppercase items-center py-3 text-s '>
                        <li className='hidden md:block'> <NavLink className="ease-in duration-300" to="/">Home</NavLink></li>
                        <li className='hidden md:block'><NavLink className="ease-in duration-300" to="/about">About</NavLink></li>
                        <li class='hidden md:block group '>
                            Category

                            {/* dropdown categories */}
                            <div class="dropdownp-5 pt-10 left-0 z-10 absolute md:w-full hidden group-hover:block rounded">
                                <div class="card bg-gray-950/90 flex justify-between p-10">
                                    <div>
                                        <NavLink className="ease-in duration-300" to="/categories/fashion">
                                            <CategoryCard link="/categories/fashion" image="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Fashion" />
                                            <h3 className='text-white font-primary pt-3'>ami amar r keo nai</h3>
                                            <h5 className='text-white font-primary pt-2 text-sm'>nai  erfkkvndf </h5>
                                        </NavLink>
                                    </div>

                                    <CategoryCard link="" image="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Fashion" />

                                    <CategoryCard link="" image="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Fashion" />

                                    <CategoryCard link="" image="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Fashion" />


                                    <CategoryCard link="" image="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Fashion" />
                                </div>
                            </div>
                        </li>
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
            {/* <div className="dropdown bg-red-700 p-5 w-11/12 md:w-4/5 h-20 mx-auto hidden group-hover:block">
                <div className="card"></div>
            </div> */}
        </>
    )
}

export default Navbar