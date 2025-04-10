import React from 'react'
import { FaBook, FaChalkboardTeacher, FaChartBar, FaGraduationCap, FaUserGraduate,  } from 'react-icons/fa'


const Skills = () => {
  return (
    <section className='py-16 bg-white scroll-mt-15' id="skills">
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>Credentials & Experience</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5'>

                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-sm hover:shadow-xl transition duration-300'>
                    <FaChalkboardTeacher className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>20+</h3>
                    <p className='text-gray-700'>Years teaching experience as a Maths educator</p>
                </div>
                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-sm hover:shadow-xl transition duration-300'>
                    <FaUserGraduate className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Innovative Teaching Methods</h3>
                    <p className='text-gray-700'>Real life applications and engaging strategies</p>
                </div>
                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-sm hover:shadow-xl transition duration-300'>
                    <FaChartBar className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Regular Test Series</h3>
                    <p className='text-gray-700'>Track your progress with quizzes and personalised feedback</p>
                </div>
                <div className='bg-gray-100 p-8 rouned-lg text-center shadow-sm hover:shadow-xl transition duration-300'>
                    <FaBook className='text-blue-600 text-4xl mb-4 inline' />
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Hybrid Learning</h3>
                    <p className='text-gray-700'>Attend classes Online or Offline as per your convenience</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills