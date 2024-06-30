import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import file from '../assets/file.png';

export default function Header() {
  const [openmenu, setOpenmenu] = useState(false);
  const location = useLocation();
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const visible = prevScroll > currentScroll;

      setVisible(visible);
      setPrevScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll, visible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const headerStyle = {
    transition: 'top 0.3s',
    top: visible ? '0' : '-100px'
  };

  return (
    <>
      <header ref={menuRef} className="fixed top-0 left-0 right-0 bg-white h-[86px] shadow-md z-50" style={headerStyle}>
        <div className="flex justify-between items-center h-full px-8">
          <div className="flex items-center">
            <Link to="/">
              <button>
                <img src={file} alt="Logo" className="w-[181px]" />
              </button>
            </Link>
          </div>
          <div className="lg:hidden sm:block">
            <button onClick={() => setOpenmenu(!openmenu)} className="text-3xl cursor-pointer">
              <GiHamburgerMenu />
            </button>
          </div>
          <nav className="hidden lg:flex text-lg items-center space-x-6">
            <Link to="/">
              <button className={"text-[#6D6E71] text-base hover:text-black px-4 py-2 rounded-md"}>
                Find Suppliers
              </button>
            </Link>
            <Link to="/">
              <button className={"text-[#6D6E71] text-base hover:text-black px-4 py-2 rounded-md"}>
                Find Service Tags
              </button>
            </Link>
            <Link to="#">
              <button className={"text-[#00732F] border-[#00732F] border-2 font-bold text-base hover:text-black px-4 py-2 rounded-md"}>
                Login / Sign Up
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {openmenu && (
        <ul className="fixed top-[86px] left-0 bg-white w-full h-[calc(100vh-86px)] z-40 p-4 shadow-md overflow-y-auto lg:hidden">
          <li className="my-4 p-4 border-b border-gray-300">
            <Link to="/" onClick={() => setOpenmenu(false)}>Find Suppliers</Link>
          </li>
          <li className="my-4 p-4 border-b border-gray-300">
            <Link to="/aboutus" onClick={() => setOpenmenu(false)}>Find Service Tags</Link>
          </li>
          <li className="my-4 p-4 border-b border-gray-300">
            <Link to="#" onClick={() => setOpenmenu(false)}>Login / Sign Up</Link>
          </li>
        </ul>
      )}
    </>
  );
}
