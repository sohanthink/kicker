import React from 'react'
import CategoryCard from './CategoryCard'
const Category = () => {
    return (
        <>
            <div className='grid grid-cols-12 sm:grid-cols-5 w-11/12 md:w-4/5 mx-auto gap-5 sm:py-10 py-5'>
                <div className="col-span-6 sm:col-span-1">
                    <CategoryCard image="https://images.pexels.com/photos/18325432/pexels-photo-18325432/free-photo-of-hiker-and-a-camera-standing-by-a-lake-in-the-forest-with-her-arms-spread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="worlds" link="https://sohanthink.com/" />
                </div>

                <div className="col-span-6 sm:col-span-1">
                    <CategoryCard className="col-span-6" image="https://images.pexels.com/photos/18257204/pexels-photo-18257204/free-photo-of-couple-on-a-hiking-trip.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Lifestyle" link="https://sohanthink.com/" />
                </div>

                <div className="col-span-6 sm:col-span-1">
                    <CategoryCard image="https://images.pexels.com/photos/11669968/pexels-photo-11669968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="NAture" link="https://sohanthink.com/" />
                </div>

                <div className="col-span-6 sm:col-span-1">
                    <CategoryCard image="https://images.pexels.com/photos/7625258/pexels-photo-7625258.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" category="People" link="https://sohanthink.com/" />
                </div>

                <div className="col-span-12 sm:col-span-1">
                    <CategoryCard image="https://images.pexels.com/photos/18325432/pexels-photo-18325432/free-photo-of-hiker-and-a-camera-standing-by-a-lake-in-the-forest-with-her-arms-spread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Hills and sea" link="https://sohanthink.com/" />
                </div>
            </div>

        </>
    )
}

export default Category