import React from 'react'
import Image from '../utilities/Image'
import { FaRegComment } from "react-icons/fa";


const BlogList = ({ image, title, className }) => {
    return (
        <div className={className}>
            <div className='font-primary flex gap-6 items-center group'>
                <div>
                    <div className="h-20 w-20 rounded-full overflow-hidden">
                        <Image className="w-full bg-cover rounded-full group-hover:scale-125 transition-all duration-300" source={image} />
                    </div>
                </div>
                <div>
                    <h4 className="font-medium text-lg xl:text-xl capitalize after:transition-all after:duration-300 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-6 after:left-0 after:content-[''] after:bg-slate-500 group-hover:after:w-full text-nowrap">{title}</h4>
                    <h6 className='flex gap-3 uppercase font-thin text-gray-500'>27 mar 2027 <span className='flex gap-1 justify-center items-center'><FaRegComment /> o </span> </h6>
                </div>
            </div>
        </div>
    )
}

export default BlogList