import React from "react";

const ThirdSection = () => {
    return (
        <section id="Find" className="w-full grid grid-cols-1 lg:grid-cols-2">
            {/* Text Section */}
            <div className="flex flex-col p-4 md:p-10 bg-white justify-center  space-y-4">
                <h3 className=" playfair-display lg:text-left text-3xl font-extrabold text-black leading-tight">
                    Find Us Easily
                </h3>
                <p className=" lg:text-left text-sm md:text-base text-black/80">
                    Nestled in the city center, Hotel Bliss is just minutes away
                    from major attractions, shopping areas, and the airport.
                </p>

                <a
                    href="https://maps.app.goo.gl/FciWhQqvcGSk11A18" target="_blank"
                    className="border-[#6C4002] border-2 text-[#6C4002] w-[70%] text-center  sm:text-lg py-3 px-4 rounded-xl font-semibold"
                >
                    Check out Location
                </a>
            </div>
            {/* Right Side Map */}
            <div className="flex justify-center p-5 sm:py-15  sm:px-10 bg-[#FFDDAD] items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.79010289042066!2d82.20125089957347!3d26.794004821532457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07687e3f2e51%3A0x74ccb2fe69f3a440!2sPrabhubhakti%20Ayodhya!5e0!3m2!1sen!2sin!4v1760188709011!5m2!1sen!2sin"
                    width="600"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-xl"
                ></iframe>
            </div>
        </section>
    );
};

export default ThirdSection;
