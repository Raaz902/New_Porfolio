import React from 'react';
import { PiTildeLight } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";
import { FaBriefcase, FaStar } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from 'react-icons/md';
import { cardStyle, arrowStyle, iconStyle, endIconStyle, dateClassName } from './timelineTheme';

const experiences = [
  {
    role: 'Software Development Engineer - 1',
    company: 'Storable India',
    location: 'Hyderabad, India',
    date: 'November 2025 - Present',
    current: true,
    url: 'https://www.storable.com',
    tagline: 'The Leading Provider of Integrated Technology for Storage, Marine, RV & Camping',
    position: 'left',
    icon: <MdWorkHistory />,
    points: [
      'Develop and maintain scalable Storable Insurance applications, APIs, and microservices using TypeScript, Node.js, NestJS, React, PostgreSQL, Redis, and BullMQ.',
      'Build and maintain third-party integrations with business platforms including QuickBooks, NetSuite, and Zoho CRM.',
      'Contribute to cloud infrastructure, observability, and application modernization using AWS, Docker, GitLab CI/CD, Grafana, and OpenTelemetry.',
      'Leverage AI-assisted development tools to streamline engineering workflows and increase developer productivity by 40%.',
      'Strengthen application security using Snyk SCA/SAST, identifying and remediating dependency vulnerabilities and potential security issues across the codebase.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'TutorArc Digital',
    location: 'New Delhi, India',
    date: 'September 2022 - November 2025',
    url: 'https://www.technologyxtend.com',
    tagline: 'Providing quality software solutions in multiple domains',
    position: 'right',
    icon: <FaBriefcase />,
    points: [
      'Developed and maintained scalable Institute Management and E-Commerce applications using React.js, Next.js, Node.js, and Express.js, improving codebase performance by 25% through optimization and refactoring.',
      'Built RESTful APIs and integrated third-party services including payment gateways and email systems, leveraging SPA, SSR, CSR, and SSG rendering strategies and reusable React components.',
      'Managed MongoDB, SQL Server, and MySQL databases and implemented secure JWT-based authentication and authorization, ensuring reliable data management and application security.',
    ],
  },
];

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
      <div className="bg-slate-50 px-1 md:px-5 my-2 mx-2 md:mx-10 lg:mx-20 border border-slate-200 rounded-xl">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.company}
              position={exp.position}
              className="vertical-timeline-element--work"
              date={exp.date}
              dateClassName={dateClassName}
              contentStyle={cardStyle}
              contentArrowStyle={arrowStyle}
              iconStyle={iconStyle}
              icon={exp.icon}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="md:text-2xl text-xl font-bold text-slate-800 font-nunito">{exp.role}</h3>
                {exp.current && (
                  <span className="text-xs font-semibold text-white bg-cyan rounded-full px-2 py-0.5">Current</span>
                )}
              </div>
              <h5 className="mt-1 text-base font-semibold text-slate-500">
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-cyan no-underline hover:underline">
                  {exp.company}
                </a>
                {' · '}{exp.location}
              </h5>
              <p className="mt-1 mb-0 text-sm italic text-slate-500">{exp.tagline}</p>
              <ul className="mt-3 space-y-2 text-slate-600 md:text-base text-sm px-0">
                {exp.points.map((point, i) => (
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

export default Experience;
