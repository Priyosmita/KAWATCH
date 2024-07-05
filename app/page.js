// app/page.js
"use client"; // Add this directive at the top to mark it as a Client Component

import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Dashboard from './pages/Dashboard';
export default function Home() {
  const { isLoaded, userId } = useAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsSignedIn(!!userId);
    }
  }, [isLoaded, userId]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Optional: Add a loading state
  }

  return (
    <>
      {/* <Header /> */}
      {isSignedIn ? <Dashboard /> : <LandingPage />}
    </>
  );
}
