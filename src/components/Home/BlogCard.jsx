import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useCallback, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const CardCarousel = () => {
    const courses = [
        { id: 1, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/jee-main.png" },
        { id: 2, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/medpg.png" },
        { id: 3, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid  lorem", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/jeemain.png" },
        { id: 4, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid", imgurl: "https://bansalclassesguwahati.com/wp-content/uploads/2024/01/courses-neet.jpg" },
        { id: 5, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/allendigital.png" },
        { id: 6, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/medpg.png" },
        { id: 7, title: " Lorem ipsum dolor sit amet consectetur adipisicing elit.", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/commerce.png" },
        { id: 8, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquid", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/jee-main.png" },
        { id: 9, title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ", description: "Adipisci optio similique quas, commodi, debitis sed inventore repudiandae aliquidw", imgurl: "https://www.allen.ac.in/assets/img/new-homepage/jee-main.png" },
    ];
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Autoplay,Pagination]}
                spaceBetween={1}
                navigation={{ screenX: 10 }}           
                direction="horizontal"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1200: { slidesPerView: 5 },
                    1300: { slidesPerView: 6 },
                    1400: { slidesPerView: 7 },
                }}
                autoplay={{
                    delay: 3000, // 3 seconds delay between slides
                    disableOnInteraction: false, // Keep autoplay running even after interaction
                }}
                // navigation={{
                  
                //     prevEl: prevRef.current, // Pass the ref for the previous button
                //     nextEl: nextRef.current, // Pass the ref for the next button
                // }}
                // onInit={(swiper) => {
                //     swiper.params.navigation.prevEl = prevRef.current;
                //     swiper.params.navigation.nextEl = nextRef.current;
                //     swiper.navigation.update();
                // }}
            >
                {courses?.map((course, index) => (
                    <SwiperSlide key={index} className="flex justify-center p-1 cursor-grab">
                        <div className=" rounded-lg shadow-md bg-white border ">
                            <div className="relative overflow-hidden rounded-t-lg h-48">
                                <img
                                    className="w-full h-full object-fill"
                                    src={course.imgurl}
                                    alt={course.title}
                                />
                            </div>
                            <div className="p-2">
                                <p className="text-sm text-black font-bold">{course.title}</p>
                                <p className="text-sm text-gray-600">{course.description}</p>
                            </div>
                            {/* <div className="p-4 border-t border-gray-200">
                            <button className="text-blue-500 font-medium hover:underline">Learn More</button>
                        </div> */}
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/* <span
                ref={prevRef}
                className="absolute top-1/2 left-0 z-9 p-2  bg-cyan text-white transform -translate-y-1/2"
            >
                <FaArrowLeft />
            </span>
            <span
                ref={nextRef}
                className="absolute top-1/2 right-0 z-9 p-2 bg-cyan text-white transform -translate-y-1/2"
            >
                <FaArrowRight />
            </span> */}
        </div>

    );
};

export default CardCarousel;
