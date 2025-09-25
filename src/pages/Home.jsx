import { motion } from "motion/react";

function Home({ setCursorVariant, darkMode, setDarkMode }) {
  // 🔹 Set background text size as a variable
  const backgroundTextSize = "220px";

  return (
    <div id="homeSection" className="w-full m-auto font-display dark:text-offwhite text-base relative selection:bg-violet-500 dark:bg-black bg-white isolate overflow-hidden">

      <div className="wrapper relative h-screen flex items-center justify-center overflow-hidden">
        {/* 🔹 Background Scrolling Text */}
        <div
          className="absolute inset-0 flex flex-col justify-center opacity-4 pointer-events-none rotate-[-20deg]"
          style={{ gap: "0px" }} // reduce spacing between lines
        >
          {/* Line 1 */}
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20,
            }}
          >
            <span
              className="font-extrabold uppercase mx-8"
              style={{ fontSize: backgroundTextSize }}
            >
              Frontend Developer • UI Enthusiast • Creative Coder •
            </span>
            <span
              className="font-extrabold uppercase mx-8"
              style={{ fontSize: backgroundTextSize }}
            >
              Frontend Developer • UI Enthusiast • Creative Coder •
            </span>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 25,
            }}
          >
            <span
              className="font-extrabold uppercase mx-8"
              style={{ fontSize: backgroundTextSize }}
            >
              Passion for Design • Motion Effects • Web Experiences •
            </span>
            <span
              className="font-extrabold uppercase mx-8"
              style={{ fontSize: backgroundTextSize }}
            >
              Passion for Design • Motion Effects • Web Experiences •
            </span>
          </motion.div>

          {/* Line 3 */}
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 30,
            }}
          >
            <span
              className="font-extrabold uppercase mx-8"
              style={{ fontSize: backgroundTextSize }}
            >
              Building Interfaces • Exploring Ideas • Crafting Code •
            </span>
            <span
              className="font-extrabold uppercase mx-8"
              style={{ fontSize: backgroundTextSize }}
            >
              Building Interfaces • Exploring Ideas • Crafting Code •
            </span>
          </motion.div>
        </div>

        {/* 🔹 Hero Content */}
        <div className="inner-wrapper text-center dark:text-offwhite text-gray-800 relative z-10">
          <div
            className="flex flex-col justify-center items-center inline-block"
            onMouseEnter={() => setCursorVariant("textReveal")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <h4 className="font-bold xl:text-2xl  tracking-[12px] uppercase">
              I'm Arun
            </h4>
            <h1 className="font-bungee font-medium text-[40px] px-[30px] sm:px-0 sm:text-[50px] md:text-[80px] xl:text-[100px] text-center leading-[1.1]">
              Front-<span className="dark:text-theme-yellow text-emerald-400">End</span>
              <br />
              Developer &<br />
              UI Enthusiast<span className="dark:text-theme-yellow text-emerald-400">.</span>
            </h1>
            {darkMode ? 
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg mt-8 mx-auto fill-blue-500 dark:fill-red-500"
              
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.4123 56.0001C59.9131 50.12 64 41.602 64 32.1258C64 14.3832 49.6731 0 32 0C14.3269 0 0 14.3832 0 32.1258C0 41.2108 3.75642 49.4151 9.79504 55.2585L21.5957 13.0511L27.5053 25.8028H31.5H35.4947L41.4043 13.0511L53.4123 56.0001Z"
                fill="#B7AB98"
              />

              <ellipse
                cx="26.1333"
                cy="37.4132"
                rx="2.13333"
                ry="2.14172"
                fill="#B7AB98"
              >
                <animate
                  attributeName="ry"
                  values="2.14172;0.1;2.14172"
                  keyTimes="0;0.15;1"
                  dur="4s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines=".4 0 .2 1; .4 0 .2 1"
                />
              </ellipse>

              <ellipse
                cx="37.1333"
                cy="37.4132"
                rx="2.13333"
                ry="2.14172"
                fill="#B7AB98"
              >
                <animate
                  attributeName="ry"
                  values="2.14172;0.1;2.14172"
                  keyTimes="0;0.15;1"
                  dur="4s"
                  begin="0.05s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines=".4 0 .2 1; .4 0 .2 1"
                />
              </ellipse>
            </svg> :
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg mt-8 mx-auto fill-blue-500 dark:fill-red-500"
              
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.4123 56.0001C59.9131 50.12 64 41.602 64 32.1258C64 14.3832 49.6731 0 32 0C14.3269 0 0 14.3832 0 32.1258C0 41.2108 3.75642 49.4151 9.79504 55.2585L21.5957 13.0511L27.5053 25.8028H31.5H35.4947L41.4043 13.0511L53.4123 56.0001Z"
                fill="#00d492"
              />

              <ellipse
                cx="26.1333"
                cy="37.4132"
                rx="2.13333"
                ry="2.14172"
                fill="#00d492"
              >
                <animate
                  attributeName="ry"
                  values="2.14172;0.1;2.14172"
                  keyTimes="0;0.15;1"
                  dur="4s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines=".4 0 .2 1; .4 0 .2 1"
                />
              </ellipse>

              <ellipse
                cx="37.1333"
                cy="37.4132"
                rx="2.13333"
                ry="2.14172"
                fill="#00d492"
              >
                <animate
                  attributeName="ry"
                  values="2.14172;0.1;2.14172"
                  keyTimes="0;0.15;1"
                  dur="4s"
                  begin="0.05s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines=".4 0 .2 1; .4 0 .2 1"
                />
              </ellipse>
            </svg> }
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
