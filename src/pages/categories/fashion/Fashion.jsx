import React from 'react'
import CategoryBanner from '../../../components/CategoryBanner'
import CategoryBlog from '../CategoryBlog'

const Fashion = () => {
    return (
        <>
            <CategoryBanner
                category_name="fashion"
                category_heading="Trending Colors for Upcoming Spring"
                source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

            <div className='w-11/12 md:w-4/5 mx-auto'>
                <CategoryBlog />
            </div>
        </>
    )
}

export default Fashion