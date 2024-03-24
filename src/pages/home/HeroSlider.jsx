import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const HeroSlider = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Parallax, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <div className="h-[700px] font-primary bg-no-repeat bg-cover bg-middle" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6479554/pexels-photo-6479554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                        <div className='bg-slate-500/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className='uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm'>news</h6>
                            <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3>
                            <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[700px] font-primary bg-no-repeat bg-cover bg-middle" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1379464/pexels-photo-1379464.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>

                        <div className='bg-slate-500/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className='uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm'>news</h6>
                            <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3>
                            <span className='uppercase font-semibold'>By sandra jones 19 feb 2029 22:11</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSlider