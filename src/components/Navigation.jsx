import React, { useState } from 'react';
import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram , TiSocialGithub   } from "react-icons/ti";
import { FaCodepen } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import FlipLink from './FlipLinks';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import useMediaQuery from '../utils/useMediaQuery';

function Navigation({ setCursorVariant, darkMode, setDarkMode }) {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isDesktop && (
        <>
          <button
            className={`fixed right-[20px] top-[20px] z-12 text-3xl cursor-pointer text-emerald-400`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>

          {isOpen && (
            <>
            <div className='fixed z-11 text-center w-full h-full top-0 left-0 bg-white pt-[40px]'>
              <ul
                onMouseEnter={() => setCursorVariant("noPointer")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {[
                  "Home",
                  "About",
                  "Experiences",
                  "Technologies",
                  "Contact",
                ].map((item, key) => (
                  <li
                    key={key}
                    className="my-4 uppercase text-2xl font-display"
                  >
                    <a
                      href={`#${item.toLowerCase()}Section`}
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className='flex flex-wrap justify-center items-center gap-5 pt-[10px]'>
                <li className='text-2xl'>
                  <a
                    href="https://www.linkedin.com/in/arun-ks-68598327/"
                    target="_blank"
                  >
                    <TiSocialLinkedin />
                  </a>
                </li>
                <li  className='text-2xl'>
                  <a href="https://www.facebook.com/aruntvm86" target="_blank">
                    <TiSocialFacebook />
                  </a>
                </li>
                <li className='text-2xl'>
                  <a
                    href="https://www.instagram.com/aruntvm86/"
                    target="_blank"
                  >
                    <TiSocialInstagram />
                  </a>
                </li>
                <li className='text-2xl'>
                  <a href="https://codepen.io/arun_ks" target="_blank">
                    <FaCodepen />
                  </a>
                </li>
                <li className='text-4xl'>
                  <a
                    href="https://github.com/arunks636"
                    target="_blank"
                    className=""
                  >
                    <TiSocialGithub />
                  </a>
                </li>

                <li className='w-full'>
                  <button
                    className="text-4xl inline-block cursor-pointer"
                    onClick={() => setDarkMode((prev) => !prev)}
                  >
                    {" "}
                    {darkMode ? <FaToggleOff /> : <FaToggleOn />}
                  </button>
                </li>
              </ul>
            </div>
              
            </>
          )}
        </>
      )}

      {isDesktop && (
        <>
          <ul
            className="fixed z-20 text-right right-[20px] top-[50%] transform-[translateY(-50%)] dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)] p-[10px] rounded-[10px]"
            onMouseEnter={() => setCursorVariant("noPointer")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            {["Home", "About", "Experiences", "Technologies", "Contact"].map(
              (item, key) => (
                <li key={key} className="my-4 uppercase font-display">
                  <a
                    className="relative inline-block dark:text-white text-dark
    pb-1
    text-lg font-medium 
    after:content-[''] after:absolute after:bottom-0 after:right-0 
    after:h-[2px] after:w-0 dark:after:bg-theme-yellow after:bg-emerald-400
    after:transition-all after:duration-300 after:ease-out
    hover:after:right-0 hover:after:w-full
                    "
                    href={`#${item.toLowerCase()}Section`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <li className="text-right">
              <button
                className="text-3xl inline-block cursor-pointer dark:text-white text-dark"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {" "}
                {darkMode ? <FaToggleOff /> : <FaToggleOn />}
              </button>
            </li>
          </ul>

          <ul className="fixed z-20 left-[20px] top-[50%] transform-[translateY(-50%)] dark:[&_a]:text-offwhite [&_a]:text-black [&_a]:text-2xl [&_li]:mb-2 [&_a]:flex [&_a]:items-center [&_a]:justify-center">
            <li>
              <a
                href="https://www.linkedin.com/in/arun-ks-68598327/"
                target="_blank"
              >
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/aruntvm86" target="_blank">
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aruntvm86/" target="_blank">
                <TiSocialInstagram />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/arun_ks" target="_blank">
                <FaCodepen />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arunks636"
                target="_blank"
                className="!text-3xl"
              >
                <TiSocialGithub />
              </a>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default Navigation