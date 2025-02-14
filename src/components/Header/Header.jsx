import React, { useState } from 'react';
import { FaPhone, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import './Header.css'
import { Fade } from "react-awesome-reveal";
import logo from '../../components/images/102kb.jpg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FaInstagram } from 'react-icons/fa6';
import { Modal } from 'react-bootstrap';
import Contact from '../Home/Contact';





const Header = () => {
    return (
        <>
            <Header1 />
            <Header2 />
        </>
    );
}







const Header1 = () => {

    return (
        <Fade direction='left' triggerOnce={true}>
            <section className=' text-white bg-indigo flex justify-between items-center p-0 font-rubik py-0' >
                <ul className='w-[500px] flex justify-around items-baseline'>
                    <li className='list-none flex justify-between items-center mt-3  hover:text-cyan cursor-pointer'>
                        <FaPhone size={18} className='mr-2 ' /> +91 9750916786
                    </li>
                    <span className='text-2xl'>|</span>
                    <li className='list-none flex justify-between items-center mt-3  hover:text-cyan cursor-pointer'>
                        <MdEmail size={18} className='mr-2 ' /> mohammadraaz902@gmail.com
                    </li>
                </ul>
                <ul className='flex justify-around items-center mx-3  '>
                    <li className='list-none mx-3 mt-2'>
                        <a href="https://github.com/Raaz902" target="_blank" rel="noopener noreferrer"><FaGithub color="white" /></a>

                    </li>
                    {/* <li className='list-none mx-3 mt-2'> <a href="https://instagram.com/newlifenshamuktikendra?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram color="white" /></a> </li> */}
                    <li className='list-none mx-3 mt-2'> <a href="https://www.linkedin.com/in/mohammad-raaz/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn color="white" /></a> </li>
                    {/* <li className='list-none mx-3 mt-2'> <a href="https://twitter.com/NashaNew?t=0T2KH6N9qmNQJTnQCh7WVA&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter color="white" /></a> </li> */}
                    <li className='list-none mx-3 mt-2'><a href="https://www.youtube.com/@MohammedRaaz-ld4uv" target="_blank" rel="noopener noreferrer"><FaYoutube color="white" /></a> </li>
                </ul>
            </section>
        </Fade>


    );
}

const Header2 = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className=' grid grid-cols-7  shadow-md font-rubik sticky top-0 bg-[#ffffff] z-10 py-2' >
                <div className='col-span-2 flex justify-center place-items-start   p-0'>
                    <div className="px-2">
                        <img className='w-[4rem] rounded-full mt-0' src={logo} alt="logo" />
                    </div>
                    <div className="">
                        <p className='text-3xl font-nunito font-bold pt-3 m-0 p-0 text-cyan'>Mohammad Raaz</p>
                        <p className='text-sm font-rubik m-0 p-0'>Software Development Engineer</p>
                    </div>


                </div>
                <div className="col-span-4 flex items-center justify-evenly px-2 text-[#4a4848]  text-sm font-[420] uppercase ">
                    <li className='list-none group'>
                        <Link to='home' spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100} className=' no-underline text-current'>
                            <span className='hover:text-cyan cursor-pointer'>  Home</span>
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to='experience' spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100}
                            className=' no-underline text-current'>
                            <span className='hover:text-cyan cursor-pointer'>Experience</span>
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to='techstack' spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100}
                            className=' no-underline text-current'>
                            <span className='hover:text-cyan cursor-pointer'>Tech Stack</span>
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to='projects' spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100}
                            className=' no-underline text-current'>
                            <span className='hover:text-cyan cursor-pointer'>Projects</span>
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to='education' spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100}
                            className=' no-underline text-current'>
                            <span className='hover:text-cyan cursor-pointer'>  Education</span>
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to='achievements' spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100}
                            className=' no-underline text-current'>
                            <span className='hover:text-cyan cursor-pointer'>  Achievements</span>
                        </Link>
                    </li>
                    {/* <li className='list-none group'>
                    <Link to='contact' spy={true}
                        smooth={true}
                        offset={-100}
                        duration={100}
                        className=' no-underline text-current'>
                        <span className='hover:text-cyan cursor-pointer'>  Contact</span>
                    </Link>                 
                </li>                */}
                </div>
                <div className='col-span-1 flex items-center justify-around'>
                    <Fade direction='right'>
                         <a href="https://wa.me/919750916786" target="_blank" rel="noopener noreferrer">
                            <button /* onClick={() => setShow(true)} */ className='bg-cyan text-white p-2   text-sm focus:ring hover:ring-black font-medium' >Contact Now</button>
                                </a>    
                      
                        {/* <Link to='contact' spy={true}
                            smooth={true}
                            offset={-100}
                            duration={100}
                            className=' no-underline text-current'>
                            <button className='bg-cyan text-white p-2   text-sm focus:ring hover:ring-black font-medium' >Contact Now</button>
                        </Link> */}

                    </Fade >
                </div>
            </div>
            
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
                    <Contact setShow={setShow}/>
                </Modal.Body>
            </Modal> */}
        </>




    );
}
{/* <Fade direction='left' triggerOnce={true}>

</Fade > */}

export default Header;