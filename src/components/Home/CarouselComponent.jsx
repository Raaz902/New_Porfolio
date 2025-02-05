import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
    const carouselImages = [
        { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrov108Nvu6crsgDGrPJzaXdiTdLzqGNlG7A&s" },
        { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOC6D0oxPpD-dvxiA9SZXsCapCfSMHeG87g&s" },
        { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcWbCD1DsZaWweBpWlRq1lwZ_Ql2WvTf9Og&s" },
        { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri5eSxOmxf7qLAhlu7wwO4jtZU0HKQsNYew&s" },
        { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpjQP1wk3_3Ks6vjfDkUIIgacL7Dx5bLYsA&s" },
        { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZunVkyxNAqJtrzZO7M6b4coD1KVPWCo_rw&s" }
    ];

    return (
        <div className=' bg-[#f9f8f8]'>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay autoFocus /* onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */>
                {
                    carouselImages.map(item => {
                        return <div className='w-full' key={item.id} >
                            <img style={{ height: "100%",  }} alt='Carousel-image' src={item.image} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                    })
                }
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
