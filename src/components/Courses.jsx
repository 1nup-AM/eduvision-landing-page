import React from "react";

const Courses = () => {
  const courses = [
    { 
      img:"logic.jpeg",
      name: "Crash Course in Mathematical and Logical Reasoning",
      description:
        "An intensive course designed to strengthen your mathematical and logical reasoning skills, essential for various competitive exams.",
      // duration: "4 weeks",
    },
    { 
      img:"apt.jpeg",
      name: "Quantitative Aptitude for Competitive Examinations",
      description:
        "Comprehensive classes covering all aspects of quantitative aptitude required for numerous competitive exams.",
      // duration: "6 weeks",
    },
    { 
      img:"bank.jpeg",
      name: "Banking Exams Preparation (PO, SBI-PO, RBI)",
      description:
        "Specialized coaching for banking sector examinations including Bank PO, SBI-PO, and RBI exams.",
      // duration: "8 weeks",
    },
    { 
      img:"manage.jpeg",
      name: "Management Entrance Exam Preparation (MBA, MAT, GMAT, IIFT)",
      description:
        "Targeted classes for management entrance exams covering quantitative ability, data interpretation, logical reasoning, and verbal skills.",
      // duration: "10 weeks",
    },
    { 
      img:"civil.jpeg",
      name: "UPSC and Civil Services Exam Preparation",
      description:
        "Comprehensive guidance for UPSC examinations with special focus on quantitative aptitude and logical reasoning components.",
      // duration: "12 weeks",
    },
    { 
      img:"ssc.jpeg",
      name: "SSC and Railway Recruitment Board Exam Preparation",
      description:
        "Specialized courses for SSC Combined Preliminary exams and Railway Recruitment Board exams covering all quantitative and reasoning aspects.",
      // duration: "6 weeks",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 scroll-mt-20" id="courses">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Featured Courses
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Comprehensive mathematics courses and lecture videos designed to help
          you excel in competitive exams and build a strong foundation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 ease-in-out border border-gray-300 hover:border-blue-600 w-full max-w-xs mx-auto"
            >
              {/*3D tilt layer */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="h-40 overflow-hidden relative">
                <img
                  src={course.img}
                  alt={course.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/*Subtle reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent"></div>
              </div>
              <div className="p-4 relative min-h-[180px] transition-transform duration-500 group-hover:translate-y-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 h-24 group-hover:text-gray-800 transition-colors">{course.description}</p>

                {/*3D Floating badge */}
                {/* <span
                  className="bg-blue-600 text-white font-semibold py-1.5 px-3 rounded-2xl text-xs inline-block absolute bottom-4 left-4 transition-all duration-500 group-hover:shadow-lg group-hover:translate-y-1 group-hover:scale-105">
                  {course.duration}
                </span> */}
              </div>

              {/*hidden border animation */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none transition-all duration-500 group-hover:border-blue-300/50 group-hover:scale-[0.98]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
