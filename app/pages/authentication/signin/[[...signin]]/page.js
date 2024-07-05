import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { SignIn } from '@clerk/nextjs'
import React from 'react'
import '../../../../globals.css'

const page = () => {
  return (
    <>
    <Header></Header>
    <div className='className="bg-gradient-to-r from-gray-400 to-indigo-600 bg-gradient-to-bl from-slate-900 via-blue-900 to-slate-900 flex flex-row justify-center items-center min-h-screen '><SignIn/></div>
    <Footer></Footer>
    </>
    
  )
}

export default page