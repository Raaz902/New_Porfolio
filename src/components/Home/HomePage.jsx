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


const HomePage = () => {

  const [show, setShow] = useState(false);


  return (
    <div className=''>
      <div className="w-full bg-news-image bg-cover" id="home">
        <div className="flex flex-col-reverse md:grid grid-cols-2 items-center py-2 px-5 md:px-12">
          {/* Left Section: Introduction */}
          <div className="flex justify-center items-center ">
            <div className="max-w-lg ">
              <p className="text-md text-cyan font-rubik font-medium sm:mt-0 md:mt-3">
                Hello,
              </p>
              <p className="lg:text-4xl text-3xl text-black font-nunito font-bold leading-tight">
                I'm Muhammad Raaz, Experienced Full Stack Software Developer
              </p>
              <p className="lg:text-lg text-md text-black font-rubik mt-4">
                With over 1 year of experience in my current role, I am responsible for developing and maintaining full-stack web applications that align with client requirements and business objectives. I collaborate closely with designers, product managers, and other developers to deliver high-quality software solutions.
                <br /><br />
                Let’s collaborate to turn your ideas into reality and create innovative solutions that drive success!
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

                <a href="/Raaz_FullStack.pdf" download="Raaz_FullStack.pdf" className="no-underline">
                  <button className="block md:hidden cursor-pointer text-white bg-green-500 hover:bg-green-600 transition duration-300 rounded-full md:py-3 md:px-6 px-4 py-2 font-bold shadow-lg">
                    RESUME
                  </button>
                </a>
              </div>


            </div>
          </div>

          {/* Right Section: Image */}
          <div className="grid grid-cols-1 justify-items-center gap-20">
            <img
              className="rounded-full h-60 w-60 shadow-lg border-4 border-cyan mt-3 mb-0"
              src={final_Home_Image}
              alt="Muhammad Raaz"
            />
            <a
              href="/Raaz_FullStack.pdf"  // Correct path (since it's in the public folder)
              download="Raaz_FullStack.pdf" // Ensures download
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
