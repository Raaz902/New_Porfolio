import React from 'react';
import BlogCard from './BlogCard';
import { Fade } from 'react-awesome-reveal';

const Blogs = () => {

    return (
        <>

            <div className="justify-center items-center p-6  sm:px-10 md:px-16 bg-news-image bg-cover bg-center relative h-[40rem]">
                <Fade triggerOnce={true} direction='left'>
                    <p className='text-3xl text-slate-800 text-center pt-0 mt-0 font-bold font-nunito'>Latest News & Article's</p>
                </Fade>
                <Fade triggerOnce={true} direction='right'>
                    <p className='text-cyan text-md text-center font-semibold uppercase'>News Update</p>
                </Fade>
                <BlogCard />

                <div className="flex justify-center absolute left-0 right-0 z-10 -bottom-24 ">
                    <div className="grid grid-cols-2  md:w-9/12 w-11/12 gap-4 px-14 py-8 bg-news-letter">
                        <div className="text-white">
                            <p className=' text-lg font-[500] uppercase font-rubik'>Newsletter</p>
                            <p className='text-4xl break-wordstext-center pr-14 font-bold font-nunito'> Subscribe Us to join
                                Our Community</p>
                        </div>
                        <div className=" flex justify-center items-center">
                            <input type="text" placeholder='Enter Your Email' className='p-3 w-100  appearance-none focus:outline-none focus:ring-0' />
                            <button className='p-3 bg-indigo text-white px-5'>Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Blogs;
