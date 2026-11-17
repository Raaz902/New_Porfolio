import React from 'react';
import { PiTildeLight } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";
import { TechstackList } from './TechStackList'; // Assuming TechstackList is imported correctly
import "./TechStack.css"; // Assuming you have a CSS file for additional styles

const TechStack = () => {
    return (
        <div className="mt-4" id="techstack">
            {/* Header Section */}
            <div className="bg-news-image bg-cover bg-center pb-3">
                <Fade triggerOnce={true} direction="left">
                    <div className="h-[4.5rem] p-0 flex justify-center text-7xl text-cyan text-center font-bold">
                        <PiTildeLight className="scale-x-150 scale-y-70" size={100} />
                    </div>
                </Fade>
                <Fade triggerOnce={true} direction="right">
                    <p className="text-3xl md:text-4xl text-slate-800 text-center mt-0 font-bold font-nunito">
                        Technology Stack
                    </p>
                </Fade>
            </div>

            {/* Timeline Section */}
            <div className="bg-gray-100 p-2 md:px-5 my-2 mx-3 md:mx-10 lg:mx-20 border rounded grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-1 md:gap-x-4">
                {TechstackList.map((tech, index) => (
                    <Fade key={index} triggerOnce={true}>
                        <div className="hover-class flex items-center p-2 md:p-3 bg-white m-1 md:m-2 cursor-pointer text-[#21a7d0] rounded-lg  shadow-md ">
                            <tech.icon className="mx-1 shrink-0 text-2xl md:text-4xl transition duration-100" />
                            <span className="ml-1 md:ml-2 text-sm md:text-lg font-medium leading-tight break-words min-w-0 transition duration-300">{tech.name}</span>
                        </div>
                    </Fade>
                ))}
            </div>

        </div>
    );
};

export default TechStack;
