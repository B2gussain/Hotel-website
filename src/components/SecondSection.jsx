import React, { useState, useEffect } from "react";
import secondImg from "../assets/secondImg.jpg";

const SecondSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample room data - you can replace with actual data
    const roomData = [
        {
            title: "Deluxe Room",
            description: "Cozy space with modern amenities.",
            price: "1999",
            image: secondImg,
        },
        {
            title: "Premium Suite",
            description: "Spacious suite with premium amenities.",
            price: "2999",
            image: secondImg,
        },
        {
            title: "Executive Room",
            description: "Perfect for business travelers.",
            price: "2499",
            image: secondImg,
        },
        {
            title: "Family Room",
            description: "Comfortable space for the whole family.",
            price: "3499",
            image: secondImg,
        },
    ];

    // Auto scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % roomData.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [roomData.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % roomData.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + roomData.length) % roomData.length
        );
    };

    const currentRoom = roomData[currentSlide];

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
            {/* Image Slider Section */}
            <div className="flex justify-center p-0 sm:p-8 bg-[#FFDDAD] items-center relative">
                <div className="w-full relative overflow-hidden md:rounded-lg shadow-md">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {roomData.map((room, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full aspect-video object-cover sm:rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Next slide"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Slide indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {roomData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentSlide
                                        ? "bg-white"
                                        : "bg-white/50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Text Content Section - No sliding, just content change */}
            <div className="flex flex-col p-4 md:p-10 bg-white justify-center space-y-4">
                <h3 className="md:text-center playfair-display lg:text-left text-3xl lg:text-[32px] font-extrabold text-[#6C4002] leading-tight">
                    Our Rooms & Suites
                </h3>
                <p className="md:text-center lg:text-left text-sm md:text-base text-[#6C4002]/80">
                    Choose from a variety of luxurious rooms designed to provide
                    comfort and relaxation.
                </p>

                {/* Room Details - Static, just changes content */}
                <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold text-black">
                        {currentRoom.title}
                    </h3>
                    <p className="text-[16px] font-[400] text-black">
                        {currentRoom.description}
                    </p>
                </div>

                <p className="text-[#4A3B33] font-bold text-[16px]">
                    Free Services{" "}
                </p>
                <div className="flex gap-8 text-black font-semibold">
                    <div className="flex flex-col justify-center items-center">
                        <img src="/Group-1.svg" className="h-8 w-8" alt="TV" />
                        <p className="text-[12px]">TV</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src="/Group-13.svg"
                            className="h-8 w-8"
                            alt="Food"
                        />
                        <p className="text-[12px]">Food</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src="/Group-15.svg"
                            className="h-8 w-8"
                            alt="Bathroom"
                        />
                        <p className="text-[12px]">Bathroom</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src="/Group-9.svg"
                            className="h-8 w-8"
                            alt="Bedroom"
                        />
                        <p className="text-[12px]">Bedroom</p>
                    </div>
                </div>

                {/* Price and Button - Static, just changes content */}
                <div className="flex flex-col-reverse md:flex-row gap-4 mt-4 ">
                    <button className="bg-[#6C4002] hover:bg-[#6C4002] text-white text-base sm:text-lg py-3 px-18 rounded-xl font-semibold">
                        Book Now
                    </button>
                    <p className="text-black text-xl lg:text-2xl my-auto font-bold">
                        Start with ₹{currentRoom.price}
                    </p>
                </div>

                <p className="text-black text-sm font-semibold">
                    Luxury, comfort, and convenience — just one click away
                </p>
            </div>
        </section>
    );
};

export default SecondSection;
