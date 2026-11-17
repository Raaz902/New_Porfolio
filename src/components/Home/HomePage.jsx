import React, { useState } from 'react';
import CarouselComponent from './CarouselComponent';
import Projects from './Projects';
import PastStatistics from './PastStatistics';
import InfiniteScrollingMainComp from './InfiniteScrolling';
import Blogs from './Blogs';
import Experience from './Experience';
import Programs from './Programs';
import Contact from './Contact';
import { Link } from 'react-scroll';
import final_Home_Image from '../../components/images/raaz_new.jpg'
import { Modal } from 'react-bootstrap';
import Education from './Education';
import TechStack from './TechStack/TechStack';
import Achievements from './Achievements';

const RESUME_URL = 'https://drive.google.com/file/d/1CMUbFiRzFC6BDCG_VSz3IButVKgdIsXr/view';


const HomePage = () => {

  const [show, setShow] = useState(false);


  return (
    <div className=''>
      <div className="w-full bg-news-image bg-cover" id="home">
        <div className="flex flex-col-reverse md:grid grid-cols-2 items-center py-2 px-5 md:px-12">
          {/* Left Section: Introduction */}
          <div className="flex justify-center items-center md:py-2">
            <div className="max-w-lg ">
              <span className="text-md text-cyan font-rubik font-medium sm:mt-0 md:mt-3">
              Hi there,
              </span>
              <br />
              <span className=" lg:text-2xl text-xl text-black font-nunito font-bold leading-tight">
               I am Mohammad Raaz, a Software Engineer &amp; Full Stack Developer.
              </span>
              <p className="lg:text-lg text-md  text-black font-rubik mt-3">
                <strong>Full Stack Developer</strong> with <strong className="text-cyan">4 years of experience</strong> in building cross-platform applications, optimizing systems, and enhancing user experiences. Currently working as a <strong>Software Development Engineer</strong> at{' '}
                <a href="https://www.storable.com" target="_blank" rel="noopener noreferrer" className="font-bold text-cyan no-underline hover:underline">Storable India</a>, building scalable <strong>microservices</strong>, <strong>RESTful APIs</strong>, and cloud-native solutions on <strong>AWS</strong>. Strong <strong>problem-solving</strong> skills with a focus on delivering results in fast-paced environments, quick to adapt to evolving technologies and committed to continuous learning.
               <br />
                <span className="italic">Let’s collaborate to turn your ideas into reality and create innovative solutions that drive success!</span>
              </p>
              <div className="mt-6 flex justify-between items-center gap-x-4 p-2">
                <a href="https://wa.me/919750916786" target="_blank" className="no-underline" rel="noopener noreferrer">
                  <span
                    onClick={() => setShow(true)}
                    className="cursor-pointer text-white bg-cyan transition-all duration-300 rounded-full md:py-3 md:px-6 px-4 py-2 font-bold shadow-lg"
                  >
                    HIRE ME
                  </span>
                </a>

                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <button className="block md:hidden cursor-pointer text-white bg-green-500 hover:bg-green-600 transition duration-300 rounded-full md:py-3 md:px-6 px-4 py-2 font-bold shadow-lg">
                    RESUME
                  </button>
                </a>
              </div>


            </div>
          </div>

          {/* Right Section: Image */}
          <div className="grid grid-cols-1 justify-items-center sm:gap-20 gap-10">
            <img
              className="rounded-full h-60 w-60 shadow-lg border-4 border-cyan mt-3 mb-0"
              src={final_Home_Image}
              alt="Muhammad Raaz"
            />
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className='no-underline'
            >
              <button
                className="hidden md:block cursor-pointer text-white bg-cyan hover:bg-cyan-dark transition duration-300 rounded-full md:py-3 md:px-6 px-4 py-2 font-bold shadow-lg"
              >
                DOWNLOAD RESUME
              </button>
            </a>

           

          </div>


        </div>
      </div>


      {/*  */}
      <Experience />
      <TechStack/>
      <Projects />
      <Achievements />
      <Education />
      {/* <PastStatistics /> */}
      {/* <Contact /> */}
      {/* <InfiniteScrollingMainComp images={images} speed={images.length * 2000} /> */}
      {/* <Blogs /> */}

      {/* contact modal */}
      {/* <Modal
        show={show}
        size='xl'
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        backdrop='static'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <p className='text-2xl font-nunito font-bold text-start  text-cyan'>Get In Touch</p>
            <p className='text-sm font-rubik '>Take the First Step – We’re Just a Call Away!</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Contact setShow={setShow} />
        </Modal.Body>
      </Modal> */}


    </div>
  );
}

export default HomePage;
