import React from 'react'

const Ads = () => {
    return (
        <div className="bg-[url('https://images.pexels.com/photos/4200287/pexels-photo-4200287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-80 w-full bg-cover object-cover">
            <div className='bg-black/50 w-full h-full flex flex-col justify-center items-center text-white gap-2'>
                <h2 className='text-4xl'>Kicked Ho</h2>
                <span className='uppercase bg-red-600 text-sm rounded-full px-3 py-1'>Buy Now</span>
            </div>
        </div>
    )
}

export default Ads