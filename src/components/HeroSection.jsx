import React from "react";
import herovideo from "/hotel-video.webm"; // your video or an image

export default function HeroSection() {
    return (
        <section id="Home" className="w-full grid grid-cols-1 md:grid-cols-2">
            {/* Text Section */}
            <div className="flex flex-col  px-4  py-10 sm::p-10 bg-white justify-center space-y-2 order-2 md:order-1">
                <h1 className="text-center playfair-display lg:text-left text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#4A3B33] leading-tight">
                    Experience Luxury <br />
                    & Comfort in the <br /> Heart of the City
                </h1>
                <p className="text-center sm:text-start  text-[20px] text-balance text-[#4A3B33]/80">
                    Discover elegant rooms, world-class dining, and exceptional
                    hospitality tailored for your perfect stay.
                </p>

                <a
                    href="https://wa.me/918745884595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#6C4002] text-center hover:bg-[#6C4002] sm:w-[40%] text-white text-base sm:text-lg mt-4 py-3 px-10 rounded-xl font-semibold"
                >
                    Book Now
                </a>
            </div>

            {/* Right Side Video/Image */}
            <div className="flex justify-center md:px-8  md:pt-0   md:pb-8 bg-[#FFDDAD] items-center order-1 md:order-2">
                <video
                    src={herovideo}
                    className="w-full aspect-video sm:rounded-lg shadow-md"
                    loop
                    muted
                    autoPlay
                    playsInline
                    aria-label="Hotel promotional video"
                />
                {/* If you want an image instead of video:
        <img
          src="/your-image.jpg"
          alt="Hotel view"
          className="w-full max-w-md rounded-lg shadow-md"
        /> */}
            </div>
        </section>
    );
}
