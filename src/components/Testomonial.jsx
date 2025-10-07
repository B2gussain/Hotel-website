import React, { useRef, useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        message:
            "It was so nice talking to you ma'am. You cleared all my doubts and guided me like my mom ❤️",
        position: "left",
    },
    {
        id: 2,
        message:
            "Give me a call. Thank you so much for helping me take the decision 🙏",
        position: "center",
    },
    {
        id: 3,
        message:
            "I feel so confident now. Thanks for your support and guidance. 😊",
        position: "right",
    },
];

const Testimonial = () => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const scrollToCard = (index) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const cards = container.children;
        if (cards[index]) {
            const card = cards[index];
            const containerWidth = container.offsetWidth;
            const cardWidth = card.offsetWidth;
            const scrollLeft =
                card.offsetLeft - (containerWidth - cardWidth) / 2;

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const cards = container.children;

        let closestIndex = 0;
        let minDistance = Infinity;

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardLeft = card.offsetLeft;
            const cardWidth = card.offsetWidth;
            const cardCenter = cardLeft + cardWidth / 2;
            const containerCenter = scrollLeft + containerWidth / 2;
            const distance = Math.abs(cardCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }

        setActiveIndex(closestIndex);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);

            // Center the middle card on initial load
            setTimeout(() => {
                scrollToCard(1);
            }, 100);

            return () => {
                container.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <section className="text-center px-4 flex flex-col justify-center items-center py-12 bg-white">
            <h2 className="text-3xl text-[#4A3B33] font-semibold mb-2">
                What Our Guests Say
            </h2>
            <p className="text-[#4A3B33] mb-10">
                Real experiences from travelers around the world.
            </p>

            {/* Centered container with proper constraints */}
            <div className="w-full max-w-4xl mx-auto">
                {" "}
                {/* Reduced max-width for better centering */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 justify-start md:justify-center overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 scrollbar-hide"
                >
                    {testimonials.map((t, index) => (
                        <div
                            key={t.id}
                            className={`flex-shrink-0 snap-center w-[250px] h-[470px] rounded-[35px] border-[8px] border-black bg-black relative transition-all duration-300 ${
                                activeIndex === index
                                    ? "opacity-100 scale-100 z-10"
                                    : "opacity-40 scale-90"
                            }`}
                            onClick={() => scrollToCard(index)}
                        >
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-gray-700 rounded-full"></div>

                            <div className="w-full h-full bg-[#e5ddd5] rounded-[1.8rem] p-4 flex items-end">
                                <div className="bg-[#dcf8c6] px-4 py-3 rounded-2xl rounded-br-none text-sm text-black shadow-md">
                                    {t.message}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeIndex === index
                                    ? "bg-black scale-110"
                                    : "bg-gray-300"
                            }`}
                            onClick={() => scrollToCard(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
