'use client'
import Image from 'next/image';
import '../globals.css';

const Footer = () => {
  const scrollToTop = () => {
    console.log('Logo clicked, scrolling to top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This will animate the scroll
    });
  };

  return (
    <footer className="bg-black flex justify-between items-center footerHeight">
      <div className="flex flex-row items-center space-x-4">
        <Image
          src="/assets/logo_without_bg.png"
          alt="AML Logo"
          width={600}
          height={600}
          className='transition duration-300 hover:scale-110 cursor-pointer'
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }} // Add cursor pointer for better UX
        />
      </div>  { /* Contact column */}
      <div className="flex flex-col mt-16 space-y-4 text-2xl">
        <div className='flex flex-col gap-y-11'>
          <div className='cursor-default text-3xl'>Contact Us</div>
          <div className="flex items-center transform duration-300 hover:scale-110 cursor-pointer">
            <span className="text-[#f5f7f8] hover:text-[#283456]">Phone: +91 8777836723</span>
          </div>
          <div className="flex items-center transform duration-300 hover:scale-110 cursor-pointer">
            <span className="text-[#f5f7f8] hover:text-[#283456]">Email: daspriyosmita2003@gmail.com</span>
          </div>
        </div>
      </div>
      <div>  { /* About column */}
        <div className="flex items-center transform duration-300 hover:scale-110 cursor-pointer mr-56">
          <span className="text-[#f5f7f8] text-3xl hover:text-[#283456]">About</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
