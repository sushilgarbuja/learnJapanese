import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-6 text-center">
                        About LearnJapanese
                    </h1>

                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        <strong>LearnJapanese</strong> is a modern web application built to help Nepali and international learners master the Japanese language through a structured, friendly, and efficient learning experience. Our platform is inspired by the popular textbook series <em>Minna no Nihongo</em> and focuses on providing a strong foundation in <strong>Hiragana</strong>, <strong>Katakana</strong>, vocabulary, grammar, and conversational practice.
                    </p>

                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        This project is especially designed to support learners who aim to <strong>apply for education, work, or training opportunities in Japan</strong>. It bridges the gap between traditional classroom resources and self-paced digital tools by offering responsive design, interactive content, and accessible resources in Nepali, English, and Japanese.
                    </p>

                    <h2 className="text-2xl font-semibold text-red-500 mt-8 mb-4">Our Mission</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Make Japanese language learning easy and approachable for all levels.</li>
                        <li>Provide content aligned with JLPT N5/N4 standards and practical usage.</li>
                        <li>Support Nepali learners preparing for opportunities in Japan.</li>
                        <li>Create a community-driven platform with user-contributed content and tools.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-red-500 mt-8 mb-4">Features</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Hiragana and Katakana charts with Nepali, Romanized, and English guides.</li>
                        <li>Vocabulary and grammar breakdown by lesson (Minna no Nihongo based).</li>
                        <li>Sample sentences and conversational patterns.</li>
                        <li>Responsive design for mobile and desktop learning.</li>
                    </ul>

                    <div className="mt-10 text-center">
                        <p className="text-lg font-medium text-indigo-600">
                            We believe language should not be a barrier to your dreams.
                        </p>
                        <p className="text-md text-gray-600">
                            With LearnJapanese, start your journey to Japan today — one character at a time.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
} 
