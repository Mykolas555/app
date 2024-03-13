import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import burgerMenu from '../assets/burgerMenu.svg';
import SelectorTheme from './SelectorTheme';
import {logout} from '../services/authService'

const HeaderAuth = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openToggler = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeToggler = () => {
    setDropdownOpen(false);
  };

  const handleLogout = () =>{
    logout()
  }

  return (
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
            <Link onClick={closeToggler} to="/shopper" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
              Shopper
            </Link>
            <Link onClick={closeToggler} to="/forecast" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
              Forecast
            </Link>
            <Link onClick={handleLogout} to="/login" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
              Logout
            </Link>
            <SelectorTheme />
          </div>
        )}
      </div>
      <div className="hidden lg:flex justify-center items-center">
      <Link to="/gallery" className="text-lg p-2 hover:underline">
          Gallery
        </Link>
        <Link to="/shopper" className="text-lg p-2 hover:underline">
          Shopper
        </Link>
        <Link to="/forecast" className="text-lg p-2 hover:underline">
          Forecast
        </Link>
        <Link onClick={handleLogout} to="/login" className="text-lg p-2 hover:underline">
          Logout
        </Link>
        <SelectorTheme />
      </div>
    </>
  );
};

export default HeaderAuth;
