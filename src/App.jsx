import { useState, useEffect } from "react";
import CustomPointer from "./components/CustomPointer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { RevealLinks } from "./components/CustomHover";
import Navigation from "./components/Navigation";

function Preloader({ setLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false); // ✅ notify App when done
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999] font-display">
      <p className="lg:text-9xl text-5xl">{progress}%</p>
      <div className="w-full h-2 bg-gray-700 overflow-hidden fixed bottom-0 left-0">
        <div
          className="h-full bg-theme-yellow transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState("default");

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <div className={`dark:bg-dark bg-white min-h-screen progress`}>
          <CustomPointer cursorVariant={cursorVariant} />

          <Navigation
            setCursorVariant={setCursorVariant}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Home
            setCursorVariant={setCursorVariant}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <About />

          <Contact setCursorVariant={setCursorVariant} />
        </div>
      )}
    </>
  );
}

export default App;
