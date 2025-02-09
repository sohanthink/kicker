import React from 'react'
import CategoryBanner from '../../../components/CategoryBanner'
import CategoryBlog from '../CategoryBlog'
import Ads from '../../../components/Ads'
import Image from '../../../utilities/Image'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import BlogList from '../../../components/BlogList'

const Fashion = () => {
    return (
        <>
            <CategoryBanner
                category_name="fashion"
                category_heading="Trending Colors for Upcoming Spring"
                source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />


            <div className='w-11/12 mx-auto font-primary my-10 space-y-6'>
                <div className='w-3/4 mx-auto space-y-4 pb-2'>
                    <h6 className='text-sm md:text-2xl uppercase text-red-600 font-medium'>Fashion</h6>
                    <h2 className='text-2xl md:text-6xl font-bold text-gray-950/90'>The Cutest Fashion Trends of the Decade.</h2>
                    <p className='text-gray-950/90 font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quis voluptates soluta rerum, praesentium sequi eius ad officia accusantium facere! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quis voluptates soluta rerum, praesentium sequi eius ad officia accusantium facere!</p>

                    <p className='text-gray-950/90 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt eveniet esse commodi perspiciatis ipsum. Delectus aliquid cumque obcaecati minus doloribus eum nulla sit molestiae amet porro facere omnis, dolore quo vitae, corporis tempora aspernatur! Repellat, officia, asperiores magni ex quam est ad perspiciatis, eos nostrum rem aliquid distinctio facere?</p>
                </div>

                <Image source="https://images.pexels.com/photos/886404/pexels-photo-886404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                <div className='flex gap-3 items-center justify-center'>
                    <div className='p-6 rounded-full border-gray-300 border transition-all hover:animate-bounce text-blue-600 inline-block'> <FaFacebookF /> </div>
                    <div className='p-6 rounded-full border-gray-300 border transition-all hover:animate-bounce text-blue-600 inline-block'> <FaXTwitter /> </div>
                    <div className='p-6 rounded-full border-gray-300 border transition-all hover:animate-bounce text-blue-600 inline-block'> <FaYoutube /> </div>
                    <div className='p-6 rounded-full border-gray-300 border transition-all hover:animate-bounce text-blue-600 inline-block'> <FaInstagram /> </div>
                </div>
            </div>


            {/* scroll part starts here */}
            <div className='w-11/12 md:w-4/5 mx-auto grid grid-cols-12 gap-x-6 font-primary relative items-start'>

                <div className='col-span-12 md:col-span-8 '>
                    <div className='border-b-2 pb-9'>
                        <CategoryBlog
                            source="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            subcat="Mans"
                            title="Changing Your Lifestyle is Easy"
                            link="https://www.sohanthink.com"
                            description="Qed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Middle Post…" />
                    </div>
                    <div className='border-b-2 py-9'>
                        <CategoryBlog
                            source="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            subcat="Mans"
                            title="What Designers Can’t Solve"
                            link="https://www.sohanthink.com"
                            description="Qed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Middle Post…" />
                    </div>
                    <div className='py-9'>
                        <CategoryBlog
                            source="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            subcat="W-Mans" title="What Designers Can’t Solve"
                            link="https://www.sohanthink.com"
                            description="Qed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Middle Post…" />
                    </div>
                </div>

                {/* right portion of the fashin category page */}
                <div className='col-span-4 hidden md:block sticky top-0 right-0'>
                    <div>
                        <Ads />
                        <div className='py-14 space-y-4'>
                            <h2 className='text-center font-bold text-l uppercase'>Trending Posts </h2>
                            <h6 className="text-center text-red-800 text-sm font-bold mt-2">
                                X X X
                            </h6>
                            <div className='space-y-8 '>
                                <BlogList className='border-b-2 pb-4' image="https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=800" title="Nice to have this ooooooo." />
                                <BlogList className='border-b-2 pb-4' image="https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=800" title="Nice to have this ooooooo. " />
                                <BlogList image="https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=800" title="Nice to have this ooooooo." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Fashion