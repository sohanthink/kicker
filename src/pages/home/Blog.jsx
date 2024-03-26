import React from 'react'
import TopBlogCard from './TopBlogCard'
import BannerBlog from './BannerBlog'
import { Link } from 'react-router-dom'
import HeroSlider from './HeroSlider'
import Follow from '../../components/Follow'
import BlogListCard from './BlogListCard'
import BlogSlider from './BlogSlider'

const Blog = () => {
    return (
        <div className='w-11/12 md:w-4/5 h-[1400px] mx-auto grid grid-cols-12 gap-4'>
            {/* left portion of the blog parts */}
            <div className='xl:col-span-8 col-span-12 h-full overflow-y-auto'>
                <div className='border-b-[1px] border-slate-400 mb-14 sm:mb-12'>
                    <TopBlogCard img='https://images.pexels.com/photos/1311587/pexels-photo-1311587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' content="We have gathered several projects that will catch your interest as a…" stitle='DESIGN' title='Trending Architecture Styles' />
                </div>

                <div>
                    <BannerBlog image="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className='border-b-[1px] border-slate-400 mb-14 sm:mb-12'>
                    <TopBlogCard img='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800' content="Changing your vision of many things is hard, but possible. Try these…" stitle='branding' title='Being a Brand Expert' />
                </div>

                <div className='border-b-[1px] border-slate-400 mb-14 sm:mb-12'>
                    <TopBlogCard img='https://images.pexels.com/photos/2228183/pexels-photo-2228183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' content="Every now and then a designer needs help getting his projects organized" stitle='DEv-P' title='Top Modern Apps and Gadgets' />
                </div>

                <div>
                    <BannerBlog image="https://images.pexels.com/photos/1571734/pexels-photo-1571734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>

                <div className='border-b-[1px] border-slate-400 mb-14 sm:mb-12'>
                    <TopBlogCard img='https://images.pexels.com/photos/2228183/pexels-photo-2228183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' content="Every now and then a designer needs help getting his projects organized" stitle='DEv-P' title='Top Modern Apps and Gadgets' />
                </div>

                <div className='border-b-[1px] border-slate-400 mb-14 sm:mb-12'>
                    <TopBlogCard img='https://images.pexels.com/photos/2228183/pexels-photo-2228183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' content="Every now and then a designer needs help getting his projects organized" stitle='DEv-P' title='Top Modern Apps and Gadgets' />
                </div>

                {/* older post button */}
                <div className="my-16">
                    <Link target='_blank' to="https://www.sohanthink.com">
                        <span className='py-4 px-8 border-[1px] border-slate-600 rounded-full uppercase underline font-bold text-sm hover:text-red-800 hover:border-red-800 transition-all duration-300'>older posts</span>
                    </Link>
                </div>
            </div>

            {/* right portion of the blogs */}
            <div className='col-span-4 hidden xl:block p-5'>
                {/* <HeroSlider /> */}
                <Follow />
                <BlogListCard />
                <BlogSlider />
            </div>
        </div>
    )
}

export default Blog