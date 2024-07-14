'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';
import { SignOutButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';

const Header = () => {
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
      className={`bg-black w-full py-2 px-8 flex justify-between items-center z-10 fixed transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center space-x-4">
        <Link href={isSignedIn ? "/pages/Home2" : "/"}>
          <Image
            src="/assets/logo2.png"
            alt="AML Logo"
            width={62}
            height={80}
            className="cursor-pointer transform duration-300 hover:scale-110"
          />
        </Link>
        <span className="cursor-default text-xl font-semibold text-[#f5f7f8] transform duration-300 hover:scale-110 hover:text-[#283456]">
          Kawatch
        </span>
      </div>
      <nav className="flex space-x-6 items-center gap-x-9">
        <Link href="/pages/about" legacyBehavior>
          <a className="text-xl text-[#f5f7f8] transform duration-300 hover:scale-110 hover:text-[#283456]">
            About
          </a>
        </Link>
        <SignOutButton className="text-xl text-[#f5f7f8] transform duration-300 hover:scale-110 hover:text-[#283456]" />
        <Link href="/profile" legacyBehavior>
          <a>
            <Image
              src="/assets/user-profile.jpeg"
              alt="User Profile"
              width={50}
              height={50}
              className="transform duration-300 hover:scale-110 rounded-full hover:border-[#283456] hover:border-2"
            />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
