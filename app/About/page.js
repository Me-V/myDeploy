import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-100">About Us</h1>

                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-gray-200">Our Mission</h2>
                    <p className="leading-relaxed text-lg text-gray-300">
                        Welcome to Get Me A Chai! Our mission is to help creators get the support they need to keep creating amazing content. Whether you&apos;re an artist, writer, musician, or any kind of creator, our platform offers you the tools to connect with your audience and monetize your passion.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-gray-200">Features</h2>
                    <ul className="list-disc list-inside leading-relaxed text-lg text-gray-300 space-y-2">
                        <li>Non-Subscription-based support</li>
                        <li>Exclusive content for supporters</li>
                        <li>Customizable creator pages</li>
                        <li>Community engagement tools</li>
                        <li>Secure payment processing</li>
                    </ul>
                </section>

                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-gray-200">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-72 p-6 m-4 bg-gray-800 rounded-xl shadow-xl transition-transform transform hover:scale-105">
                            <Image
                                className='rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-500'
                                src="/vasu.jpg"
                                alt="Vasu Sharma"
                                width={128}
                                height={128}
                            />
                            <h3 className="text-2xl font-semibold text-center text-gray-100">Vasu Sharma</h3>
                            <p className="text-center text-gray-400">Developer</p>
                        </div>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-4xl font-semibold mb-6 text-gray-200">Join Us</h2>
                    <p className="leading-relaxed text-lg text-gray-300 mb-8">
                        Ready to take your content to the next level? Join our platform today and start building your community!
                    </p>
                    <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        Get Started
                    </a>
                </section>
            </div>

            <div className="container mx-auto mt-16 text-center flex flex-col items-center">
                <div className="mb-6 flex space-x-6">
                    <a href="https://github.com/Me-V" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaGithub size={60} />
                    </a>
                    <a href="https://www.instagram.com/me_love_seeker/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaInstagram size={60} />
                    </a>
                </div>
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Get Me A Chai. All rights reserved.</p>
            </div>
        </div>
    );
};

export default About;
