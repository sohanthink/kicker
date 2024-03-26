import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const BlogSlider = () => {

    let [card, setCard] = useState(false)

    // detect card hover and leave hover
    let handleCardOver = () => {
        setCard(true)
    }
    let handleCardLeave = () => {
        setCard(false)
    }

    return (
        <div className=''>
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
                <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} >
                    <div className="h-[600px] font-primary bg-no-repeat bg-cover bg-middle group" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                        <div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">hills</h6>
                            {/* <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3> */}

                            <h3 className={`font-bold sm:text-4xl py-4 font-primary text-white text-2xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-14 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Exotic Plants Discovery</h3>

                            <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} >
                    <div className="h-[600px] font-primary bg-no-repeat bg-cover bg-middle group" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                        <div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">news</h6>

                            {/* <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3> */}

                            <h3 className={`font-bold sm:text-4xl py-4 font-primary text-white text-2xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-14 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Exotic Plants Discovery</h3>

                            <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} >
                    <div className="h-[600px] font-primary bg-no-repeat bg-cover bg-middle group" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>

                        <div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                            <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600 ">news</h6>

                            <h3 className={`font-bold sm:text-4xl py-4 font-primary text-white text-2xl transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-14 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Exotic Plants Discovery</h3>
                            <span className='uppercase font-semibold'>By sandra jones 19 feb 2029 22:11</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BlogSlider