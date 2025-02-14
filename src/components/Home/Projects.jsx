import React from 'react';
import CourseCard from './CourseCard';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { PiTildeLight } from "react-icons/pi";
import { Fade, Rotate } from "react-awesome-reveal";
import insight_image from '../../images/insight_image.png'
import insight_admin2 from '../../images/insight_admin2.png'
import newLife_image from '../../images/newLife_image.png'
const HomeCourses = () => {
    const projects = [
        {
            id: 1,
            title: "Insight IAS Delhi Website",
            description: "Successfully developed, deployed, and currently maintaining the complete application (Website & Admin Panel) for Insight IAS, Delhi.",
            imgurl: insight_image,
            badges: [
                { name: "React", color: "badge-accent" },
                { name: "Node.js", color: "badge-success" },
                { name: "Express.js", color: "badge-neutral" },
                { name: "SQL Server", color: "badge-secondary" }
            ],
            projectType:"Full Stack"
        },
        {
            id: 2,
            title: "Admin Panel of Insight IAS",
            description: "Designed, developed, deployed, and currently maintaining the Admin Panel for Insight IAS, Delhi.",
            imgurl: insight_admin2,
            badges: [
                { name: "React", color: "badge-accent" },
                { name: "Node.js", color: "badge-success" },
                { name: "Express.js", color: "badge-neutral" },
                { name: "SQL Server", color: "badge-secondary" }
            ],
            projectType: "Full Stack"
        },
        {
            id: 3,
            title: "New Life Nasha Mukti Kendra Website",
            description: "Designed, developed, deployed, and currently maintaining the website for NEW LIFE Rehabilitation & De-Addiction Centre.",
            imgurl: newLife_image,
            badges: [
                { name: "React", color: "badge-accent" },
                { name: "TailwindCSS", color: "badge-success" },
                { name: "MaterialUI", color: "badge-primary" }
            ],
            projectType: "Frontend"
        }
    ];

    return (
        < div className='mt-3' id='projects'>
            <div className="bg-news-image bg-cover bg-center pb-3">
                <Fade triggerOnce={true} direction='left'>
                    <div className='h-[4.5rem] p-0 flex justify-center  text-7xl  text-cyan text-center  font-bold '><PiTildeLight className='p-0 m-0 transform' style={{ transform: 'scaleX(1.5) scaleY(0.7)' }} size={100} /></div>
                </Fade>
                <Fade triggerOnce={true} direction='right'>
                    <p className='text-3xl md:text-4xl text-slate-800 text-center pt-0 mt-0 font-bold font-nunito'>Selected Projects</p>
                </Fade>
                <p className="lg:text-lg text-md text-black font-rubik px-5 text-center">
                    Here are some selected projects I developed.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2  xl:grid-cols-4 p-8 pt-2 lg:px-20">
                {projects.map((course) => (
                    <Rotate triggerOnce={true}>
                        <div key={course.id} className="cursor-pointer p-2 bg-[#e7f4f6] rounded transition delay-75 duration-300 ease-in-out hover:scale-y-110 h-full flex flex-col">
                            <div className="badge bg-pink-500 text-white">{course.projectType}</div>
                            <div className="w-100 sm:h-36 h-44 p-1">
                                <img className="rounded-lg w-full sm:h-32 h-40 object-fill" src={course.imgurl} alt="" />
                            </div>
                            <div className="flex justify-around">
                                {
                                    course.badges.map(badge => {
                                        return <div className={`badge ${badge.color}`}>{badge.name}</div>
                                    })
                                }
                            </div>
                            <div className="p-2 flex-grow">
                                <p className="text-lg font-bold break-words my-1 font-nunito">{course.title}</p>
                                <p className="text-sm text-gray-600 break-words font-rubik">
                                    {course.description}
                                </p>
                            </div>
                            <div className="p-2">
                                <button className="bg-cyan p-1 text-white font-nunito text-sm rounded-sm">View</button>
                            </div>
                        </div>
                    </Rotate>
                ))}
            </div>

        </div>

    );
}

export default HomeCourses;
