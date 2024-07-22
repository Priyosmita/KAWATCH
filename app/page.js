"use client"; // Add this directive at the top to mark it as a Client Component

import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LandingPage from "./pages/LandingPage";
import { grid } from 'ldrs';

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      setIsSignedIn(!!userId);
    }
  }, [isLoaded, userId]);

  useEffect(() => {
    if (isSignedIn) {
      router.push('/pages/Home2');
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    grid.register();
  }, []);

  if (!isLoaded) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <l-grid size="200" speed="1.5" color="white" />
      </div>
    );
  }

  return (
    <>
      {!isSignedIn && <LandingPage />}
    </>
  );
}
