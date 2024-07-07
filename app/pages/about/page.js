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
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-10 gap-x-64">
          <div className="flex flex-col items-center justify-center ml-16">
            <div className="text-8xl text-center md:text-left">ABOUT</div>
            <div className="text-9xl mt-12 text-center md:text-left">KAWATCH</div>
          </div>
          <div className="flex flex-col items-center md:items-end mt-20 md:mt-0">
            <div className='flex flex-row justify-center'>
              <div className="relative flex items-center justify-center">
                <img src='/assets/priyosabout.png' className='aboutPriyosImg transform duration-300 hover:scale-110' />
              </div>
              <div className="relative flex items-center justify-center">
                <img src='/assets/rijuabout.png' className='aboutRijurajImg transform duration-300 hover:scale-110' />
                <div className="hover-text absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-white text-center p-2 bg-black bg-opacity-50 rounded">Rijuraj</div>

              </div>
            </div>
            <div className="hover-text absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-white text-center p-2 bg-black bg-opacity-50 rounded">Priyosmita</div>
            <img className='relative -mt-40 scale-150 mr-52' src='/assets/about banner.png' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
