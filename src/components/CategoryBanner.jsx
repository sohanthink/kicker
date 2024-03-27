import React from 'react'
import { FaRegComment } from 'react-icons/fa6'
import Image from "../utilities/Image"


const CategoryBanner = ({ source, category_name, category_heading }) => {
    return (
        <div className='flex w-full h-screen'>
            <div className='flex justify-center flex-col items-center font-primary w-1/2 font-semibold'>
                <div className='w-3/4 flex justify-center flex-col items-center  text-center gap-5'>
                    <h5 className='text-red-500 uppercase'>{category_name}</h5>
                    <h2 className='text-gray-950/90 text-5xl'>{category_heading}</h2>
                    <h6 className='flex gap-5 uppercase text-sm font-thin text-gray-500'>
                        <b>By sandra jones</b> 27 mar 2027 <span className='flex gap-1 justify-center items-center'><FaRegComment /> o </span> </h6>
                </div>
            </div>
            <div className='w-1/2 h-screen'>
                <Image className="w-full h-full bg-cover object-cover" source={source} />
            </div>
        </div>

    )
}

export default CategoryBanner