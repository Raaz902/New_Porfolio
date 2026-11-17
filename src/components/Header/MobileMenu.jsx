import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { VscMenu } from "react-icons/vsc";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-scroll';
import logo from '../../components/images/102kb.jpg'

const menuItems = [
    { to: 'home', label: 'Home' },
    { to: 'experience', label: 'Experience' },
    { to: 'techstack', label: 'Tech Stack' },
    { to: 'projects', label: 'Projects' },
    { to: 'achievements', label: 'Achievements' },
    { to: 'education', label: 'Education' },
];

const MobileMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='sticky top-0 z-10'>
            <div className="w-full flex justify-between items-center gap-2 px-3 py-2 bg-white shadow-md">
                <div className="flex-1 min-w-0 flex justify-start items-center">
                    <img src={logo} alt="logo" className='w-10 h-10 sm:w-12 sm:h-12 rounded-full me-2 shrink-0' />
                    <div className='min-w-0'>
                        <p className='text-lg sm:text-2xl font-nunito font-bold text-cyan m-0 truncate'>Mohammad Raaz</p>
                        <p className='text-xs sm:text-sm font-nunito font-bold text-dark m-0 truncate'>Software Development Engineer</p>
                    </div>
                </div>

                <button type="button" onClick={handleShow} aria-label="Open menu" className='p-1 shrink-0'>
                    <VscMenu size={28} />
                </button>
            </div>

            <Offcanvas show={show} onHide={handleClose} backdrop={true} scroll={true} style={{ width: '16rem' }} backdropClassName={show ? "custom-backdrop" : "custom-backdrop-close"} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img className='w-[5rem] mt-0 rounded-full' src={logo} alt="logo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='mt-0 pt-0'>
                    <ul className='w-full p-1 mt-0 pt-0'>
                        {menuItems.map((item) => (
                            <li key={item.to} className="p-3 cursor-pointer font-rubik font-[420] uppercase">
                                <Link
                                    onClick={handleClose}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={100}
                                    className='no-underline text-current'
                                >
                                    <span className='hover:text-cyan cursor-pointer'>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                        <li className="p-3 font-rubik font-[420] uppercase">
                            <a href="https://wa.me/919750916786" target="_blank" rel="noopener noreferrer" className='no-underline text-current hover:text-cyan'>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className='flex gap-5 px-3 mt-4 text-xl'>
                        <a href="https://github.com/Raaz902" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='text-slate-700 hover:text-cyan'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/mohammad-raaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='text-slate-700 hover:text-cyan'><FaLinkedinIn /></a>
                        <a href="https://wa.me/919750916786" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className='text-slate-700 hover:text-cyan'><FaWhatsapp /></a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div >
    );
}

export default MobileMenu;
