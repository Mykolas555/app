import React, { useState, useEffect } from 'react';
import HeaderUnAuth from './HeaderUnAuth';
import HeaderAuth from './HeaderAuth';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('UserToken');
    if (userToken) {
      console.log(userToken);
      setLoggedIn(true);
    }
    
  }, []);

  return (
    <header className="bg-yellow-400 rounded-full h-16 lg:h-10 flex justify-between items-center p-4 lg:p-10">
      {loggedIn ? <HeaderAuth /> : <HeaderUnAuth />}
    </header>
  );
};

export default Header;
