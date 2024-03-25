import React, { useState } from 'react'
import Image from '../../utilities/Image'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { LuArrowRightCircle } from "react-icons/lu";


const TopBlogCard = ({ img, stitle, title, content }) => {

    let [icon, setIcon] = useState(false)
    let [card, setCard] = useState(false)

    // detect icon hover nad leave
    let handleiconover = () => {
        setIcon(true)
    }
    let handleIconLeave = () => {
        setIcon(false)
    }

    // detect card hover and leave hover
    let handleCardOver = () => {
        setCard(true)
    }
    let handleCardLeave = () => {
        setCard(false)
    }


    return (
        <>
            <div onMouseOver={handleCardOver} onMouseLeave={handleCardLeave} className='flex gap-4 sm:gap-8 flex-col sm:flex-row my-5'>
                <div className='w-full sm:w-2/5 overflow-hidden'>
                    <Image className={`w-full h-full object-cover transition ease-in-out duration-500 ${card && "scale-125"}`} source={img} />
                </div>
                <div className='flex flex-col gap-3 justify-center w-fulll sm:w-3/5'>
                    <h6 className='font-primary uppercase text-slate-500'>{stitle}</h6>

                    <h3 className={`font-primary text-slate-800 text-2xl sm:text-3xl font-medium transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-7 sm:after:top-9 after:left-0 after:content-[''] after:bg-slate-500 ${card && "after:w-3/4"}`}>{title}</h3>

                    <span className='uppercase font-semibold text-xs sm:text-sm'><strong>By sandra jones</strong> 19 feb 2029 22:11</span>

                    <p className='font-primary text-gray-400'>{content}</p>

                    <div className="cursor-pointer contents transition ease-in-out delay-150" onMouseOver={handleiconover} onMouseLeave={handleIconLeave}>
                        {
                            icon == false
                                ?
                                <MdOutlineArrowRightAlt className='transition ease-in-out delay-150' />
                                :
                                <LuArrowRightCircle className='transition ease-in-out delay-150' />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBlogCard