import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { Typography } from '@mui/material';

const InfiniteScrolling = ({ images, speed = 5000, direction }) => {
    const [directions, setDirections] = useState({ start: 0, end: -100 });



    useEffect(() => {
        if (direction === 'right-to-left') {
            setDirections({ start: 0, end: -100 });
        } else {
            setDirections({ start: -100, end: 0 });
        }
    }, [])

    return (
        <div className="h-[8rem] bg-primary overflow-hidden relative flex items-center">
            <div className="flex absolute" >
                <section className='infinite-scroll-section flex ' style={{ "--speed": `${speed}ms`, "--translate-start": `${directions.start}%`, "--translate-end": `${directions.end}%` }}>
                    {images.map(({ id, image }) => (
                        <div className="w-[12rem] h-[8rem] p-2 bg-indigo" key={id}>
                            <img className='w-[12rem] h-[7rem] object-fill rounded-md' src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section className='infinite-scroll-section flex ' style={{ "--speed": `${speed}ms`, "--translate-start": `${directions.start}%`, "--translate-end": `${directions.end}%` }}>
                    {images.map(({ id, image }) => (
                        <div className="w-[12rem] h-[8rem] p-2 bg-indigo" key={id}>
                            <img className='w-[12rem] h-[7rem] object-fill rounded-md' src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section className='infinite-scroll-section flex ' style={{ "--speed": `${speed}ms`, "--translate-start": `${directions.start}%`, "--translate-end": `${directions.end}%` }}>
                    {images.map(({ id, image }) => (
                        <div className="w-[12rem] h-[8rem] p-2 bg-indigo" key={id}>
                            <img className='w-[12rem] h-[7rem] object-fill rounded-md' src={image} alt={id} />
                        </div>
                    ))}
                </section>

            </div>
        </div>
    );
}



const InfiniteScrollingMainComp = ({ images, speed = 5000 }) => {

    return ( 

        <div className="relative overflow-hidden ">
            {/* The actual content */}
            <div className="py-3 bg-indigo">
                <InfiniteScrolling images={images} speed={speed} direction="right-to-left" />
                <InfiniteScrolling images={images} speed={speed} direction="left-to-right" />
                <InfiniteScrolling images={images} speed={speed} direction="right-to-left" />
            </div>

            {/* Blurred and gradient area */}
            {/* <div className="absolute inset-0 left-0 w-2/3 h-full ">
                <div className="absolute inset-0 left-0 w-full h-full bg-gradient-to-r from-cyan via-[#6d81af] to-transparent"></div>

                <div className="absolute inset-0 left-0 w-full h-full backdrop-blur-lg"
                    style={{
                        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 50%)',
                        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 50%)',
                    }}
                />


                <div className="absolute px-20 xl:px-32 text-white py-24">
                    <p className=' text-5xl font-bold'> BANSAL Stars</p>
                    <p className=' text-2xl font-semibold'> Uncover the Journey to Rise and Shine</p>
                    <button className='z-10 text-sm bg-white text-black rounded px-4 py-2 font-semibold hover:bg-black hover:text-white'>Watch Video</button>
                </div>
            </div> */}
          

        </div>





    );
}

export default InfiniteScrollingMainComp;

