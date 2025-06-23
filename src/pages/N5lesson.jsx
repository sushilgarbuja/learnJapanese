import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const lessons = [
    { id: 1, title: 'Lesson 1', path: '/lessonone', description: 'Greetings and basic expressions' },
    { id: 2, title: 'Lesson 2', path: '/lessontwo', description: 'Shopping and counters' },
    { id: 3, title: 'Lesson 3', path: '/lessonthree', description: 'Daily activities and locations' },
    { id: 4, title: 'Lesson 4', path: '/lessonfour', description: 'Time and schedule' },
    { id: 5, title: 'Lesson 5', path: '/lessonfive', description: 'Transportation and directions' },
    { id: 6, title: 'Lesson 6', path: '/lessonsix', description: 'Verbs and hobbies' },
    { id: 7, title: 'Lesson 7', path: '/lessonseven', description: 'Giving, tools, and polite words' },
];

const N5LessonPage = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
                        Minna no Nihongo – N5 Lessons
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {lessons.map((lesson) => (
                            <Link
                                key={lesson.id}
                                to={lesson.path}
                                className="block bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <h2 className="text-xl font-bold text-red-500 mb-2">{lesson.title}</h2>
                                <p className="text-gray-600 text-sm">{lesson.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default N5LessonPage;
