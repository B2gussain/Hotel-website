import React from "react";

const ForthSection = () => {
    const images = [
        { img: "/Group-1.svg", title: "TV" },
        { img: "/Group-2.svg", title: "Luxury Bathtub" },
        { img: "/Group-3.svg", title: "Travel" },
        { img: "/Group-4.svg", title: "Wallet" },
        { img: "/Group-5.svg", title: "Secure" },
        { img: "/Group-6.svg", title: "Clock" },
        { img: "/Group-7.svg", title: "Bag" },
        { img: "/Group-8.svg", title: "Single Bed" },
        { img: "/Group-9.svg", title: "Double Bed" },
        { img: "/Group-10.svg", title: "Wallet" },
        { img: "/Group-11.svg", title: "Drink" },
        { img: "/Group-12.svg", title: "Food" },
    ];

    return (
        <section className="bg-white py-10 flex flex-col gap-6">
          

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 px-6">
                {images.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                        <p className="mt-2 text-center text-black text-sm md:text-base">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ForthSection;
