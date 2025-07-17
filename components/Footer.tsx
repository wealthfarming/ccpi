'use client';

import { useState } from 'react';
import { CaretUp, PaperPlaneRight, Envelope } from '@phosphor-icons/react';
import Image from 'next/image';

export function Footer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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
    console.log('Footer form submitted:', formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="text-white" style={{ backgroundColor: '#1f1f1f' }}>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info Column */}
            <div className="lg:col-span-1">
              {/* Company Logo */}
              <div className="mb-6">
                <Image
                  src="https://ccpi.vn/wp-content/uploads/2023/12/CCPI-backend-nen-trang-1-300x73.png"
                  alt="CCPI Logo"
                  width={255}
                  height={62}
                  className="max-w-[255px] h-auto"
                />
              </div>

              {/* Office Locations */}
              <div className="space-y-4">
                {/* USA Office */}
                <div className="flex items-start gap-3">
                  <PaperPlaneRight size={16} weight="fill" className="text-white mt-1" />
                  <div>
                    <strong className="text-white">USA</strong> <span className="text-gray-400">BeQ Holdings INC (US), 200 Continental Drive, Newark, DE 19713, USA</span>
                  </div>
                </div>

                {/* Singapore Office */}
                <div className="flex items-start gap-3">
                  <PaperPlaneRight size={16} weight="fill" className="text-white mt-1" />
                  <div>
                    <strong className="text-white">Singapore</strong> <span className="text-gray-400">14 Robinson Road #08-01A,<br />
                    Far East Finance Building,<br />
                    Singapore (048545)</span>
                  </div>
                </div>

                {/* Vietnam Office */}
                <div className="flex items-start gap-3">
                  <PaperPlaneRight size={16} weight="fill" className="text-white mt-1" />
                  <div>
                    <strong className="text-white">Viet Nam</strong> <span className="text-gray-400">67 Dinh Thi Thi Street, Van Phuc City,<br />
                    Thu Duc District, Ho Chi Minh City, Viet Nam</span>
                  </div>
                </div>

                {/* UK Office */}
                <div className="flex items-start gap-3">
                  <PaperPlaneRight size={16} weight="fill" className="text-white mt-1" />
                  <div>
                    <strong className="text-white">United Kingdom</strong> <span className="text-gray-400">128 City Road, London,<br />
                    United Kingdom, EC1V 2NX, UK</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Envelope size={16} weight="fill" className="text-white" />
                  <div>
                    <strong className="text-white">Email</strong> <span className="text-gray-400">contact@ccpi.vn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links Column */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://ccpi.vn/legal-term-of-service/" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Blog Links Column */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">Blog</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://ccpi.vn/warning-signs-preparing-for-a-global-recession/" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    Warning Signs: Preparing for a Global Recession
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ccpi.vn/understanding-behavioral-finance-leveraging-market-psychology-for-smart-investment-decisions/" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    Understanding Behavioral Finance: Leveraging Market Psychology for Smart Investment Decisions
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ccpi.vn/robert-kiyosakis-urgent-warning-why-the-financial-collapse-of-the-us-is-inevitable/" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    Robert Kiyosaki&apos;s Urgent Warning: Why the Financial Collapse of the U.S. is Inevitable
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ccpi.vn/technical-analysis-of-spx500-leveraging-market-and-technology-for-smarter-trading/" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    Technical Analysis of SPX500: Leveraging Market and Technology for Smarter Trading
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ccpi.vn/women-and-the-journey-to-financial-freedom-taking-control-of-life-through-trading/" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    Women and the Journey to Financial Freedom: Taking Control of Life Through Trading
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ccpi.vn/vn-may-be-upgraded-to-emerging-market-in-2022-vndirect-securities/" 
                    className="transition-colors duration-300"
                    style={{ color: '#1089af' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0e7a96'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1089af'}
                  >
                    VN may be upgraded to emerging market in 2022: VNDirect Securities
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name*"
                    className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border-0 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message*"
                    rows={6}
                    className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border-0 rounded-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-white px-6 py-3 rounded-none font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ backgroundColor: '#254099' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#1e336b'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#254099'}
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700" style={{ backgroundColor: '#254099' }}>
          <div className="container mx-auto px-6 py-4">
            <div className="text-left">
              Copyright 2023, All Right Reserved, CCPI
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="h-[45px] w-[45px] fixed bottom-6 right-6 text-white rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50 flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: '#dbdbdb' }}
        aria-label="Back to top"
      >
        <CaretUp size={24} weight="bold" className="text-black" />
      </button>
    </>
  );
}