import React from 'react'
import Image from '../../utilities/Image'
import Team from './Team'



const About = () => {


    return (
        <>
            <div className='w-11/12 mx-auto'>
                <Image className="w-full md:h-screen" source="https://images.pexels.com/photos/2127041/pexels-photo-2127041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>

            <div className='mx-auto space-y-4 py-14 font-primary w-11/12 md:w-2/4'>
                <h3 className='font-medium text-3xl'>Hello! Here we are.</h3>
                <p className='text-gray-500 text-xl font-thin'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p className='text-gray-500 text-xl font-thin'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>

            <div className='w-11/12 mx-auto flex gap-10'>
                <div className='w-1/2'><Image className="w-full" source="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></div>
                <div className='w-1/2'>
                    <Image className="w-full" source="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
            </div>

            <div className='mx-auto space-y-4 py-14 font-primary w-11/12 md:w-2/4'>
                <p className='text-gray-500 text-xl font-thin'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>

            <div className='bg-purple-100 w-11/12 mx-auto flex flex-col md:justify-between md:flex-row px-28 md:px-36 py-14 font-primary gap-5'>

                <div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>789</span>
                    <span className='uppercase'>perfect posts</span>
                </div>

                <div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>395</span>
                    <span className='uppercase'>perfect posts</span>
                </div>

                <div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>395</span>
                    <span className='uppercase'>perfect posts</span>
                </div>

                <div className='flex flex-col items-center space-y-2'>
                    <span className='text-7xl'>395</span>
                    <span className='uppercase'>perfect posts</span>
                </div>

            </div>

            {/* team part starts here */}
            <div className='grid grid-cols-12 w-11/12 mx-auto'>
                <div className='col-span-12 '>
                    <h2 className='font-primary text-4xl text-center font-bold pt-10'>Our Team</h2>
                    <h6 className=' text-gray-400 font-primary text-center pb-10 pt-2 underline'>Meet With Our Nice People..</h6>
                </div>
                <div className='col-span-4 p-5'>
                    <Team source="https://images.pexels.com/photos/18076420/pexels-photo-18076420/free-photo-of-farmer-smokes-cigarette-in-field-by-basket-with-tomatoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" memberName="Diana" title="Artist" description="tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                </div>
                <div className='col-span-4 p-5'>
                    <Team source="https://images.pexels.com/photos/5664990/pexels-photo-5664990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" memberName="Tomtom" title="Artist" description="tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                </div>
                <div className='col-span-4 p-5'>
                    <Team source="https://images.pexels.com/photos/14857237/pexels-photo-14857237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" memberName="HAnry" title="Artist" description="tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." />
                </div>

            </div>
        </>
    )
}

export default About