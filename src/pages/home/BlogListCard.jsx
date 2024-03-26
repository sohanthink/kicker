import React from 'react'
import BlogList from '../../components/BlogList'

const BlogListCard = () => {
    return (
        <div className='font-primary py-10 border-b border-gray-300'>
            <h2 className='text-center font-bold text-l uppercase'>dont miss</h2>
            <h6 className="text-center text-red-800 text-sm font-bold mt-2">
                X X X
            </h6>
            <div className='space-y-7'>
                <BlogList image="https://kicker.axiomthemes.com/wp-content/uploads/2020/01/post-36-copyright-410x430.jpg" title="Soundproof Headphones" />

                <BlogList image="https://kicker.axiomthemes.com/wp-content/uploads/2020/01/post-127-copyright-410x430.jpg" title="build your own digital world" />

                <BlogList image="https://kicker.axiomthemes.com/wp-content/uploads/2020/01/post-160-copyright-410x430.jpg" title="pandemic after shock" />
            </div>
        </div>
    )
}

export default BlogListCard