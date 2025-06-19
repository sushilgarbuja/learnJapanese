import React from 'react';

function HeroSection() {
    return (
        <section className="h-screen relative bg-gradient-to-br from-red-100 via-white to-red-100 py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                        Learn Japanese the Smart Way
                        <br />
                        <span className="text-red-500">Hiragana・Katakana・N5 Grammar</span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Master reading, writing, and speaking Japanese from beginner to JLPT N5 level. Interactive lessons, quizzes, and engaging content await you.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="#start-learning"
                            className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition duration-300 shadow-md"
                        >
                            🚀 Start Learning
                        </a>
                        <a
                            href="#about"
                            className="border border-red-500 text-red-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-red-50 transition duration-300"
                        >
                            📘 Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
