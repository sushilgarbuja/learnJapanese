import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const faqs = [
    {
        question: 'How do I start learning Japanese with this site?',
        answer:
            'Begin with the Hiragana and Katakana pages, then move to N5 Lessons. Each lesson includes vocabulary, grammar, and examples with translations.',
    },
    {
        question: 'Is this site suitable for JLPT preparation?',
        answer:
            'Absolutely! The content is tailored for JLPT N5 and N4 levels with structured vocabulary, grammar notes, and quizzes coming soon.',
    },
    {
        question: 'Do I need prior knowledge of Japanese?',
        answer:
            'No. This platform is beginner-friendly. You can start from scratch and gradually build up your reading, writing, and speaking skills.',
    },
    {
        question: 'Will this help me get a job or study opportunity in Japan?',
        answer:
            'Yes, this project is designed to help you build a solid foundation in Japanese for study or job applications, especially for N5/N4 certification.',
    },
    {
        question: 'Can I contribute or suggest improvements?',
        answer:
            'Of course! Use the contact page to share your suggestions, report bugs, or contribute new lessons or blog content.',
    },
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Frequently Asked Questions</h1>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 cursor-pointer border border-gray-200"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                    <span className="text-red-500 text-xl">{activeIndex === index ? '-' : '+'}</span>
                                </div>
                                {activeIndex === index && (
                                    <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
