import React from 'react'
import TopBlogCard from './TopBlogCard'
import BannerBlog from './BannerBlog'

const Blog = () => {
    return (
        <div className='w-11/12 md:w-4/5 mx-auto grid grid-cols-12'>
            <div className='sm:col-span-8 col-span-12'>
                <TopBlogCard img='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800' content="Changing your vision of many things is hard, but possible. Try these…" stitle='branding' title='Being a Brand Expert' />


                <BannerBlog />

                <TopBlogCard img='https://images.pexels.com/photos/1311587/pexels-photo-1311587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' content="We have gathered several projects that will catch your interest as a…" stitle='DESIGN' title='Trending Architecture Styles' />


                <TopBlogCard img='https://images.pexels.com/photos/2228183/pexels-photo-2228183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' content="Every now and then a designer needs help getting his projects organized" stitle='DEv-P' title='Top Modern Apps and Gadgets' />

            </div>
            <div className='sm:col-span-4 hidden sm:block'>nice</div>
        </div>
    )
}

export default Blog