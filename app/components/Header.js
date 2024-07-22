'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';

const Header = ({ onDashboardClick }) => {
  const { isLoaded, userId } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const isSignedIn = isLoaded && !!userId;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <header
      className={`bg-black w-full py-2 px-8 flex justify-between items-center z-10 fixed transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/assets/logo2.png"
            alt="AML Logo"
            width={62}
            height={80}
            className="cursor-pointer transform duration-300 hover:scale-110"
          />
        </Link>
        <span className="cursor-default text-xl font-semibold text-[#f5f7f8] transform duration-300 hover:scale-110 hover:text-[#7da0ff]">
          Kawatch
        </span>
      </div>
      <nav className="flex space-x-6 items-center gap-x-9">
        <button
          onClick={onDashboardClick}
          className="text-xl text-[#f5f7f8] transform duration-300 hover:scale-110 hover:text-[#7da0ff]"
        >
          Dashboard
        </button>
        <Link href="/pages/manual" legacyBehavior>
          <a className="text-xl text-[#f5f7f8] transform duration-300 hover:scale-110 hover:text-[#7da0ff]">
            User Manual
          </a>
        </Link>
        <Link href="/pages/about" legacyBehavior>
          <a className="text-xl text-[#f5f7f8] transform duration-300 hover:scale-110 hover:text-[#7da0ff]">
            About
          </a>
        </Link>
        <div className="user-button-wrapper">
          <UserButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
