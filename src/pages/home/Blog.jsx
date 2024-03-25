import React from 'react'
import TopBlogCard from './TopBlogCard'

const Blog = () => {
    return (
        <div className='w-11/12 md:w-4/5 mx-auto grid grid-cols-12'>
            <div className='col-span-8'>
                <TopBlogCard img='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800' content="Changing your vision of many things is hard, but possible. Try these…" stitle='branding' title='Being a Brand Expert' />

                <TopBlogCard img='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800' content="Changing your vision of many things is hard, but possible. Try these…" stitle='branding' title='Being a Brand Expert' />

                <TopBlogCard img='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800' content="Changing your vision of many things is hard, but possible. Try these…" stitle='branding' title='Being a Brand Expert' />

            </div>
            <div className='col-span-4'>nice</div>
        </div>
    )
}

export default Blog