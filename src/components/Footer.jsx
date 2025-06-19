import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-red-500 mb-4">LearnJapanese</h2>
                    <p className="text-gray-400 text-sm">
                        Master Hiragana, Katakana, and N5 Grammar. Your smart Japanese learning companion.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to={'/hiragana'} className="hover:text-red-400 transition">Hiragana</Link></li>
                        <li><Link to={'/katakana'} className="hover:text-red-400 transition">Katakana</Link></li>
                        <li><a href="#n5" className="hover:text-red-400 transition">N5 Lessons</a></li>
                        <li><Link to={'/about'} className="hover:text-red-400 transition">About Us</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="#blog" className="hover:text-red-400 transition">Blog</Link></li>
                        <li><Link to={'/faq'} className="hover:text-red-400 transition">FAQs</Link></li>
                        <li><Link to={'/contact'} className="hover:text-red-400 transition">Contact</Link></li>
                        <li><a href="#privacy" className="hover:text-red-400 transition">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <p className="text-gray-400 text-sm mb-4">Follow us on social media for new updates.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-red-400"><FaFacebookF /></a>
                        <a href="#" className="text-gray-300 hover:text-red-400"><FaTwitter /></a>
                        <a href="#" className="text-gray-300 hover:text-red-400"><FaInstagram /></a>
                        <a href="#" className="text-gray-300 hover:text-red-400"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} LearnJapanese. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
