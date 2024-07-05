// being rendered as component without routing
import React from 'react'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import AnalyticsBar from '../components/AnalyticsBar'
import TransactionBar from '../components/TransactionBar'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <div className='bg-gradient-to-r from-gray-400 to-indigo-600 bg-gradient-to-bl from-slate-900 via-blue-900 to-slate-900 min-h-screen flex flex-row justify-between'>
        <LeftSideBar/>
        <TransactionBar/>
        <AnalyticsBar/>
    </div>
    </>
  )
}

export default Dashboard