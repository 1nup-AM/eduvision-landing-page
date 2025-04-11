import React from 'react'
import { FaBook, FaChalkboardTeacher, FaChartBar, FaGraduationCap, FaUserGraduate,  } from 'react-icons/fa'


const Skills = () => {
  return (
    <section className='py-16 bg-white scroll-mt-15' id="skills">
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5'>

                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300'>
                    <FaChalkboardTeacher className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Interactive Courses </h3>
                    <p className='text-gray-700'>Self-paced video lessons, quizzes, and assignments for skill-based and academic subjects.</p>
                </div>
                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300'>
                    <FaUserGraduate className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'> Live Tutoring & Doubt Solving </h3>
                    <p className='text-gray-700'>Real-time sessions with expert mentors for personalized guidance.</p>
                </div>
                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300'>
                    <FaChartBar className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Certifications & Progress Tracking </h3>
                    <p className='text-gray-700'>Earn shareable certificates, track growth, and set learning goals</p>
                </div>
                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300'>
                    <FaBook className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Community & Peer Learning </h3>
                    <p className='text-gray-700'>Discussion forums, study groups, and collaborative projects to keep learning social and fun.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills