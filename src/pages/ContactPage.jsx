import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-center text-gray-600 mb-10">
                        We'd love to hear from you! Whether you have questions, feedback, or want to
                        contribute to LearnJapanese, feel free to reach out.
                    </p>

                    <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-10 text-center text-gray-500 text-sm">
                        This project was built as part of my journey to apply to Japan and help others learn Japanese from scratch.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 
