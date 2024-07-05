import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <>
    <Header/>
    <div className='className="bg-gradient-to-r from-gray-400 to-indigo-600 bg-gradient-to-bl from-slate-900 via-blue-900 to-slate-900 flex flex-row justify-center items-center min-h-screen '><SignUp/></div>
    <Footer/>
    </>
  )
}

export default page