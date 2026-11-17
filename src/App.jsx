import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Header from './components/Header/Header';
import MobileMenu from "./components/Header/MobileMenu";
import Footer from "./components/Footer/Footer";
import OurTeam from "./components/AboutPage/OurTeam";
import Description from "./components/common_components/Description";
import ReactGA from "react-ga4";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const App = () => {
  // ReactGA.initialize("G-YRLEKD8XFN");
  // useEffect(() => {
  //   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  // }, [])



  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  // Effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="App relative">
        {isMobile ? <MobileMenu /> : <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<OurTeam />} />
          <Route path="/description" element={<Description />} />
        </Routes>
        <Footer />
      </div>
      <a
        href="https://wa.me/919750916786"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white text-[1.75rem] md:text-[2rem]" />
      </a>

    </>




  );
};

export default App;

// < !--Google tag(gtag.js)-- >
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-YRLEKD8XFN"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-YRLEKD8XFN');
// </script>