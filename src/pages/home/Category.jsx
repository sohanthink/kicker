import React from 'react'
import CategoryCard from './CategoryCard'
const Category = () => {
    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-5 w-4/5 mx-auto gap-5 py-4'>
                <CategoryCard className="col-span-1" image="https://images.pexels.com/photos/18325432/pexels-photo-18325432/free-photo-of-hiker-and-a-camera-standing-by-a-lake-in-the-forest-with-her-arms-spread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="worlds" link="https://sohanthink.com/" />

                <CategoryCard className="" image="https://images.pexels.com/photos/18257204/pexels-photo-18257204/free-photo-of-couple-on-a-hiking-trip.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Lifestyle" link="https://sohanthink.com/" />

                <CategoryCard className="" image="https://images.pexels.com/photos/11669968/pexels-photo-11669968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="NAture" link="https://sohanthink.com/" />

                <CategoryCard className="col-span-2" image="https://images.pexels.com/photos/7625258/pexels-photo-7625258.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" category="People" link="https://sohanthink.com/" />

                <CategoryCard className="" image="https://images.pexels.com/photos/18325432/pexels-photo-18325432/free-photo-of-hiker-and-a-camera-standing-by-a-lake-in-the-forest-with-her-arms-spread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" category="Hills and sea" link="https://sohanthink.com/" />

            </div>

        </>
    )
}

export default Category