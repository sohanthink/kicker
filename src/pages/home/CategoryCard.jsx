import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({ link, image, category }) => {
    return (
        <Link to={link}>
            <div className='bg-slate-500 h-36 overflow-hidden relative'>
                <img className='h-full w-full object-cover' src={image} alt="" />
                <span className='absolute inset-0 flex justify-center items-center text-white hover:font-bold transition-all bg-slate-500/50'>{category}</span>
            </div>
        </Link>
    )
}

export default CategoryCard