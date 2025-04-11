import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Stories = () => {

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
      {
        name: "Dr. Sarah Chen",
        position: "High School Math Teacher",
        education: "M.Sc. in Mathematics Education",
        thoughts: "EduVision transformed my students' algebra skills! The interactive lessons make abstract concepts tangible.",
        keyPoints: [
          "Engaging video tutorials",
          "Personalized practice problems",
          "Real-time progress tracking"
        ]
      },
      {
        name: "James Rodriguez",
        position: "Parent & Engineer",
        education: "B.S. in Civil Engineering",
        thoughts: "My 10-year-old went from hating math to solving equations confidently. The gamified quizzes are a game-changer!",
        keyPoints: [
          "Kid-friendly interface",
          "Instant feedback on mistakes",
          "Affordable pricing"
        ]
      },
      {
        name: "Aisha Patel",
        position: "College Student",
        education: "Computer Science Major",
        thoughts: "EduVision’s calculus prep saved my GPA. The AI tutor breaks down problems step-by-step like a patient professor.",
        keyPoints: [
          "24/7 AI homework help",
          "Bite-sized concept reviews",
          "Mobile-friendly"
        ]
      },
      {
        name: "Prof. Mark Williams",
        position: "University Lecturer",
        education: "Ph.D. in Applied Mathematics",
        thoughts: "I recommend EduVision to my first-year students. Their data visualization tools make stats intuitive.",
        keyPoints: [
          "Research-backed curriculum",
          "Collaborative whiteboard",
          "Supports advanced topics"
        ]
      },
      {
        name: "Emily Tran",
        position: "Middle School Student",
        education: "8th Grade",
        thoughts: "Math used to be scary, but now I love the EduVision challenges! The badges make learning fun.",
        keyPoints: [
          "Colorful, simple explanations",
          "No-stress practice mode",
          "Fun math competitions"
        ]
      }
    ];

  return (
    <section className='py-16 bg-white scroll-mt-15' id="stories">
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center text-gray-900 mb-4'>Our Student's Success Stories</h2>
            <p className='text-gray-700 text-center max-w-3xl mx-auto mb-12'>Hear from our students who achieved their academic goals with our guidance.</p>

            <div className='relative max-w-4xl mx-auto'>
                <div className='overflow-hidden'>
                    <div className='flex transition-transform duration-500'
                      style={{transform:`translateX(-${activeTestimonial * 100}%)`,}}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className='w-full flex-shrink-0 px-4'>
                                <div className='bg-gray-50 p-8 rounded-lg shadow-sm'>
                                    <div className='flex flex-col md:flex-row items-center mb-6'>
                                        <div>
                                            <h3 className='text-xl font-bold text-gray-900'>{testimonial.name}</h3>
                                            <p className='text-blue-600 font-medium'>{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-700 italic'>"{testimonial.thoughts}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex justify-center mt-8 space-x-2'>
                        {testimonials.map((_, index) => (
                            <button
                             key={index}
                             onClick={() => setActiveTestimonial(index)}
                             className={`w-3 h-3 rounded-full cursor-pointer ${activeTestimonial === index ? "bg-blue-600" : "bg-gray-300"}`}
                             aria-label={`View testimonial ${index + 1}`}
                             ></button>
                        ))}
                </div>

                <button className='absolute top-1/2 left-0 -translate-y-1/2 -ml-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg cursor-pointer'
                onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1,)}
                ><FaChevronLeft className='text-gray-700' /></button>

                <button className='absolute top-1/2 right-0 -translate-y-1/2 -mr-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg cursor-pointer'
                onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1,)}
                ><FaChevronRight className='text-gray-700' /></button>
            </div>
        </div>
    </section>
  )
}

export default Stories