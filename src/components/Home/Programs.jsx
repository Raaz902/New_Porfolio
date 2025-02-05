import React from 'react';
import CourseCard from './CourseCard';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { PiTildeLight } from "react-icons/pi";
import { Fade, Rotate } from "react-awesome-reveal";
import NA from '../../images/NA.jpg'
import twelveSteps from '../../images/12_Steps.jpg'
import { Link, useNavigate } from 'react-router-dom';
import rebt from '../../images/rebt.jpg'
import cbt from '../../images/cbt.jpg'
import relapseProgram from '../../images/relapseProgram.jpg';
import afterCare from '../../images/afterCare.jpg';
import familySuppProgram from '../../images/familySuppProgram.jpg';
import groupTherapyProgram from '../../images/groupTherapyProgram.jpg';
// import groupTherapyProgram from '../../images/groupTherapyProgram.jpg';
import LifeSkillDev from '../../images/LifeSkillDev.jpg';
import awarenessPrograms from '../../images/awarenessPrograms.jpg';


const Programs = () => {
    const navigate = useNavigate()
    const courses = [
        {
            id: 1,
            title: "Narcotics Anonymous",
            description: "A Narcotics Anonymous (NA) program at New Life Nasha Mukti Kendra could be highly beneficial for patients in recovery from drug addiction.",
            imgurl: NA
        },
        {
            id: 2,
            title: "12 Steps Program",
            description: "The 12-step program is a widely recognized framework used in various recovery and support groups, particularly in Alcoholics Anonymous (AA) and Narcotics Anonymous (NA)",
            imgurl: twelveSteps
        },


        {
            id: 3,
            title: "Relapse Prevention Programs",
            description: "Customized plans to help patients maintain sobriety and navigate challenges after completing their recovery journey.", imgurl: relapseProgram
        },
        {
            id: 4,
            title: "Aftercare Programs",
            description: "Ongoing support and follow- up services to help patients transition back into society while staying addiction - free.",
            imgurl: afterCare
        },
        {
            id: 5,
            title: "Family Support Program",
            description: "Specialized counseling for families to help them understand addiction, heal relationships, and provide the necessary support during the recovery process.",
            imgurl: familySuppProgram
        },
        {
            id: 6,
            title: "Group Therapy and Peer Support Program",
            description: "Interactive group therapy sessions that foster a sense of community, encourage mutual support, and provide a safe space to share experiences and coping strategies.",
            imgurl: groupTherapyProgram
        },
        {
            id: 7,
            title: "Life Skills Development Program",
            description: "Training and workshops to help patients develop essential life skills such as communication, decision-making, time management, and problem-solving.",
            imgurl: LifeSkillDev
        },
        {
            id: 8,
            title: "Awareness and Education Programs",
            description: "Workshops and sessions to raise awareness about the dangers of addiction, promote healthy living, and provide tools for prevention.",
            imgurl: awarenessPrograms
        },

    ];


    return (
        < div className=' ' id='programs'>
            <div className="bg-news-image bg-cover bg-center pb-3">
                <Fade triggerOnce={true} direction='left'>
                    <div className='h-[4.5rem] p-0 flex justify-center  text-7xl  text-cyan text-center  font-bold '><PiTildeLight className='p-0 m-0 transform' style={{ transform: 'scaleX(1.5) scaleY(0.7)' }} size={100} /></div>
                </Fade>
                <Fade triggerOnce={true} direction='right'>
                    <p className='text-3xl md:text-4xl text-slate-800 text-center pt-0 mt-0 font-bold font-nunito'>Programs We Conduct</p>
                </Fade>
                <p className="lg:text-lg text-md text-black font-rubik px-5">
                    At New Life Nasha Mukti Kendra, we offer a variety of programs designed to support individuals in their journey to recovery from addiction. Our programs focus on physical, emotional, and psychological healing, ensuring a well-rounded and comprehensive recovery process.

                </p>

                {/* <Fade triggerOnce={true} direction='up'>
                    <div className="flex justify-center mt-4">
                        <div className="md:flex justify-between w-[47rem] ">
                            <button className=' rounded-sm bg-[#ffffff] py-1.5 px-4 font-nunito font-extrabold hover:text-cyan hover:bg-white hover:shadow-md text-cyan bg-white shadow-md '>All Courses</button>
                         
                            <button className='rounded-sm bg-cyan text-[#ffffff] py-1.5 px-4 font-nunito font-extrabold hover:text-[#21a7d0] hover:bg-white hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105'>JEE (Mains + Advanced) </button>
                            <button className='rounded-sm bg-cyan text-[#ffffff] py-1.5 px-4 font-nunito font-extrabold hover:text-[#21a7d0] hover:bg-white hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105'>NEET UG</button>
                            <button className='rounded-sm bg-cyan text-[#ffffff] py-1.5 px-4 font-nunito font-extrabold hover:text-[#21a7d0] hover:bg-white hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Pre Foundation</button>
                        </div>
                    </div>
                </Fade> */}
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-3 p-8 pt-2 lg:px-28  grid-rows-auto">
                {
                    courses.map((course) => {
                        return <div className='relative cursor-pointer p-2 bg-[#e7f4f6] rounded   transition delay-75 duration-300 ease-in-out hover:scale-y-110' onClick={() => navigate('/description')}>
                            <div className="w-100 sm:h-36  h-44  p-1">
                                <img className='rounded-lg w-100  sm:h-32 h-40 object-fill' src={course.imgurl} alt="" />
                            </div>
                            <div className=" p-2 " >
                                <p className='text-sm font-bold break-words my-1 font-nunito'>{course.title}</p>
                                <p className='text-sm text-gray-600 break-words font-rubik'>
                                    {course.description}
                                </p>
                            </div>
                            <div className='p-2'>
                                <button className='absolute bottom-2 bg-cyan p-1 text-white font-nunito text-sm rounded-sm' onClick={() => navigate('/description')}>Click Here</button >
                            </div>
                        </div>

                    })
                }
            </div>
        </div>

    );
}

export default Programs;
