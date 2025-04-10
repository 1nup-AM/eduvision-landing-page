import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Stories = () => {

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        { 
          image:"https://www.easymath.in/wp-content/uploads/2024/03/suman-120x120.png",
          name: "Suman Kumar Das",
          position: "Capex project head at Hindalco Industries Limited",
          education: "Ex D.P.S. Student, year 2006",
          testimonial: "Today I am a Capex project head employed at Hindalco industries limited. I was taught by Kavita mam for class 11th and 12th and we were from the very first batch she taught. Kavita mam is known for her patience in solving doubts and has a friendly approach towards students. She also specializes in explaining concepts in a simple way with the help of practical examples. She helps students unwrap their capabilities at different times. Thank you for all the wisdom you shared and setting a great example, really enjoyed your lectures. I may not have shown earlier but as a guide and friend Kavita mam made our childhood wonderful and enjoyable. Thank you soooooo much mam for your efforts to build us.",
          relationship: "Class 11th & 12th Student",
          keyPoints: [
            "Patience in solving doubts",
            "Friendly approach to students",
            "Simplifies concepts with practical examples",
            "Helps students discover their capabilities"
          ]
        },
        { 
          image:"https://www.easymath.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-29-at-13.18.15-120x120.jpeg",
          name: "Vishal Gaur",
          position: "Trajectory scientist in ISRO and President of Mathematical Society (PDE)",
          education: "Ex D.A.V. Student",
          testimonial: "She taught me in class 11 and 12. Today I am a trajectory scientist in ISRO and a president of mathematical society which works in Partial differential equation. I can assure she is one of the best teacher who not only taught me mathematics but also help me to understand how to study mathematics on my own. She inspired you to see different concepts from different perspective and these perspective will help you to make your life easier in mathematics at later stage of your life when critical thinking is required. So, if parents are looking for a teacher who not only teaches your ward but also make him/her self reliant at later stages. She is the one you can look after without a doubt.",
          relationship: "Class 11th & 12th Student",
          keyPoints: [
            "Teaches how to learn mathematics independently",
            "Offers multiple perspectives on concepts",
            "Develops critical thinking skills",
            "Builds self-reliance in students"
          ]
        },
        { 
          image:"https://www.easymath.in/wp-content/uploads/2023/03/Pravesh-120x120.jpg",
          name: "Pravesh Aggarwal",
          position: "Software Engineer at Microsoft, Seattle (OneNote team)",
          education: "EX Student D.P.S. KORBA, I.I.T. Graduate",
          testimonial: "Hi, I'm Pravesh. I am currently working at Microsoft, Seattle as a software engineer in OneNote team. I remember one of the best times during my 9th & 10th class when I used to study Math from Kavita mam. I still remember the curiosity mam created whenever we started any new chapter. All her explanations made me love math more than ever before. Everything from the trigonometry formulas to the beauty of calculus. I remember her never ending love for tea. She loved the whiteboard next after tea. I also remember a very energetic kid who used to run around playing, who is a lot bigger now. I will always cherish these memories and am very thankful to Kavita mam for all the care and effort she put in all of us.",
          relationship: "Class 9th & 10th Student",
          keyPoints: [
            "Creates curiosity for new topics",
            "Makes mathematics enjoyable",
            "Personal connection with students",
            "Memorable teaching style"
          ]
        },
        { 
          image:"https://www.easymath.in/wp-content/uploads/2023/03/sanskar-120x120.png",
          name: "Sanskar Singh",
          position: "Student",
          education: "Ex D.A.V. Student, B-Tech (Abdul Kalam Technical University)",
          testimonial: "Mam, this is really great, i am very much proud being one of your student. I am writing this down just to encourage other students to join your classes. One thing that i like most about mam is that she always support each and every student of a class unlike others who just focuses on brilliant students, mam supports average, below average, or great students in whatever way she can. Well this unbiased nature of mam is the best, for a student its very much required to not being judged for their mistakes by their teachers and that is how mam treated us all.",
          relationship: "Former Student",
          keyPoints: [
            "Supports all students equally",
            "Non-judgmental approach",
            "Encourages improvement at all levels",
            "Unbiased teaching methodology"
          ]
        },
        { 
          image:"https://www.easymath.in/wp-content/uploads/2023/03/student2-1-120x120.jpg",
          name: "Harshita Neelakantam",
          position: "Student",
          education: "",
          testimonial: "I found out about mam from a neighbour of mine at the beginning of class 10. I took a demo, and instantly loved it. With the excellent teaching and just the right amount of practice, I found in mam the perfect Math tutor every student wants. She made me a math lover from an average student who hated math. So if you want to love math, this is the place!",
          relationship: "Class 10th Student",
          keyPoints: [
            "Transforms math haters into math lovers",
            "Excellent teaching methodology",
            "Balanced practice approach",
            "Instant connection with students"
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
                                        <div className='w-20 h-20 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6'>
                                            <img src={testimonial.image} alt={testimonial.name} className='w-full h-full object-cover' />
                                        </div>
                                        <div>
                                            <h3 className='text-xl font-bold text-gray-900'>{testimonial.name}</h3>
                                            <p className='text-blue-600 font-medium'>{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-700 italic'>"{testimonial.testimonial}"</p>
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