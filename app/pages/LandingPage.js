// being rendered as component without routing
"use client";
import React, { useState, useEffect } from 'react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { SignIn, SignInButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../globals.css"

const LandingPage = () => {
  // State for logo tilt
  const [tiltStyle, setTiltStyle] = useState({});

  // Handle mouse move for 3D tilt
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;
    const x = (clientX - currentTarget.offsetLeft) / offsetWidth;
    const y = (clientY - currentTarget.offsetTop) / offsetHeight;
    const rotateX = (y - 0.5) * 30; // Adjust the multiplier for more/less tilt
    const rotateY = (x - 0.5) * -30; // Adjust the multiplier for more/less tilt

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    });
  };

  // Feature grid animation
  const [showFeatures, setShowFeatures] = useState(false);
  const handleScrollFeature = () => {
    const scrollY = window.scrollY;
    const triggerHeight = window.innerHeight / 2;
    if (scrollY > triggerHeight) {
      setShowFeatures(true);
    } else {
      setShowFeatures(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScrollFeature);
    return () => {
      window.removeEventListener('scroll', handleScrollFeature);
    };
  }, []);

  // Perks grid animation
  const [showPerks, setShowPerks] = useState(false);
  const handleScrollPerk = () => {
    const scrollY = window.scrollY;
    const triggerHeight = window.innerHeight / 1;
    if (scrollY > triggerHeight) {
      setShowPerks(true);
    } else {
      setShowPerks(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScrollPerk);
    return () => {
      window.removeEventListener('scroll', handleScrollPerk);
    };
  }, []);

  return (
    <div className="backgroundGradient min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Left side texts sign up buttons */}
      <Header />
      <div className="flex flex-row justify-between mt-32 ml-5">
        <div className="mt-36 ml-36 text-9xl cursor-default">
          KAWATCH
          <div className="text-4xl mt-10 cursor-default">
            <p className="mb-5">Your Shield Against Financial Crimes</p>
            <p>Where Innovation meets Integrity</p>
          </div>
          <div className="flex flex-row justify-between mt-20">
            {/* <Link href='/pages/authentication/signup'  legacyBehavior>
              <a className="text-4xl rounded-full bg-black hover:bg-gray-500 p-5 transition duration-300 hover:scale-110">Sign Up</a>
            </Link> */}
            {/* <Link className='text-4xl rounded-full bg-blac  p-5 transition duration-300 hover:scale-110' href="/pages/authentication/signup"> */}
            <button class="ml-6 h-11 scaleButton mt-8 relative inline-flex items-center justify-center p-0.5 mb-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition duration-300 hover:scale-151">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a href='/pages/authentication/signup'>Sign Up</a>
              </span>
            </button>
            <button class="scaleButton mr-8 h-11  mt-8 relative inline-flex items-center justify-center p-0.5 mb-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition duration-300 hover:scale-151">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a href='/pages/authentication/signin'>Sign In</a>
              </span>
            </button>
            
            {/* <Link href='/pages/authentication/signin' legacyBehavior>
              <a className="text-4xl rounded-full bg-black hover:bg-gray-500 p-5 transition duration-300 hover:scale-110">Sign In</a>
            </Link> */}
          </div>
        </div>

        {/* Right side logo */}
        <div
          className="mt-28 mr-36"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
        >
          <img
            src="/assets/logo real.png"
            alt="Logo real"
            width={550}
            height={550}
            className="transition-transform duration-300"
          />
        </div>
      </div>

      {/* Feature grid */}
      <div className={`overflow-hidden flex flex-col mt-20 transition-transform duration-700 ${showFeatures ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="text-8xl mr-32 text-right cursor-default">
          Features
        </div>
        <div className="grid grid-cols-4 gap-5 gap-y-11 mt-9 p-6">
          {features.map((feature, index) => (
            <div key={index} className="relative group text-center">
              <img src={feature.image} alt={feature.title} className="h-56 w-56 mx-auto rounded-full transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:bg-black group-hover:opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-3xl text-white whitespace-normal break-words w-56 px-4 cursor-default">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Perks grid */}
      <div className={`flex flex-col mt-20 transition-transform duration-700 ${showPerks ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="text-8xl ml-32 text-left cursor-default">
          Perks
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-3 gap-y-5 py-9">
            {perks.map((perk, index) => (
              <div key={index} className="ml-11 text-left flex items-center">
                <li className="text-2xl text-white px-4 whitespace-nowrap transition duration-300 hover:scale-105 cursor-default">
                  {perk.title}
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mx-24 mt-20 mb-40'>
        <TestimonialCarousel />
      </div>
      <Footer />
    </div>
  );
};

const features = [
  {
    title: 'Advanced AML Detection',
    image: '/assets/aml.jpg/'
  },
  {
    title: 'Real-Time Analysis',
    image: '/assets/analysis.jpg/'
  },
  {
    title: 'Seamless Integration',
    image: '/assets/integration.jpg/'
  },
  {
    title: 'Automated Monitoring',
    image: '/assets/auto.jpeg/'
  },
  {
    title: 'Blockchain-Based Logging',
    image: '/assets/etheriumb.jpg/'
  },
  {
    title: 'Intuitive Interface',
    image: '/assets/ui2.jpg/'
  },
  {
    title: 'Robust Alert Mechanisms',
    image: '/assets/alert.jpg/'
  },
  {
    title: 'Dual Mode Laundering Detection',
    image: '/assets/dual.png/'
  }
];
const perks = [
  {
    title: 'Immediate Threat Mitigation',
  },
  {
    title: 'Effortless Compliance',
  },
  {
    title: 'Immediate Threat Mitigation',
  },
  {
    title: 'Adaptive Detection Capabilities',
  },
  {
    title: 'Transparent Audit Trails',
  },
  {
    title: 'Behavioral Anomaly Detection',
  },
  {
    title: 'Intuitive User Experience',
  },
  {
    title: 'Seamless Integration Flexibility',
  },
  {
    title: 'Continuous Performance Enhancement',
  },
];

export default LandingPage;