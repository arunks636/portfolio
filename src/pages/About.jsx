import React from 'react'
import data from '../data/data';

function About() {
  return (
    <>
      <div className="w-full max-w-6/10 mx-auto block 2xl:flex dark:text-white text-dark py-15 font-display selection:bg-yellow-300"  id="aboutSection">
        <div className="w-[500px] max-w-full">
          <h2 className="font-bold text-4xl">{data.name}</h2>
          <h4 className="font-medium text-2xl">{data.role}</h4>
        </div>
        <div className="flex-1 text-base/8">
          <div className="abt-sec-details">
            {data.about.map((item, index) => (
              <p key={index} className="pb-5 m-0">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-6/10 mx-auto flex dark:text-white text-dark py-15 font-display selection:bg-yellow-300" id="experiencesSection">
        <div className="exp-section">
          <h2 className="font-bold text-4xl mb-4">Experience</h2>
            <div className='lg:inline-grid block gap-5 grid-cols-[auto_auto]'>
              {data.projects.map((item, index) => (
                <div className="block mb-20 md:mb-10 last:mb-0" key={index}>
                  <div className="timeline dark:text-[#999999] text-dark">{item.timeline}</div>
                  <div className="details">
                    <h4 className="font-semibold text-xl">{item.title} @ <span className='dark:text-theme-yellow text-emerald-400'>{item.company}</span>, {item.location}</h4>
                    <p className='descr'>{item.description}</p>
                    <ul className='urls'>
                      {item.link &&
                        item.link.map((link, idx) => (
                          <li key={idx}>
                            <a href={link} target="blank" className='dark:text-[#999999] text-dark'>
                              {link}
                            </a>
                          </li>
                        ))}
                    </ul>
                    <ul className='techs flex-wrap'>
                      {item.techs &&
                        item.techs.map((tech, idx) => <li key={idx} className='dark:bg-[rgba(45,212,191,.1)] bg-emerald-400 dark:text-[#2dd4bf] text-dark'>{tech}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>

      <div className="w-full max-w-6/10 mx-auto flex dark:text-white text-dark py-15 font-display selection:bg-yellow-300" id="technologiesSection">
        <div className="technologies-section w-[100%]">
          <h2 className="font-bold text-4xl">Technologies</h2>

          <div className="skills dark:text-[#131313] text-dark">
            {data.technologies.map((tech, index) => (
              <div className="skill" key={index}>
                <div className="skill-name dark:text-[#f1f1f1] text-dark">{tech.name}</div>
                <div className="skill-bar">
                  <div className="skill-per dark:after:bg-[#f1f1f1] after:bg-dark dark:before:bg-[#f1f1f1] before:bg-dark dark:before:text-[#131313] before:text-white" per={tech.proficiency} style={{ maxWidth: tech.proficiency }} ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About