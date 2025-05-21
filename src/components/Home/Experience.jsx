import React from 'react';
import { PiTildeLight } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";
import { FaBriefcase, FaStar } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from 'react-icons/md';

const Experience = () => {

  return (
    <div className="mt-4" id="experience">
      {/* Header Section */}
      <div className="bg-news-image bg-cover bg-center pb-3">
        <Fade triggerOnce={true} direction="left">
          <div className="h-[4.5rem] p-0 flex justify-center text-7xl text-cyan text-center font-bold">
            <PiTildeLight className="scale-x-150 scale-y-70" size={100} />
          </div>
        </Fade>
        <Fade triggerOnce={true} direction="right">
          <p className="text-3xl md:text-4xl text-slate-800 text-center mt-0 font-bold font-nunito">
            Professional Journey
          </p>
        </Fade>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-100 md:px-5 my-2  md:mx-20 border rounded">
        <VerticalTimeline>
          {/* Full Stack Developer */}
          <VerticalTimelineElement
            position="left"
            className="vertical-timeline-element--work"
            date="December 2023 - Present"
            dateClassName="lg:text-gray-800 text-sm font-semibold"
            contentStyle={{
              background: 'linear-gradient(135deg, rgb(2 6 6), rgb(15 142 171))',
              color: '#f8fafc',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            contentArrowStyle={{ borderRight: '8px solid #1e293b' }}
            iconStyle={{
              background: 'linear-gradient(135deg, #1e40af, #1e293b)',
              color: '#f8fafc',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            }}
            icon={<MdWorkHistory />}
          >
            <h3 className="md:text-2xl text-xl font-bold text-white tracking-wide">
              Full Stack Developer
            </h3>
            <h5 className="mt-2 font-semibold text-gray-300">Technology Xtend,  Delhi, India</h5>
            <div className="mt-2">
              <ul className="space-y-2 text-gray-200 md:text-base text-sm font-medium md:px-4 px-1">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Developed & maintained full-stack MERN Stack applications.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Implemented SPA, SSR, CSR, & SSG with React.js & Next.js.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Designed high-performance APIs with Node.js & Express.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Managed MongoDB, SQL Server, & MySQL databases.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Trainee Engineer */}
          <VerticalTimelineElement
            position="right"
            className="vertical-timeline-element--work"
            date="December 2023 - Present"
            dateClassName="lg:text-gray-800  text-sm font-semibold"
            contentStyle={{
              background: 'linear-gradient(135deg, rgb(13 157 127), rgb(93 78 39))',
              color: '#f8fafc',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            contentArrowStyle={{ borderRight: '8px solid rgb(13 157 127)' }}
            iconStyle={{
              background: 'linear-gradient(135deg, rgb(13 157 127), rgb(93 78 39))',
              color: '#f8fafc',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            }}
            icon={<FaBriefcase />}
          >
            <h3 className="md:text-2xl text-xl font-bold text-white tracking-wide">
              Trainee Engineer
            </h3>
            <h5 className="mt-2 font-semibold text-gray-300">UPPTCL, Bareilly, India</h5>
            <div className="mt-2">
              <ul className="space-y-2 text-gray-200 md:text-base text-sm font-medium md:px-4 px-1">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Gained hands-on experience in systems operation and maintenance at a power station.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Assisted in troubleshooting faults and ensuring efficient power distribution.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Worked closely with senior engineers to optimize station operations.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Enhanced practical knowledge through real-world applications.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Additional Icon Section */}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
