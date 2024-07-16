// app/layout.js
"use client"; // Add this directive at the top to mark it as a Client Component

import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import "./globals.css"

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>Kawatch</title>
        <link rel="icon" href="/favicon.ico" sizes='any'/>  {/* fav icon */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Playwrite+ES+Deco:wght@100..400&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          navigate={(to) => router.push(to)}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
};

export default Layout;
