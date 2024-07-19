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
          <div className="flex flex-col items-center justify-center ml-10">
            <div className="text-8xl text-center md:text-left">ABOUT</div>
            <div className="text-9xl mt-11 text-center md:text-left">KAWATCH</div>
          </div>
          <div className="flex flex-col items-center md:items-end mt-20 md:mt-0">
            <div className='flex flex-row justify-center'>
              <div className="relative flex items-center justify-center">
                <img src='/assets/priyosabout.png' className='aboutPriyosImg transform duration-300 hover:scale-110' />
                <div className="hover-text absolute MarginImg top-[-12%]  left-1/2 transform -translate-x-1/2 text-white text-center text-2xl"><p>Priyosmita Das</p>B.Tech, CSE</div>
              </div>
              <div className="relative flex items-center justify-center">
                <img src='/assets/rijuabout.png' className='aboutRijurajImg transform duration-300 hover:scale-110' />
                <div className="hover-text absolute top-[-32%] MarginImg transform -translate-x-1/2 text-white text-center p-2 text-2xl rijumarginLeft"><p>Rijuraj Datta</p>B.Tech, CSE</div>
              </div>
            </div>
            <img className='relative -mt-40 scale-150 mr-52' src='/assets/about banner.png' />
          </div>
        </div>

        {/* Bullet points section */}
        <div className="flex flex-col items-center justify-center mt-20 text-white text-center md:text-left px-10 mb-5">
          <p className="text-4xl mb-6">What We Offer</p>
          <ul className="text-xl list-disc list-inside">
            <li >Real-Time Transaction Monitoring: Engage in 24/7 surveillance of transactions to spot suspicious activities instantly. Benefit: Swift detection and rapid response to potential money laundering, slashing the risk of financial crimes going unnoticed.</li>
            <li>Automated Alert Generation: Automatically flag transactions that meet suspicious criteria using cutting-edge machine learning. Benefit: Reduces the manual burden on compliance teams, ensuring quick investigations and boosting efficiency.</li>
            <li>Data Integration and Enrichment: Effortlessly integrate with a variety of data sources, from internal databases to external watchlists and sanction lists. Benefit: Offers a comprehensive view of transaction data, significantly improving detection accuracy and reliability.</li>
            <li>Machine Learning-Powered Anomaly Detection: Leverage advanced machine learning to spot unusual patterns and anomalies in transactions. Benefit: Adapts to evolving laundering tactics, uncovering sophisticated schemes that traditional systems might miss.</li>
            <li>Blockchain-Based Transparency: Log suspicious transactions on the Ethereum blockchain using smart contracts. Benefit: Provides an immutable, transparent record of suspicious activities, ensuring data integrity and traceability for audits.</li>
            <li>Behavioral Analytics: Analyze customer behavior and transaction patterns to identify abnormal activities. Benefit: Enhances money laundering detection by considering individual and group behaviors, reducing false positives.</li>
            <li>User-Friendly Interface: Navigate easily with an intuitive frontend built with React and Bootstrap/Material-UI. Benefit: Simplifies alert reviews, suspicious activity investigations, and report generation for compliance officers.</li>
            <li>Seamless Integration with Existing Systems: Utilize RESTful APIs for smooth integration with current banking and financial systems. Benefit: Facilitates easy adoption and implementation without major infrastructure overhauls.</li>
            <li>Continuous Learning and Improvement: Incorporate insights from compliance investigations back into the system through a feedback loop mechanism. Benefit: Continuously enhances the accuracy and effectiveness of detection algorithms over time.</li>
          </ul>
        </div>


      </div>
      <Footer />
    </>
  );
};

export default About;