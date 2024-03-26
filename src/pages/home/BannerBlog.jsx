import React, { useState } from 'react'

const BannerBlog = ({ image }) => {

    let [card, setCard] = useState(false)

    // detect card hover and leave hover
    let handleCardOver = () => {
        setCard(true)
    }
    let handleCardLeave = () => {
        setCard(false)
    }

    return (
        <div onMouseOver={handleCardOver}
            onMouseLeave={handleCardLeave}
            className="h-[500px] font-primary bg-no-repeat bg-cover bg-middle group"
            style={{ backgroundImage: `url(${image})` }}>

            <div className='bg-slate-950/50 h-full text-white flex justify-center items-center flex-col'>
                {/* <h6 className='uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm'>news</h6> */}

                <h6 className="uppercase rounded-full bg-slate-900 text-white px-4 py-1 text-sm transition-all duration-500 group-hover:bg-red-600">news</h6>

                {/* <h3 className='font-bold text-xl sm:text-6xl py-4'>Exotic Plants Discovery</h3> */}

                <h3 className={`font-primary text-white text-3xl py-4 sm:text-6xl font-medium transition-all after:transition-all after:duration-500 relative after:absolute after:w-0 after:h-1 after:top-14 sm:after:top-20 after:left-0 after:content-[''] after:bg-white ${card && "after:w-full"}`}>Exotic Plants Discovery</h3>

                <span className='uppercase font-semibold'>By sandra jones <i>19 feb 2029 22:11</i></span>
            </div>
        </div>
    )
}

export default BannerBlog