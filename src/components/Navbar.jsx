import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='Hashir Qureshi logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Hashir Qureshi &nbsp;|&nbsp; Developer &nbsp;|&nbsp; Tech Consultant
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.id} className='relative group'>
              <a
                href={`#${nav.id}`}
                className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
              <span className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] ${active === nav.title ? 'scale-x-100' : ''}`}></span>
            </li>
          ))}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}Hashir-Qureshi-CV.pdf`}
              target='_blank'
              rel='noopener noreferrer'
              download
              className='btn-gradient px-4 py-2 text-[16px] font-medium'
            >
              Download CV
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='Navigation menu toggle'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 glass absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id} className='w-full'>
                  <a
                    href={`#${nav.id}`}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"} w-full inline-block`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </a>
                  <span className={`block h-[2px] w-full bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] ${active === nav.title ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}></span>
                </li>
              ))}
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}Hashir-Qureshi-CV.pdf`}
                  target='_blank'
                  rel='noopener noreferrer'
                  download
                  className='btn-gradient px-4 py-2 rounded-md text-[14px] font-medium'
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
