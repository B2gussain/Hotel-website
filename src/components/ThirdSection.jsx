import React from "react";

const ThirdSection = () => {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2">
            {/* Text Section */}
            <div className="flex flex-col p-4 md:p-10 bg-white justify-center  space-y-4">
                <h3 className=" playfair-display lg:text-left text-3xl font-extrabold text-black leading-tight">
                    Find Us Easily
                </h3>
                <p className=" lg:text-left text-sm md:text-base text-black/80">
                    Nestled in the city center, Hotel Bliss is just minutes away
                    from major attractions, shopping areas, and the airport.
                </p>

                <button className="border-[#6C4002] border-2 text-[#6C4002] w-[70%]  sm:text-lg py-3 px-4 rounded-xl font-semibold">
                    Check out Location
                </button>
            </div>
            {/* Right Side Map */}
            <div className="flex justify-center p-5 sm:py-15  sm:px-10 bg-[#FFDDAD] items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28492.60053875765!2d82.17856817449874!3d26.789812019726273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1759581809789!5m2!1sen!2sin"
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
