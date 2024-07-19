"use client";
import React, { useState, useEffect } from 'react';
import TestimonialCarousel from '@/app/components/TestimonialCarousel';
import { SignIn, SignInButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Dashboard from '@/app/pages/Dashboard'; // Ensure the path to Dashboard is correct

const LandingPage = () => {
  // State for logo tilt
  const [tiltStyle, setTiltStyle] = useState({});
  const [showDashboard, setShowDashboard] = useState(false);

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

  const handleDashboardClick = () => {
    setShowDashboard(true);
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
    };
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScrollPerk);
    return () => {
      window.removeEventListener('scroll', handleScrollPerk);
    };
  }, []);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="backgroundGradient min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Left side texts sign up buttons */}
      <Header />
      <div className="flex flex-row justify-between mt-20">
        <div className="mt-36 ml-36 text-10xl cursor-default michroma-regular">
          KAWATCH
          <div className="text-4xl mt-10 cursor-default">
            <p className="mb-5">Your Shield Against Financial Crimes</p>
            <p>Where Innovation meets Integrity</p>
          </div>
          <div className="flex flex-row justify-between mt-20">
            <button
              onClick={handleDashboardClick}
              className="text-4xl rounded-full bg-black hover:bg-gray-500 px-20 pt-5 pb-5 transition duration-300 hover:scale-110"
            >
              Dashboard
            </button>
          </div>
        </div>
        {/* Right side logo */}
        <div
          className="mt-36 mr-36"
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
              <img src={feature.image} alt={feature.title} className="h-56 w-56 mx-auto rounded-full transform transition duration-300 ease-in-out group-hover:scale-110" />
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
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
  },
  {
    title: 'Real-Time Analysis',
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
  },
  {
    title: 'Seamless Integration',
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
  },
  {
    title: 'Automated Monitoring',
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
  },
  {
    title: 'Blockchain-Based Logging',
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
  },
  {
    title: 'Intuitive Interface',
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
  },
  {
    title: 'Robust Alert Mechanisms',
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
  },
  {
    title: 'Regulatory Compliance',
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
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
