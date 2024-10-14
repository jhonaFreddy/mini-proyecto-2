import React from 'react';

const Card = ({ title, location, photo, rating, superHost, type, beds }) => {
  return (
    <div className=" border-gray-200 rounded-lg overflow-hidden ">
      <img src={photo} alt={title} className="w-full h-48 object-cover imagen" />
      <div className="p-4">
        <div className="flex justify-between items-center">
        <div className="flex items-center mt-2">
          {superHost && (
            <span className="border border-black text-black font-semibold text-xs px-2 py-1 rounded-md mr-2">
              Super Host
            </span>
          )}
          <p className="text-gray-600 text-sm">
            {type}
            {beds !== null ? `, ${beds} beds` : ', beds'}
          </p>
        </div>
          
          <div className="flex items-center justify-center m-0 p-0">
            <span className="text-red-600 text-3xl">★</span>
            <p className="text-gray-600 ml-2">{rating}</p>
          </div>
        </div>
        <p className="text-gray-600">{location}</p>
        

        <h2 className="text-lg font-bold mt-2">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
