import React from 'react'
import { FaRegComment } from 'react-icons/fa6'
import Image from "../utilities/Image"


const CategoryBanner = ({ source, category_name, category_heading }) => {
    return (
        <div className='flex w-full md:h-screen h-96'>
            <div className='md:flex justify-center flex-col items-center font-primary w-1/2 font-semibold hidden'>
                <div className='md:w-3/4 w-full flex justify-center flex-col items-center text-center md:gap-5 gap-2'>
                    <h5 className='text-red-500 uppercase'>{category_name}</h5>
                    <h2 className='text-gray-950/90 md:text-5xl text-2xl leading-6'>{category_heading}</h2>
                    <h6 className='hidden  md:flex gap-5 uppercase text-sm font-thin text-gray-500'>
                        <b>By sandra jones</b> 27 mar 2027 <span className='flex gap-1 justify-center items-center'><FaRegComment /> o </span>
                    </h6>
                </div>
            </div>
            <div className='w-full md:w-1/2 md:h-screen h-96'>
                <Image className="w-full h-full bg-cover object-cover" source={source} />
            </div>
        </div>

    )
}

export default CategoryBanner