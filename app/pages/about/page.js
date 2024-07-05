// app/pages/about.js
'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import '../../globals.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-400 to-indigo-600 bg-gradient-to-bl from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 gap-x-40"> {/* Reduced gap-x value */}
          <div className="flex flex-col items-center justify-center mr-40">
            <div className="text-8xl text-center md:text-left">ABOUT</div>
            <div className="text-9xl mt-12 text-center md:text-left">KAWATCH</div>
          </div>
          <div className="flex flex-col items-center md:items-end mt-20 md:mt-0">
            <div className="flex items-center justify-center gap-x-40">
              <img src='/assets/IMG_5473-removebg-preview.png' className='aboutPriyosImg' />
              <img src='/assets/1000020215-removebg-preview.png' className='aboutRijurajImg' />
            </div>
            <img className='relative -mt-24 scale-150' src='/assets/about banner.png'/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
