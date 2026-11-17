import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaStar, FaUniversity } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { PiTildeLight } from 'react-icons/pi';
import { FaSchool } from 'react-icons/fa6';
import { cardStyle, arrowStyle, iconStyle, endIconStyle, dateClassName } from './timelineTheme';

const education = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    institute: 'MJP Rohilkhand University, Bareilly, UP, India',
    date: '2019 - 2023',
    position: 'left',
    icon: <FaUniversity />,
    points: [
      'Studied core Electrical Engineering concepts like power systems, control systems, and circuits.',
      'Developed strong problem-solving skills, leading to a transition into software development.',
      'Explored programming languages such as C, C++, and Python during coursework.',
    ],
  },
  {
    title: 'Higher Secondary (12th)',
    institute: 'S K L Bhanwati Hs Sch Bhopatpur, Bareilly, UP, India',
    date: '2017 - 2019',
    position: 'right',
    icon: <FaSchool />,
    points: [
      'Focused on Physics, Chemistry, and Mathematics (PCM) as core subjects.',
      'Developed logical thinking and problem-solving abilities.',
    ],
  },
  {
    title: 'Secondary (10th)',
    institute: 'DR. P.S. DUBEY H.S. SCHOOL - Pipariya',
    date: '2015 - 2017',
    position: 'left',
    icon: <FaGraduationCap />,
    points: ['Developed a strong foundation in Science and Mathematics.'],
  },
];

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
      <div className="bg-slate-50 px-1 md:px-5 my-2 mx-2 md:mx-10 lg:mx-20 border border-slate-200 rounded-xl">
        <VerticalTimeline>
          {education.map((item) => (
            <VerticalTimelineElement
              key={item.title}
              position={item.position}
              date={item.date}
              dateClassName={dateClassName}
              contentStyle={cardStyle}
              contentArrowStyle={arrowStyle}
              iconStyle={iconStyle}
              icon={item.icon}
            >
              <h3 className="md:text-2xl text-xl font-bold text-slate-800 font-nunito">{item.title}</h3>
              <h5 className="mt-1 text-base font-semibold text-cyan">{item.institute}</h5>
              <ul className="mt-3 space-y-2 text-slate-600 md:text-base text-sm px-0">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan text-base leading-6">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement iconStyle={endIconStyle} icon={<FaStar />} />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EducationTimeline;
