import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { SignIn } from '@clerk/nextjs'
import React from 'react'
import '../../../../globals.css'

const page = () => {
  return (
    <>
    <Header></Header>
    <div className='backgroundGradient flex flex-row justify-center items-center min-h-screen '><SignIn/></div>
    <Footer></Footer>
    </>
    
  )
}

export default page