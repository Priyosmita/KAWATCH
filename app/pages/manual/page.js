'use client'
import React, { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import "./manual.css"

const Manual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <>
      <div className='backgroundGradient min-h-screen overflow-hidden'>
        <Header />
        <div className='flex justify-center text-white text-7xl mt-32'>User Manual</div>
        <div className='flex justify-center'>
          <div className='flex flex-col ml-8 mt-12 outline outline-slate-600 rounded-lg customWidth mr-8'>
            <div className='flex flex-row text-white gap-x-20 mt-10'>
              <div className='flex-shrink-0'>
                <img
                  src='/assets/excel.jpeg'
                  className='ml-10 cursor-pointer imgSize'
                  onClick={() => openModal('/assets/excel.jpeg')}
                  alt='Column guide'
                />
              </div>
              <div className='mr-20 flex flex-col justify-center'>
                <h2 className='text-3xl'>CSV preparation for Bulk-Prediction</h2>
                <h2 className='font-bold'>
                  For precise and accurate predictions of money laundering activities, it is essential that your CSV file includes the following columns with the exact specified column names, in addition to any other required columns:
                </h2>
                <ul className='list-disc list-inside text-white'>
                  <li>Amount</li>
                  <li>Payment_currency</li>
                  <li>Received_currency</li>
                  <li>Sender_bank_location</li>
                  <li>Receiver_bank_location</li>
                  <li>Payment_type</li>
                </ul>
              </div>
            </div>
            <div className='flex flex-row text-white gap-x-20 mt-10'>
              <div className='flex-shrink-0'>
                <img
                  src='https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
                  className='ml-16 cursor-pointer'
                  onClick={() => openModal('https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg')}
                  alt='Step 1'
                />
              </div>
              <div className='mr-16 font-bold'>
                skhdfhskdkvwjbvwjkebvakvbnk.anvvad.nv.adnv.van.alnvldnvl/addnmvl/amv/mvladnv.snv,sn,dsnd,bdd,vbb,v a,v av a.v a
              </div>
            </div>
            <div className='flex flex-row text-white gap-x-20 mt-10'>
              <div className='flex-shrink-0'>
                <img
                  src='https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'
                  className='ml-16 cursor-pointer'
                  onClick={() => openModal('https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg')}
                  alt='Step 2'
                />
              </div>
              <div className='mr-16 font-bold'>
                skhdfhskdkvwjbvwjkebvakvbnk.anvvad.nv.adnv.van.alnvldnvl/addnmvl/amv/mvladnv.snv,sn,dsnd,bdd,vbb,v a,v av a.v a
              </div>
            </div>
          </div>
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
  )
}

export default Manual;
