import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ["Home", "Rooms", "Services", "Gallery", "Contact"];

    // Effect to handle body scroll
    useEffect(() => {
        if (isOpen) {
            // Disable scroll
            document.body.style.overflow = "hidden";
        } else {
            // Enable scroll
            document.body.style.overflow = "unset";
        }

        // Cleanup function to re-enable scroll when component unmounts
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <nav className="bg-white  relative z-50">
            {/* Background color for md devices and above - right side 50% */}
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-[#FFDDAD] -z-10"></div>

            <div className=" mx-auto px-4 md:px-6 flex justify-between items-center h-16 relative ">
                {/* Logo */}
                <div>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 drop-shadow-md"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex gap-6 font-semibold text-black items-center">
                    {navLinks.map((link, idx) => (
                        <li
                            key={idx}
                            className="hover:text-[#6C4002] cursor-pointer"
                        >
                            {link}
                        </li>
                    ))}
                    <button className="bg-[#6C4002] text-white py-2 px-4 rounded-xl hover:bg-[#552e01]">
                        Book Now
                    </button>
                </ul>

                {/* Mobile Menu Button */}
                <div className="sm:hidden relative z-50">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <X size={28} className="text-[#6C4002]" />
                        ) : (
                            <Menu size={28} className="text-[#6C4002]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Sliding Menu */}
            <div
                className={`sm:hidden fixed top-0 z-30 right-0 h-dvh w-74 bg-white shadow-lg transform transition-transform duration-300 ease-in-out  ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col gap-6 px-6 py-16 font-semibold text-black">
                    {navLinks.map((link, idx) => (
                        <li
                            key={idx}
                            className="hover:text-[#6C4002] cursor-pointer"
                        >
                            {link}
                        </li>
                    ))}
                    <button className="bg-[#6C4002] text-white py-3 px-4 rounded-xl hover:bg-[#552e01] w-full text-center">
                        Book Now
                    </button>
                </ul>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="sm:hidden h-dvh fixed inset-0 bg-[#00000031] overflow-y-hidden bg-opacity-20 z-20"
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
