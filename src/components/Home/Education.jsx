import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { FaGraduationCap, FaStar, FaUniversity } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { PiTildeLight } from 'react-icons/pi';
import { FaSchool } from 'react-icons/fa6';

const EducationTimeline = () => {
  return (
    <div className="mt-4" id="education">
      {/* Header Section */}
      <div className="bg-news-image bg-cover bg-center pb-3">
             <Fade triggerOnce={true} direction="left">
               <div className="h-[4.5rem] p-0 flex justify-center text-7xl text-cyan text-center font-bold">
                 <PiTildeLight className="scale-x-150 scale-y-70" size={100} />
               </div>
             </Fade>
             <Fade triggerOnce={true} direction="right">
               <p className="text-3xl md:text-4xl text-slate-800 text-center mt-0 font-bold font-nunito">
                My Education
               </p>
             </Fade>
           </div>

      {/* Timeline Section */}
      <div className="bg-gray-100 md:px-5 my-2 md:mx-20  border rounded">
        <VerticalTimeline>
          {/** B.Tech **/}
          <VerticalTimelineElement
            position="left"
            date="2019 - 2023"
            dateClassName="text-dark text-sm font-semibold"
            contentStyle={{
              background: 'linear-gradient(135deg, #6a0dad, #ffcc00)',
              color: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            contentArrowStyle={{ borderRight: '8px solid #4b0082' }}
            iconStyle={{
              background: 'linear-gradient(135deg, #8a2be2, #ffcc00)',
              color: '#fff'
            }}
            icon={<FaUniversity />}
          >
            <h3 className="md:text-2xl text-xl font-bold text-white tracking-wide">
              Bachelor of Technology (B.Tech) {/* - Electrical Engineering */}
            </h3>
            <h5 className="mt-2 font-semibold text-gray-300">MJP Rohilkhand University, Bareilly, UP, India</h5>
            <div className="mt-2">
              <ul className="space-y-2 text-gray-200 md:text-base text-sm font-medium md:px-4 px-1">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Studied core Electrical Engineering concepts like power systems, control systems, and circuits.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Developed strong problem-solving skills, leading to a transition into software development.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Explored programming languages such as C, C++, and Python during coursework.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/** 12th **/}
          <VerticalTimelineElement
            position="right"
            date="2017 - 2019"
            dateClassName="text-dark text-sm font-semibold"
            contentStyle={{
              background: 'linear-gradient(135deg, #1e90ff, #ff4500)',
              color: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            contentArrowStyle={{ borderRight: '8px solid #104e8b' }}
            iconStyle={{
              background: 'linear-gradient(135deg, #4682b4, #ff4500)',
              color: '#fff'
            }}
            icon={<FaSchool />}
          >
            <h3 className="md:text-2xl text-xl font-bold text-white tracking-wide">
              Higher Secondary (12th)
            </h3>
            <h5 className="mt-2 font-semibold text-gray-300">S K L Bhanwati Hs Sch Bhopatpur, Bareilly, UP, India</h5>
            <div className="mt-2">
              <ul className="space-y-2 text-gray-200 md:text-base text-sm font-medium md:px-4 px-1">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Focused on Physics, Chemistry, and Mathematics (PCM) as core subjects.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Developed logical thinking and problem-solving abilities.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/** 10th **/}
          <VerticalTimelineElement
            position="left"
            date="2015 - 2017"
            dateClassName="text-dark text-sm font-semibold"
            contentStyle={{
              background: 'linear-gradient(135deg, #008000, #ffff00)',
              color: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            contentArrowStyle={{ borderRight: '8px solid #006400' }}
            iconStyle={{
              background: 'linear-gradient(135deg, #228b22, #ffff00)',
              color: '#fff'
            }}
            icon={<FaGraduationCap />}
          >
            <h3 className="md:text-2xl text-xl font-bold text-white tracking-wide">
              Secondary (10th)
            </h3>
            <h5 className="mt-2 font-semibold text-gray-300">DR. P.S. DUBEY H.S. SCHOOL - Pipariya</h5>
            <div className="mt-2">
              <ul className="space-y-2 text-gray-200 md:text-base text-sm font-medium md:px-4 px-1">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400 text-lg">✦</span>
                  Developed a strong foundation in Science and Mathematics.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/** Additional Icon **/}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EducationTimeline;
