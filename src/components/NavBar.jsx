import React from 'react';

const Navbar = ({ onInputClick, onGuestClick }) => {
  return (
    <nav className="bg-white shadow-md py-6 ">
      <div className="container mx-auto md:flex md:justify-between items-center ">
        <img src="https://windbnb-page.netlify.app/static/media/logo.beef9462.svg" alt="Logo" className='size-40 h-10 cursor-pointer' />
        <div className="flex rounded-l-3xl   justify-center mt-6  " onClick={onInputClick}>
          <div className="border border-gray-100  px-4 py-2 shadow-md cursor-pointer rounded-l-3xl bold-">
            Add Location
          </div>
          <div className=" border border-gray-100  px-4 py-2 shadow-md cursor-pointer">
            Add Guest
          </div>
          <div className="flex items-center px-4 py-2 border border-gray-100 shadow-lg rounded-r-3xl cursor-pointer" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-600 size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;