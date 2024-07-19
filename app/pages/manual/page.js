'use client'
import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const manual = () => {
  return (
    <>
      <div className='backgroundGradient min-h-screen overflow-hidden'>
        <Header />
        <div className='flex justify-center text-white text-7xl mt-32'>User Manual</div>
        <div className='flex flex-col'>
          <div className='flex flex-row text-white gap-x-20 justify-center'>
            <div className=''>
              <img src='https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg'></img>
            </div>
            <div className=''>
                skhdfhskd
            </div>
          </div>
          <div className='flex flex-col bg-red-700'>
            <div className=''>

            </div>
            <div className=''>

            </div>
          </div>
          <div className='flex flex-col bg-red-700'>
            <div className=''>

            </div>
            <div className=''>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default manual