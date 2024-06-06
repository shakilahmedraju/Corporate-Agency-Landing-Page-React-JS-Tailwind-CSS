import React from 'react';
import { Carousel } from "flowbite-react";
import banner from '../assets/banner.png';

const Home = () => {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel pauseOnHover className='w-full mx-auto '>
                   {/* slide 1 */}
                    <div className="flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12">
                        <div className=''>
                            <img src={banner} alt="" width={400} />
                        </div>
                        {/* Hero Text 1 */}
                        <div className='md:w-1/2'>
                            <h1 className='flex flex-col text-5xl font-semibold mb-4 text-neutralDGrey leading-snug'>Lessons and insights 
                                <span className='text-brandPrimary leading-snug'>from 8 years</span>
                            </h1>
                            <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    {/* slide 2 */}
                    <div className="flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12">
                        <div className=''>
                            <img src={banner} alt="" width={400} />
                        </div>
                        {/* Hero text 2 */}
                        <div className='md:w-1/2'>
                            <h1 className='flex flex-col text-5xl font-semibold mb-4
                             text-neutralDGrey leading-snug'>Grow Your business 
                                <span className='text-brandPrimary leading-snug'>within 5months</span>
                            </h1>
                            <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className=' btn-primary'>Register</button>
                        </div>
                    </div>
                </Carousel>
            </div>
            
        </div>
    );
};

export default Home;