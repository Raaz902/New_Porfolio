import React from 'react';
import CourseCard from './CourseCard';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { PiTildeLight } from "react-icons/pi";
import { Fade, Rotate } from "react-awesome-reveal";
import insight_image from '../../images/insight_image.png'
import insight_admin2 from '../../images/insight_admin2.png'
import newLife_image from '../../images/newLife_image.png'
import crafterHack from '../../images/crafterHack.png'
import { Link } from 'react-router-dom';
const HomeCourses = () => {
    const projects = [
        {
            id: 3,
            title: "Crafter Hack | DSA Learner's Platform",
            description: "Sole contributor. Built a DSA platform with problem-solving, live coding, leaderboards, mock interviews, and 75 hard challenges. Increased coding engagement by 40% through a real-time collaborative coding environment using WebSockets, weekly challenges, and automated reminders.",
            imgurl: crafterHack,
            badges: [
                { name: "MERN Stack", color: "badge-accent" },
                { name: "Socket.io", color: "badge-success" }
            ],
            projectType: "Full Stack",
            url: 'https://crafterhack.com/'
        },
        {
            id: 1,
            title: "Insight IAS Delhi | UPSC Coaching Institute",
            description: "Lead Developer. Built and maintained the web platform with modules for courses, Test Series, Online Exams, Books, Blogs, Current Affairs, Open Quizzes, and an admin panel for full module management.",
            imgurl: insight_image,
            badges: [
                { name: "React", color: "badge-accent" },
                { name: "Node.js", color: "badge-success" },
                { name: "Express.js", color: "badge-neutral" },
                { name: "SQL Server", color: "badge-secondary" }
            ],
            projectType: "Full Stack",
            url: 'https://insightdelhi.com/'
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
            projectType: "Full Stack",
            url: ''
        },
        {
            id: 4,
            title: "New Life Nasha Mukti Kendra Website",
            description: "Designed, developed, deployed, and currently maintaining the website for NEW LIFE Rehabilitation & De-Addiction Centre.",
            imgurl: newLife_image,
            badges: [
                { name: "React", color: "badge-accent" },
                { name: "TailwindCSS", color: "badge-success" },
                { name: "MaterialUI", color: "badge-primary" }
            ],
            projectType: "Frontend",
            url: 'https://nashamukti.in/'
        },

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 pb-8 pt-2 lg:px-20">
                {projects.map((course) => (
                    <Rotate triggerOnce={true} key={course.id}>
                        <div className="cursor-pointer p-2 bg-[#e7f4f6] rounded transition delay-75 duration-300 ease-in-out hover:scale-y-105 h-full flex flex-col">
                            <div className="badge bg-pink-500 text-white pb-3">{course.projectType}</div>
                            <div className="w-100 sm:h-36 h-44 p-1">
                                <img className="rounded-lg w-full sm:h-32 h-40 object-cover object-top" src={course.imgurl} alt="" />
                            </div>
                            <div className="flex flex-wrap justify-around gap-1">
                                {
                                    course.badges.map(badge => {
                                        return <div className={`badge p-1 ${badge.color}`}>{badge.name}</div>
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
                                <a href={course.url} target='_blank'>
                                    <button disabled={!course.url} className={`${course.url ? 'bg-cyan' : 'bg-gray-400'} p-1 text-white font-nunito text-sm rounded-sm`}>{course?.url ? "View Project" : "Can't Share"}</button>
                                </a>
                            </div>
                        </div>
                    </Rotate>
                ))}
            </div>

        </div>

    );
}

export default HomeCourses;
