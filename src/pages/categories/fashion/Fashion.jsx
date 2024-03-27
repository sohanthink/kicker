import React from 'react'
import { FaRegComment } from 'react-icons/fa6'
import Image from '../../../utilities/Image'

const Fashion = () => {
    return (
        <div className='flex w-full h-screen'>
            <div className='w-1/2 flex justify-center flex-col items-center'>
                <h5>fashion</h5>
                <h2>Trending Colors for Upcoming Spring</h2>
                <h6 className='flex gap-5 uppercase text-sm font-thin text-gray-500'>
                    <b>By sandra jones</b> 27 mar 2027 <span className='flex gap-1 justify-center items-center'><FaRegComment /> o </span> </h6>
            </div>
            <div className='w-1/2 h-screen'>
                <Image className="w-full h-full bg-cover object-cover" source="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </div>
    )
}

export default Fashion