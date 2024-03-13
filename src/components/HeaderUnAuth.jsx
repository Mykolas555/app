import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import burgerMenu from '../assets/burgerMenu.svg';
import SelectorTheme from './SelectorTheme';

const HeaderUnAuth = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const openToggler = () => { setDropdownOpen(!isDropdownOpen) };
    const closeToggler = () => { setDropdownOpen(false) };

  return (
    <>
        <>
          <Link to="/">
            <img className="h-10 w-10" src={reactLogo} alt="React Logo" />
          </Link>
          <div className="burger-menu lg:hidden relative">
            <button className="header-link focus:outline-none" onClick={openToggler}>
              <img className="h-10 w-10" src={burgerMenu} alt="burger menu" />
            </button>
            {isDropdownOpen && (
              <div className="bg-yellow-400 rounded-full absolute top-14 right-0 bg-white rounded-md shadow-md p-2">
                <Link onClick={closeToggler} to="/forecast" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
                  Forecast
                </Link>
                <Link onClick={closeToggler} to="/login" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
                  Login
                </Link>
                <SelectorTheme />
              </div>
            )}
          </div>
        </>
      <div className="hidden lg:flex justify-center items-center">
        <Link to="/forecast" className="text-lg p-2 hover:underline">
          Forecast
        </Link>
        <Link to="/login" className="text-lg p-2 hover:underline">
          Login
        </Link>
        <SelectorTheme />
      </div>
    </>
  );
};

export default HeaderUnAuth;
