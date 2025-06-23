import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLessonOpen, setIsLessonOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const toggleLessons = () => setIsLessonOpen(!isLessonOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-red-500">
                        LearnJapanese
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/hiragana" className="text-gray-700 hover:text-red-500">Hiragana</Link>
                        <Link to="/katakana" className="text-gray-700 hover:text-red-500">Katakana</Link>
                        <Link to="/n5lesson" className="text-gray-700 hover:text-red-500">N5 Lessons</Link>

                        {/* Dropdown N5 Lessons */}
                        {/* <div className="relative group">
                            <button
                                onClick={toggleLessons}
                                className="flex items-center text-gray-700 hover:text-red-500 focus:outline-none"
                            >
                                N5 Lessons <FaChevronDown className="ml-1 text-xs" />
                            </button>
                            {isLessonOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-10">
                                    <Link to="/lessonone" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lesson 1</Link>
                                    <Link to="/lessontwo" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lesson 2</Link>
                                    <Link to="/lessonthree" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lesson 3</Link>
                                    <Link to="/lessonfour" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lesson 4</Link>
                                    <Link to="/lessonfive" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lesson 5</Link>
                                    <Link to="/lessonsix" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lesson 6</Link>
                                    <Link to="/lessonseven" className="block px-4 py-2 hover:bg-gray-100 text-sm">Lesson 7</Link>
                                </div>
                            )}
                        </div> */}

                        <Link to="/blog" className="text-gray-700 hover:text-red-500">Blog</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-red-500">Contact</Link>
                        <Link to={"/about"} className="text-gray-700 hover:text-red-500">About</Link>

                        <Link to={"/login"} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                            + Add Your Content
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-4 pb-4">
                        <Link to="/hiragana" onClick={closeMenu} className="block text-gray-700 hover:text-red-500">Hiragana</Link>
                        <Link to="/katakana" onClick={closeMenu} className="block text-gray-700 hover:text-red-500">Katakana</Link>

                        {/* Mobile N5 Lesson Dropdown */}
                        <div>
                            <button onClick={toggleLessons} className="flex items-center w-full text-left text-gray-700 hover:text-red-500">
                                N5 Lessons <FaChevronDown className="ml-1 text-xs" />
                            </button>
                            {isLessonOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link to="/lessonone" onClick={closeMenu} className="block text-gray-600 hover:text-red-500">Lesson 1</Link>
                                    <Link to="/lessontwo" onClick={closeMenu} className="block text-gray-600 hover:text-red-500">Lesson 2</Link>
                                    <Link to="/lessonthree" onClick={closeMenu} className="block text-gray-600 hover:text-red-500">Lesson 3</Link>
                                    <Link to="/lessonfour" onClick={closeMenu} className="block text-gray-600 hover:text-red-500">Lesson 4</Link>
                                    <Link to="/lessonfive" onClick={closeMenu} className="block text-gray-600 hover:text-red-500">Lesson 5</Link>
                                    <Link to="/lessonsix" onClick={closeMenu} className="block text-gray-600 hover:text-red-500">Lesson 6</Link>
                                    <Link to="/lessonseven" onClick={closeMenu} className="block text-gray-600 hover:text-red-500">Lesson 7</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/blog" onClick={closeMenu} className="block text-gray-700 hover:text-red-500">Blog</Link>
                        <Link to="/contact" onClick={closeMenu} className="block text-gray-700 hover:text-red-500">Contact</Link>
                        <Link to={"/about"} onClick={closeMenu} className="block text-gray-700 hover:text-red-500">About</Link>

                        <Link to={"/login"} className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                            + Add Your Content
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
