import React from 'react';
import tickImg from '../images/progress-arrow.png'
import { Fade } from 'react-awesome-reveal';
import { PiTildeLight } from 'react-icons/pi';
const PastStatistics = () => {
    return (
        <>
            <div className="bg-news-image bg-cover bg-center mt-0 pt-0">
                <div className="mt-0 pt-0">
                    <Fade triggerOnce={true} direction='left' className=''>
                        <div className='h-[4.5rem] p-0 flex justify-center  text-7xl text-cyan text-center  font-bold '><PiTildeLight className='p-0 m-0 transform ' style={{ transform: 'scaleX(1.5) scaleY(0.7)' }} size={100} /></div>
                    </Fade>
                    <Fade triggerOnce={true} direction='right'>
                        <p className='text-3xl md:text-4xl text-slate-800 text-center pt-0 mt-0 font-bold font-nunito'>Our Achievements</p>
                    </Fade>
                </div>
               
                <p className="lg:text-lg text-md text-black font-rubik px-5">
                    At New Life Nasha Mukti Kendra, we have empowered countless individuals to overcome addiction through holistic care, transforming lives and promoting lasting recovery.
                </p>
            </div>
            <div className='container  d-lg-flex justify-content-between align-items-center pt-2 ' id='achievements'>
                <div className=" col-12 col-lg-7 transforming-lives1">
                    <div className="">
                        <h2 className='heading responsive-h3'>Transforming lives since 2020</h2>
                    </div>
                    <div className=" d-flex justify-content-around">
                        <div className="col-4 border-end border-end-3 border-black">
                            <h2 className='responsive-h2'>1000+</h2>
                            <p className='responsive-para fw-semibold'>Patient Treated
                                <span className='d-block'>since September 2020</span>
                            </p>
                        </div>
                        <div className=" col-5 ">
                            <h2 className='responsive-h2'>200+</h2>
                            <p className='responsive-para fw-semibold'>Patient Treated
                                <span className='d-block'> In 2024</span>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-4 transforming-lives2 ">
                    <div className="d-lg-block d-flex justify-content-around">
                        <div className="col-lg-12 col-4 p-3 d-flex justify-content-start align-items-center">
                            <div className="col-2  d-lg-block d-none pe-3 p-1 ">
                                <span style={{ borderRadius: "50%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }} className='bg-white'>
                                    <img src={tickImg} alt="" style={{ width: '2rem', height: '2rem' }} />
                                </span>
                            </div>
                            <div className=" ">
                                <span className='responsive-h3 fw-bold d-block'> 400+</span>
                                <span className='responsive-para2'>FREE COUNSELLINGS</span>
                            </div>
                        </div>
                        <div className="col-lg-12 col-4 p-3 d-flex justify-content-start align-items-center">
                            <div className="col-2  d-lg-block d-none  pe-3 p-1 ">
                                <span style={{ borderRadius: "50%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }} className='bg-white'>
                                    <img src={tickImg} alt="" style={{ width: '2rem', height: '2rem' }} />
                                </span>
                            </div>
                            <div className=" ">
                                <span className='responsive-h3 fw-bold d-block'> 700+</span>
                                <span className='responsive-para2'> PATIENT DETOXIFIED</span>
                            </div>
                        </div>
                        <div className="col-lg-12 col-4 p-3 d-flex justify-content-start align-items-center">
                            <div className="col-2  d-lg-block d-none  pe-3 p-1 ">
                                <span style={{ borderRadius: "50%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }} className='bg-white'>
                                    <img src={tickImg} alt="" style={{ width: '2rem', height: '2rem' }} />
                                </span>
                            </div>
                            <div className=" ">
                                <span className='responsive-h3 fw-bold d-block'> 50+</span>
                                <span className='responsive-para2'>AWARENESS PROGRAMS CONDUCTED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default PastStatistics;
