'use client'
import React, { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'


const Manual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  // Modal open when we want to click on the picture to open it with a cross button 

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };


  // object for map function
  const manualSteps = [
    {
      imageSrc: "https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg",
      text: "skhdfhskdkvwjbvwjkebvakvbnk.anvvad.nv.adnv.van.alnvldnvl/addnmvl/amv/mvladnv.snv,sn,dsnd,bdd,vbb,v a,v av a.v a"
    },
    {
      imageSrc: "https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg",
      text: "skhdfhskdkvwjbvwjkebvakvbnk.anvvad.nv.adnv.van.alnvldnvl/addnmvl/amv/mvladnv.snv,sn,dsnd,bdd,vbb,v a,v av a.v a"
    },
    {
      imageSrc: "https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg",
      text: "skhdfhskdkvwjbvwjkebvakvbnk.anvvad.nv.adnv.van.alnvldnvl/addnmvl/amv/mvladnv.snv,sn,dsnd,bdd,vbb,v a,v av a.v a"
    }
  ];


  return (
    <>
      <div className='backgroundGradient min-h-screen overflow-hidden'>
        <Header />
        <div className='flex justify-center text-white text-7xl mt-32 cursor-default'>User Manual</div>
        <div className='flex flex-col ml-8 mt-8 mb-20'>
          {/* Dynamic repeater is used  */}
          {manualSteps.map((step, index) => (
            <div key={index} className='flex flex-row text-white gap-x-20 mt-10'>
              <div className=''>
                <img
                  src={step.imageSrc}
                  className='ml-16 cursor-pointer'
                  onClick={() => openModal(step.imageSrc)}
                  alt={`manual-step-${index + 1}`}
                />
              </div>
              <div className='mr-20 cursor-default'>
                {step.text}
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
            <div className='relative'>
              <button
                className='absolute top-4 right-4 text-white text-2xl'
                onClick={closeModal}
              >
                &times;
              </button>
              <img src={currentImage} className='max-w-full max-h-full' alt='Modal content' />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}


export default Manual;