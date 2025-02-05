import React from 'react';
import { Button } from 'react-bootstrap';
import './HomePage.css'

const CourseCard = ({ title, imgurl, description }) => {


    return (
        <div className='course-card p-2'>
            <div className="imagebox d-flex justify-content-center">
                <img src={imgurl} alt="" />
            </div>
            <div className="p-1 contentbox" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                    <h3 style={{ fontSize: "0.85rem", fontWeight: "700" }}>{title}</h3>
                    <p style={{ color: "#666666", fontWeight: '400', fontSize: '0.85rem' }}>
                        {description}
                    </p>
                </div>
                <div style={{ alignSelf: 'flex-start' }}>
                    <Button size="sm" className='btn-primary2 btn'>Click Here</Button>
                </div>
            </div>

        </div>

    );
}

export default CourseCard;




