import React from 'react';
import { PiTildeLight } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";
import { FaRegStar, FaHackerrank } from "react-icons/fa";

const achievements = [
  {
    icon: FaRegStar,
    title: 'Problem Solving',
    description: 'Solved 300+ DSA problems on LeetCode, GFG and Crafter Hack.',
    links: [
      { label: 'Crafter Hack', url: 'https://crafterhack.com/user/mohdraaz902' },
      { label: 'LeetCode', url: 'https://leetcode.com/u/raaz902/' },
      { label: 'GFG', url: 'https://www.geeksforgeeks.org/profile/mohammadraaz902' },
      { label: 'HackerRank', url: 'https://www.hackerrank.com/profile/mohdraaz902' },
    ],
  },
  {
    icon: FaHackerrank,
    title: 'Earned a 5-Star rating on HackerRank',
    description: 'Recognized for strong problem-solving skills on HackerRank.',
    links: [
      { label: 'View Profile', url: 'https://www.hackerrank.com/profile/mohdraaz902' },
    ],
  },
];

const Achievements = () => {
  return (
    <div className="mt-4" id="achievements">
      <div className="bg-news-image bg-cover bg-center pb-3">
        <Fade triggerOnce={true} direction="left">
          <div className="h-[4.5rem] p-0 flex justify-center text-7xl text-cyan text-center font-bold">
            <PiTildeLight className="scale-x-150 scale-y-70" size={100} />
          </div>
        </Fade>
        <Fade triggerOnce={true} direction="right">
          <p className="text-3xl md:text-4xl text-slate-800 text-center mt-0 font-bold font-nunito">
            Key Achievements
          </p>
        </Fade>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 sm:px-5 lg:px-20 py-2">
        {achievements.map((item) => (
          <Fade triggerOnce={true} key={item.title}>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md h-full">
              <item.icon className="text-[#21a7d0] shrink-0" size={36} />
              <div>
                <p className="text-lg font-bold font-nunito mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 font-rubik mb-2">{item.description}</p>
                {item.links && (
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-xs font-semibold text-white bg-cyan rounded-full px-3 py-1 hover:opacity-90"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
