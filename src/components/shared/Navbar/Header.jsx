import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../../assets/loadimage.png";
import { Link } from "react-router-dom";
import ipec from '../../../assets/ipec.png'


const Header = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const headerRef = useRef();

  // 
  const mobileMenuHandler = () => {
    const layout = document.getElementById('mainLayout');
    if (mobileMenu) {
      setMobileMenu(false);
      layout.classList.remove('max-lg:translate-x-1/2', 'max-lg:translate-y-20', 'max-lg:rounded-tl-2xl');
    } else {
      setMobileMenu(true);
      layout.classList.add('max-lg:translate-x-1/2', 'max-lg:translate-y-20', 'max-lg:rounded-tl-2xl');
    }
  }

  useEffect(() => {

    const menu = document.getElementById('menu'),
      menuItems = menu.querySelectorAll('li a');
    const layout = document.getElementById('mainLayout');
    menuItems.forEach(element => {
      element.onclick = () => {
        setMobileMenu(false);
        layout.classList.remove('max-lg:translate-x-1/2', 'max-lg:translate-y-20', 'max-lg:rounded-tl-2xl');
      }
    });

    const scrollFunc = () => {

      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    document.addEventListener('scroll', scrollFunc);

    return () => document.removeEventListener('scroll', scrollFunc);

  }, []);

  return (
    <>
      <button className={`text-[#D57E0A] z-[10000] fixed w-12 h-12 bg-[#D57E0A] bg-opacity-50 grid place-items-center rounded-full top-4 left-4 duration-300 lg:hidden ${mobileMenu && 'scale-75'}`} onClick={mobileMenuHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <header ref={headerRef} className={`${sticky && 'lg:bg-[#222831] lg:bg-opacity-20 lg:backdrop-blur-lg'} ${mobileMenu ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'} z-[1000] fixed top-0 left-0 max-lg:w-[45%] lg:w-full max-lg:h-screen duration-300 `}>
        <div className="lg:container max-lg:h-full lg:mx-0 mx-auto lg:px-5 mb-2">
          <div className="flex max-lg:h-full max-lg:flex-col max-lg:justify-evenly items-center max-lg:gap-y-3 justify-between py-2 place-items-center max-lg:mt-4 mx-auto ">
            <img src={ipec} alt='ipec-logo' className='w-56 mr-44 lg:flex hidden' />
            <div className={`max-lg:order-2 lg:w-4/12 max-lg:py-6`}>
              <ul id="menu" className="flex max-lg:flex-col max-lg:gap-5 max-lg:items-center z-50 flex-row gap-x-2">
                <li><Link className="text-lg hover:underline py-2 px-5 inline-block font-medium text-[#D57E0A]" to='/'>Home</Link></li>
                <li><Link className="text-lg hover:underline py-2 px-5 inline-block font-medium text-[#D57E0A]" to='/about'>About</Link></li>
                <li><Link className="text-lg hover:underline py-2 px-5 inline-block font-medium text-[#D57E0A]" to='/events'>Events</Link></li>
                <li><Link className="text-lg hover:underline py-2 px-5 inline-block font-medium text-[#D57E0A]" to='/teams'>Teams</Link></li>
              </ul>
            </div>
            <div className='max-lg:order-1 w-full lg:w-4/12 text-center'>
              <img src={logo} alt='logo' className={`${sticky ? 'lg:w-16' : 'lg:w-24'} sm:flex lg:hidden xl:flex max-lg:w-11/12 duration-300 mx-auto h-auto`} />
            </div>
            <div className="max-lg:order-3 lg:w-4/12 text-end">
            {/* <a href="https://udbhavipec.eventbrite.com" target="_blank" className="relative flex items-center justify-center px-4 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white w-full bg-gray-800 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#D57E0A] rounded-full group-hover:w-full group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span className="relative">Book Your Tickets</span>
</a> */}
          <a href='https://udbhavipec.eventbrite.com' target='_blank' rel='noreferrer'>
          <button className="text-base max-sm:text-sm lg:py-4 lg:px-10 py-2 px-4 font-medium text-white hover:bg-[#D57E0A] border rounded-xl border-white hover:border-none">Book Your Tickets</button>
          </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
