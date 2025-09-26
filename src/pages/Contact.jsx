import { useState } from "react";

function Contact({ setCursorVariant }) {
  
  return (
    <div className="dark:bg-stone-50 bg-dark dark:text-black text-white sm:pb-20 sm:pt-10 pb-[30px] pt-[30px] px-[20px]" id="contactSection">
      <div className="container mx-auto sm:py-5 relative">
        <span
          className="sm:absolute mx-auto sm:mb-0 mb-[15px] pointer-events-none right-0 top-[-20px] lg:top-5 lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] rounded-full bg-theme-yellow flex items-center justify-center font-display lg:text-3xl text-[15px] text-black dark:opacity-100 opacity-50 lg:opacity-100 z-0">
          Get in touch
        </span>
        <h1 className="lg:text-5xl text-[25px] font-display z-1 relative">
          Say Hi -{" "}
          <a href="mailto:caspers3d@gmail.com" className="underline">
            caspers3d@gmail.com
          </a>
        </h1>
        <p className="font-display lg:text-2xl text-[13px] pt-4 z-1 relative">Social:</p>
        <ul className="font-display grid-container lg:inline-grid flex flex-wrap gap-0 grid-cols-[auto_auto] [&>li]:pr-5 z-1 relative"  onMouseEnter={() => setCursorVariant("noPointer")}
          onMouseLeave={() => setCursorVariant("default")}>
          <li>
            <a href="https://www.linkedin.com/in/arun-ks-68598327/" target="_blank">Linkedin</a>
          </li>
          <li>
            <a href="https://www.facebook.com/aruntvm86" target="_blank">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/aruntvm86/" target="_blank">Instagram</a>
          </li>
          <li>
            <a href="https://codepen.io/arun_ks" target="_blank">Codepen</a>
          </li>
          <li>
            <a href="https://github.com/arunks636" target="_blank">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact