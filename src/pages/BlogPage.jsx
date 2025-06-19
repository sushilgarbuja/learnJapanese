import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
    {
        id: 1,
        title: 'Mastering Hiragana in 7 Days',
        description: 'Learn how to read and write Hiragana with proven tips, mnemonics, and interactive practice.',
        image: 'https://source.unsplash.com/400x250/?japan,hiragana',
        link: '#',
    },
    {
        id: 2,
        title: 'Katakana Tricks You Should Know',
        description: 'Boost your reading speed by recognizing Katakana patterns quickly and easily.',
        image: 'https://source.unsplash.com/400x250/?japan,katakana',
        link: '#',
    },
    {
        id: 3,
        title: 'Top 10 N5 Grammar Points Explained Simply',
        description: 'Struggling with JLPT N5 grammar? This guide breaks down the basics step-by-step.',
        image: 'https://source.unsplash.com/400x250/?japan,study',
        link: '#',
    },
];

function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800">Our Blog</h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Dive deeper into Japanese language and culture through our curated blog articles. Ideal for learners aiming to apply to Japan.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                                <p className="mt-3 text-gray-600 text-sm">{post.description}</p>
                                <a
                                    href={post.link}
                                    className="inline-block mt-4 text-red-500 hover:underline font-medium"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default BlogPage;
