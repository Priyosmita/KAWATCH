'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import '../../globals.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-400 to-indigo-600 bg-gradient-to-bl from-slate-900 via-blue-900 to-slate-900 flex flex-col overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 gap-x-64 mt-64">
          <div className="flex flex-col items-center justify-center ml-16">
            <div className="text-8xl text-center md:text-left">ABOUT</div>
            <div className="text-9xl mt-12 text-center md:text-left">KAWATCH</div>
          </div>
          <div className="flex flex-col items-center md:items-end mt-20 md:mt-0">
            <div className='flex flex-row justify-center'>
              <div className="relative flex items-center justify-center">
                <img src='/assets/priyosabout.png' className='aboutPriyosImg transform duration-300 hover:scale-110' />
                <div className="hover-text absolute top-[-7%] ml-5 left-1/2 transform -translate-x-1/2 text-white text-center text-2xl"><p>Priyosmita Das</p><p>B.Tech, CSE</p></div>
              </div>
              <div className="relative flex items-center justify-center">
                <img src='/assets/rijuabout.png' className='aboutRijurajImg transform duration-300 hover:scale-110' />
                <div className="hover-text absolute top-[-22%] mr-60 transform -translate-x-1/2 text-white text-center p-2 text-2xl rijumarginLeft"><p>Rijuraj Datta</p><p>B.Tech, CSE</p></div>
              </div>
            </div>
            <img className='relative -mt-40 scale-150 mr-52' src='/assets/about banner.png' />
          </div>
        </div>
        
        {/* Bullet points section */}
        <div className="flex flex-col items-center justify-center mt-20 text-white text-center md:text-left px-10">
          <h2 className="text-4xl mb-6">What We Offer</h2>
          <ul className="text-xl">
            <li>Real-Time Transaction Monitoring: Keep track of your transactions in real-time with our intuitive dashboard. Get instant alerts for any unusual activities.</li>
            <li>Advanced AML Algorithms: Our sophisticated algorithms analyze transaction patterns to identify potential money laundering activities.</li>
            <li>User-Friendly Interface: Navigate through your financial data with ease using our clean and intuitive interface.</li>
            <li>Customizable Reports: Generate detailed reports tailored to your specific needs, helping you stay compliant with regulatory requirements.</li>
          </ul>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default About;