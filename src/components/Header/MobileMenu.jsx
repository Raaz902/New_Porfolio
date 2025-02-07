import React, { useContext, useState } from 'react';
import { Accordion, AccordionContext, Button, Card, Modal, Offcanvas, useAccordionButton } from 'react-bootstrap';
import { VscMenu } from "react-icons/vsc";
import { Link } from 'react-scroll';
import logo from '../../components/images/102kb.jpg'


const PINK = 'rgba(255, 192, 203, 0.6)';
const BLUE = 'rgba(0, 0, 255, 0.6)';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <span
            type="button"
            style={{}}
            onClick={decoratedOnClick}
        >
            {children}
        </span>
    );
}
const listItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Courses' },
    { id: 4, name: 'Registration' },
    { id: 5, name: 'Boost' },
    { id: 6, name: 'Achievements' },
    { id: 7, name: 'Contact' }
];



const MobileMenu = () => {
    const [show, setShow] = useState(false);
    const [showChild, setShowChild] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showContact, setShowContact] = useState(false);

    return (
        <div className='sticky top-0 z-10'>
            <div className="w-full flex justify-between items-center px-2 py-1 my-2 bg-gray-100 ">
                <div className="w-[25rem] flex justify-start items-center">
                    <span className='w-[3rem] me-2'> <img src={logo} alt="logo image" className='rounded-full' /></span>
                    <span className='text-2xl font-nunito font-bold text-cyan'>Mohammad Raaz
                        <span className='block text-sm font-nunito font-bold text-dark'>Software Development Engineer</span>
                    </span>
                </div>

                <div className="">
                    <VscMenu color='' size={30} onClick={handleShow} className='cursor-pointer' />
                </div>

            </div>
            <Offcanvas show={show} onHide={handleClose} backdrop={true} scroll={true} style={{ width: '16rem' }} backdropClassName={show ? "custom-backdrop" : "custom-backdrop-close"} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img className='w-[5rem] mt-0 rounded-full' src={logo} alt="logo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='mt-0 pt-0'>
                    <ul className='w-full p-1 mt-0 pt-0'>
                        {/* <li lassName="p-3 cursor-pointer hover:text-cyan hover:scale-y-110 font-rubik font-[420]">
                            <Link onClick={() => setShow(false)}
                                to='home2' spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} className=' no-underline text-current'>
                                <span className='hover:text-cyan cursor-pointer'>HOME</span>
                            </Link>
                        </li> */}
                        <li className="p-3 cursor-pointer hover:text-cyan hover:scale-y-110 font-rubik font-[420]">
                            <Link onClick={() => setShow(false)} to='home' spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} className=' no-underline text-current'>
                                <span className='hover:text-cyan cursor-pointer'>HOME</span>
                            </Link>
                        </li>
                        {/* <li className="p-3 cursor-pointer hover:text-cyan hover:scale-y-110 font-rubik font-[420]">
                            <Link onClick={() => setShow(false)} to='about' spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} className=' no-underline text-current'>
                                <span className='hover:text-cyan cursor-pointer'>ABOUT</span>
                            </Link>
                        </li> */}
                        <li className="p-3 cursor-pointer hover:text-cyan hover:scale-y-110 font-rubik font-[420]">
                            <Link onClick={() => setShow(false)} to='projects' spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} className=' no-underline text-current'>
                                <span className='hover:text-cyan cursor-pointer'>PROJECTS</span>
                            </Link>
                        </li>
                        <li className="p-3 cursor-pointer hover:text-cyan hover:scale-y-110 font-rubik font-[420]">
                            <Link onClick={() => setShow(false)} to='programs' spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} className=' no-underline text-current'>
                                <span className='hover:text-cyan cursor-pointer'>PROGRAMS</span>
                            </Link>
                        </li>
                        <li className="p-3 cursor-pointer hover:text-cyan hover:scale-y-110 font-rubik font-[420]">
                            <Link onClick={() => setShow(false)} to='achievements' spy={true}
                                smooth={true}
                                offset={-100}
                                duration={100} className=' no-underline text-current'>
                                <span className='hover:text-cyan cursor-pointer'>ACHIEVEMENTS</span>
                            </Link>
                        </li>
                        <li onlick={() => setShow(false)} className="p-3 cursor-pointer hover:text-cyan hover:scale-y-110 font-rubik font-[420]">
                            <span onClick={() => setShowContact(true)} className='hover:text-cyan cursor-pointer'>CONTACT</span>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            {/* contact modal */}
            {/* <Modal
                show={showContact}
                size='xl'
                onHide={() => setShowContact(false)}
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
                    <Contact setShow={setShowContact} />
                </Modal.Body>
            </Modal> */}
        </div >
    );
}

export default MobileMenu;