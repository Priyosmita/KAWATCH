// app/page.js
"use client"; // Add this directive at the top to mark it as a Client Component

import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Dashboard from './pages/Dashboard';
import Dummy from './components/Dummy';
import { grid } from 'ldrs'

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsSignedIn(!!userId);
    }
  }, [isLoaded, userId]);
  grid.register()
  if (!isLoaded) {
    return <div className='min-h-screen flex justify-center items-center'><l-grid size="200" speed="1.5" color="white" /></div>
     // Optional: Add a loading state
    
  }

  return (
    <>
      {/* <Header /> */}
      {isSignedIn ? <Dashboard /> : <LandingPage />}
    </>
  );
}