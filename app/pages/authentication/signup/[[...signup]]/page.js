import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <>
    <Header/>
    <div className='backgroundGradient flex flex-row justify-center items-center min-h-screen '><SignUp/></div>
    <Footer/>
    </>
  )
}

export default page