'use client';

import { useState } from 'react';

export function InformationRequest() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      className="relative"
      style={{ 
        padding: '130px 0px 70px 0px',
        backgroundColor: '#1e3181'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(https://ccpi.vn/wp-content/uploads/2017/09/hp2-testimonial-bg.jpg)',
          opacity: 0.7
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Title and Description */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '38px',
                  fontWeight: '600',
                  letterSpacing: '0px',
                  textTransform: 'none',
                  lineHeight: '1.2'
                }}
              >
                Information Request
              </h3>
            </div>
            
            {/* Blue Divider */}
            <div className="mb-6">
              <div 
                className="border-b-4"
                style={{
                  maxWidth: '55px',
                  borderColor: '#254099',
                  borderWidth: '3px'
                }}
              />
            </div>
            
            {/* Description */}
            <div>
              <p 
                className="text-white leading-relaxed"
                style={{
                  fontSize: '19px',
                  color: '#e5e5e5',
                  textTransform: 'none'
                }}
              >
                Please fill out the form and press the submit button.<br />
                We will get back to you with 1-2 business days.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Row - Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name*"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Subject and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject*"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message*"
                  rows={6}
                  className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border-0 rounded-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                  style={{ color: "#254099" }}
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}