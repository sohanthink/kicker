import React from 'react'
import Image from '../../utilities/Image'
import { Link } from 'react-router-dom'

const CategoryBlog = ({ source, subcat, title, description, link }) => {
    return (
        <div className='space-y-5 group'>
            <div className="">
                <Image className="w-full max-h-[700] bg-cover object-cover" source={source} />
            </div>

            <h5 className='uppercase bg-black inline-block text-white text-sm rounded-full px-2 py-1'>{subcat}</h5>

            <div className=''>
                <h3 className="inline-block font-bold text-4xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-10 after:left-0 after:content-[''] after:bg-black group-hover:after:w-full">{title}</h3>
            </div>

            <p>{description}</p>

            <div>
                <Link to={link}>
                    <h5 className='uppercase bg-red-600 inline-block text-white text-sm rounded-full px-4 py-2'>Read More</h5>
                </Link>
            </div>


        </div>
    )
}

export default CategoryBlog