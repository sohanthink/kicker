import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const HeroSlider = () => {
    return (
        <div className='w-4/5 mx-auto p-2'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Parallax]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <div className="h-[600px] bg-no-repeat bg-cover bg-middle hover:scale-125" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6479554/pexels-photo-6479554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                        <div className='bg-slate-500/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className='uppercase rounded-full bg-slate-900 text-white px-3 py-1 '>news</h6>
                            <h3 className='font-bold text-6xl py-4'>Exotic Plants Discovery</h3>
                            <span className='uppercase font-semibold'>By sandra jones 19 feb 2029 22:11</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[600px] bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1379464/pexels-photo-1379464.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                        <div className='bg-slate-500/50 h-full'>
                            <h3>nice Lorem ipsum dolor sit.</h3>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HeroSlider