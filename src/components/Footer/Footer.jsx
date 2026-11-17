import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-[#273c66] text-white bg-bg-footer-img px-4 py-3 mt-4">
            <footer className="text-center text-sm md:text-base">
                © {new Date().getFullYear()} Mohammad Raaz. All rights reserved.
            </footer>
        </div>

    );
}

export default Footer;
