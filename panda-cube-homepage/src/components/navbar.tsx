import React from 'react';
import logo from "../assets/VerticalLogo.png"

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-shrink-0">
            <img className='h-20 w-12 mr-2'  src={logo} alt="logo"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
