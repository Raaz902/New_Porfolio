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
      <div className="fixed top-1/4 left-0 z-10">
        <a href="https://wa.me/919750916786" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="mr-1 text-green-700" size={50} />
        </a>        
      </div>   

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