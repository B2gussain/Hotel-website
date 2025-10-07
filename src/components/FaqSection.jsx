import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What types of rooms are available?",
        answer: "We offer a variety of rooms including standard, deluxe, and suites to suit different preferences and budgets.",
    },
    {
        question: "Is breakfast included with the stay?",
        answer: "Yes! Complimentary breakfast is provided for all room bookings unless stated otherwise.",
    },
    {
        question: "Can I cancel or modify my booking?",
        answer: "Absolutely. You can cancel or modify your reservation according to our flexible cancellation policy.",
    },
    {
        question: "Are pets allowed at the hotel?",
        answer: "Pets are welcome in designated pet-friendly rooms. Please inform us in advance if you’re bringing a pet.",
    },
    {
        question: "Is there Wi-Fi available?",
        answer: "Yes, high-speed Wi-Fi is available throughout the hotel for all guests.",
    },
    {
        question: "What check-in and check-out times are available?",
        answer: "Check-in is from 2 PM and check-out is by 12 PM. Early check-in or late check-out can be requested subject to availability.",
    },
    {
        question: "Are parking facilities available?",
        answer: "Yes, we provide free on-site parking for all hotel guests.",
    },
    {
        question: "Does the hotel provide airport transfers?",
        answer: "Yes, airport transfer services are available on request. Additional charges may apply.",
    },
];


const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-2xl sm:text-4xl font-inter font-bold text-black">
                    Frequently Asked Questions (FAQ)
                </h2>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Container for two columns */}
                <div className="flex flex-col md:flex-row md:flex-wrap">
                    {/* First Column */}
                    <div className="w-full md:w-1/2 md:pr-2 space-y-4">
                        {faqs
                            .filter((_, index) => index % 2 === 0)
                            .map((faq, index) => {
                                const originalIndex = index * 2;
                                return (
                                    <div
                                        key={originalIndex}
                                        className="bg-[#F3F3F3] rounded-xl p-4 shadow-sm border border-gray-200"
                                    >
                                        <button
                                            onClick={() =>
                                                toggle(originalIndex)
                                            }
                                            className="w-full flex justify-between items-center text-left"
                                        >
                                            <span className="font-semibold text-gray-800 pr-2">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`flex-shrink-0 transition-transform text-black duration-200 ${
                                                    openIndex === originalIndex
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                            />
                                        </button>

                                        {openIndex === originalIndex && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>

                    {/* Second Column */}
                    <div className="w-full md:w-1/2 md:pl-2 space-y-4 mt-4 md:mt-0">
                        {faqs
                            .filter((_, index) => index % 2 === 1)
                            .map((faq, index) => {
                                const originalIndex = index * 2 + 1;
                                return (
                                    <div
                                        key={originalIndex}
                                        className="bg-[#F3F3F3] rounded-xl p-4 shadow-sm border border-gray-200"
                                    >
                                        <button
                                            onClick={() =>
                                                toggle(originalIndex)
                                            }
                                            className="w-full flex justify-between items-center text-left"
                                        >
                                            <span className="font-semibold text-gray-800 pr-2">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`flex-shrink-0 transition-transform text-black duration-200 ${
                                                    openIndex === originalIndex
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                            />
                                        </button>

                                        {openIndex === originalIndex && (
                                            <div className="mt-2 text-sm text-gray-700">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
