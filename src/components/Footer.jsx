import React from "react";
import { Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#4B2E0B] text-white py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and description */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-400 text-xl">★</span>
                        <span className="font-bold text-lg">logo</span>
                    </div>
                    <p className="text-sm">
                        Discover your life's path through personalized astrology
                        readings and spiritual guidance.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Room
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Connect & Book */}
                <div className="flex flex-col ">
                    <h3 className="font-semibold mb-2">Connect With Us</h3>
                    <div className="flex gap-3 mb-4">
                        <a href="#">
                            <Youtube size={30} className="size-8 bg-white/10 rounded-lg p-1.25" />
                        </a>
                        <a href="#">
                            <Instagram size={30} className="size-8 bg-white/10 rounded-lg p-1.25" />
                        </a>
                        <a href="#">
                            <Facebook size={30} className="size-8 bg-white/10 rounded-lg p-1.25" />
                        </a>
                        <a href="#">
                            <svg
                                className="size-8 bg-white/10 rounded-lg p-1.25"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 10C9 10.1326 9.05268 10.2598 9.14645 10.3536C9.24021 10.4473 9.36739 10.5 9.5 10.5C9.63261 10.5 9.75979 10.4473 9.85355 10.3536C9.94732 10.2598 10 10.1326 10 10V9C10 8.86739 9.94732 8.74021 9.85355 8.64645C9.75979 8.55268 9.63261 8.5 9.5 8.5C9.36739 8.5 9.24021 8.55268 9.14645 8.64645C9.05268 8.74021 9 8.86739 9 9V10ZM9 10C9 11.3261 9.52678 12.5979 10.4645 13.5355C11.4021 14.4732 12.6739 15 14 15M14 15H15C15.1326 15 15.2598 14.9473 15.3536 14.8536C15.4473 14.7598 15.5 14.6326 15.5 14.5C15.5 14.3674 15.4473 14.2402 15.3536 14.1464C15.2598 14.0527 15.1326 14 15 14H14C13.8674 14 13.7402 14.0527 13.6464 14.1464C13.5527 14.2402 13.5 14.3674 13.5 14.5C13.5 14.6326 13.5527 14.7598 13.6464 14.8536C13.7402 14.9473 13.8674 15 14 15ZM3 21L4.65 17.2C3.38766 15.408 2.82267 13.217 3.06104 11.0381C3.29942 8.85915 4.32479 6.84211 5.94471 5.36549C7.56463 3.88887 9.66775 3.05418 11.8594 3.01807C14.051 2.98195 16.1805 3.7469 17.8482 5.16934C19.5159 6.59179 20.6071 8.57395 20.9172 10.7438C21.2272 12.9137 20.7347 15.1222 19.5321 16.9547C18.3295 18.7873 16.4994 20.118 14.3854 20.6971C12.2713 21.2762 10.0186 21.0639 8.05 20.1L3 21Z"
                                    stroke="#EDEDED"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © 2025 | All rights reserved | Powered by prabhubhakti
            </div>
        </footer>
    );
};

export default Footer;
