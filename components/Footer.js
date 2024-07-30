import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
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
  )
}

export default Footer