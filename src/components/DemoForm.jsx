import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section
      className="p-10 shadow-md rounded-xl scroll-mt-20"
      id="contact"
    >
    <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto bg-white shadow-xl">
      <div className="rounded-xl p-8  order-2 md:order-1">
        {submitted ? (
          <div className="text-center py-8">
            <div className="h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
                You're All Set!
            </h3>
            <p className="text-gray-600 mb-6">
               Thank you for signing up! We'll contact you shortly with details
               about your free demo class.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Free Demo Class Signup
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-200"
                >
                  Claim Your Free Class Now!
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="relative order-1 md:order-2">

      <img src="teach.jpg" alt="A teacher teaching student" className="rounded-xl w-full h-auto object-cover shadow-md" />

       <div className="absolute bottom-4 left-4 right-4 bg-blue-100 backdrop-blur-sm rounded-lg p-4 shadow-lg z-20">
        <div className="flex items-start space-x-3">
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://www.easymath.in/wp-content/uploads/2023/02/Kavita-Rana-2.png" alt="Kavita Rana" className="h-full w-full object-center object-cover"/>
            </div>
            <div>
                <h4 className="font-medium text-blue-600">Kavita Rana's Demo Class</h4>
                <p className="text-sm text-gray-700">Next Session: Today, 5:00 PM</p>
            </div>
        </div>
       </div>
      </div>
    </div>
    </section>
  );
};

export default DemoForm;
