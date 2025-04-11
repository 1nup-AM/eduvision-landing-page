import React from 'react'
import { FaEnvelopeSquare, FaFacebook, FaInstagram, FaLink, FaLinkedin, FaLocationArrow, FaPhone, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400'>
                <div>
                    <img src="owl.png" alt="Easy Math" className='bg-gray-300 h-14 rounded mb-4'/>
                    <p className='font-semibold mb-4 text-white'>Edu Vision Pvt Ltd</p>
                    <p className='max-w-xs'>Making learning easy and accessible for all students.</p>
                </div>

                <div>
                    <h3 className='text-lg font-bold mb-4 text-white'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li><a href="#" className=' hover:text-white transition cursor-pointer'>Home</a></li>
                        <li><a href="#courses" className=' hover:text-white transition cursor-pointer'>Courses</a></li>
                        <li><a href="#stories" className=' hover:text-white transition cursor-pointer'>Success Stories</a></li>
                        <li><a href="#skills" className=' hover:text-white transition cursor-pointer'>About</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-lg font-bold mb-4 text-white'>Our Programs</h3>
                    <ul className='space-y-2'>
                        <li>CBSE/ICSE Classes</li>
                        <li>JEE Preparation</li>
                        <li>Summer Camps</li>
                        <li>Olympiad Training </li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h3 className='text-lg font-bold mb-4 text-white'>Stay Connected</h3>
                    <p className='mb-4'>Follow us on social media for daily learning tips, student success stories, and update on our platforms.</p>
                    <div className='flex space-x-4'>
                        <a><FaYoutube /></a>
                        <a><FaInstagram /></a>
                        <a><FaFacebook /></a>
                        <a ><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
        </div>
    </footer>
  )
}

export default Footer