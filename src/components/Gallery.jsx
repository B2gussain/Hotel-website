import React, { useState, useEffect } from "react";

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const allImages = [
        { id: 1, src: "/pic1.jpg", alt: "Gallery image 1" },
        { id: 2, src: "/pic2.jpg", alt: "Gallery image 2" },
        { id: 3, src: "/pic3.jpg", alt: "Gallery image 3" },
        { id: 4, src: "/pic4.jpg", alt: "Gallery image 4" },
        { id: 5, src: "/pic5.jpg", alt: "Gallery image 5" },
        { id: 6, src: "/pic6.jpg", alt: "Gallery image 6" },
        { id: 7, src: "/pic7.jpg", alt: "Gallery image 7" },
        { id: 8, src: "/pic8.jpg", alt: "Gallery image 8" },
      
    ];

    // Detect mobile screen size
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Control how many images to show
    const displayedImages = showAll
        ? allImages
        : isMobile
        ? allImages.slice(0, 4) // show 4 images on mobile
        : allImages.slice(0, 8); // show 8 on desktop initially

    return (
        <section id="Gallery" className="bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-10">
            {/* Header */}
            <div className=" mb-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#6C4002] playfair-display mb-0">
                    Gallery
                </h2>
            </div>

            {/* Masonry Layout */}
            <div className="max-w-6xl mx-auto">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {displayedImages.map((image) => (
                        <div
                            key={image.id}
                            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl break-inside-avoid group transition-all duration-300"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                {allImages.length > (isMobile ? 4 : 8) && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="border-[#6C4002]  border-[1px] text-[#6C4002] hover:bg-[#6C4002] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            {showAll ? "Show Less" : "See More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
