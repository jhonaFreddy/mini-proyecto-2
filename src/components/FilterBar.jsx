import React, { useState } from 'react';

const FilterBar = ({ locations, onClose, onSearch }) => {
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [showGuestModal, setShowGuestModal] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setShowLocationModal(false);
    };

    const toggleGuestModal = () => {
        setShowGuestModal((prev) => {
            if (prev) {
                return false;
            } else {
                setShowLocationModal(false);
                return true;
            }
        });
    };

    const toggleLocationModal = () => {
        setShowLocationModal((prev) => {
            if (prev) {
                return false;
            } else {
                setShowGuestModal(false);
                return true;
            }
        });
    };

    const handleSearchClick = () => {
        // Llamar a la función de búsqueda pasada como prop
        onSearch(selectedLocation, adultCount, childrenCount);
    };

    return (
        <>
            <div className="fixed inset-0 bg-gray-50 z-50 flex flex-col justify-between p-6 h-4/5 rounded-2xl shadow-lg md:hidden">
                <div className="relative">
                    <button className="absolute top-0 right-0 text-gray-500 text-3xl font-bold "
                        onClick={onClose}>
                        &times;
                    </button>

                    <p className="text-lg font-bold mb-4 ">Edit your search</p>

                    <div className="flex border-gray-300 rounded-3xl flex-col">
                        <div>
                            <input
                                className="px-4 py-2 bg-white border focus:outline-none border-gray-300 rounded-t-lg w-full"
                                placeholder="Add location"
                                value={selectedLocation}
                                onClick={toggleLocationModal}
                                readOnly />
                        </div>
                        <div>
                            <input
                                className="px-4 py-2 bg-white border border-gray-300 focus:outline-none rounded-b-lg w-full"
                                placeholder="Add guests"
                                value={`${adultCount} Adults, ${childrenCount} Children`}
                                onClick={toggleGuestModal}
                                readOnly />
                        </div>
                    </div>

                    {showLocationModal && (
                        <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-lg mt-2 p-4 z-10">
                            {locations.map((location, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-2 border-b border-gray-200 cursor-pointer"
                                    onClick={() => handleLocationSelect(location)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p>{location}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {showGuestModal && (
                        <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-lg mt-2 p-4 z-10 ">
                            <div className="flex flex-col justify-center items-start mb-4">
                                <p className='text-sm font-bold'>Adults</p>
                                <p className='text-sm text-gray-400'>Age 13 or above</p>
                                <div className='flex items-center space-x-4'>
                                    <button onClick={() => setAdultCount(Math.max(0, adultCount - 1))} className="px-4 py-2 text-black border rounded-lg">-</button>
                                    <span>{adultCount}</span>
                                    <button onClick={() => setAdultCount(adultCount + 1)} className="px-4 py-2 text-black border rounded-lg">+</button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <p className='text-sm font-bold'>Children</p>
                                <p className='text-sm text-gray-400'>Age 2-12</p>
                                <div className='flex items-center space-x-4'>
                                    <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} className="px-4 py-2 text-black border rounded-lg">-</button>
                                    <span>{childrenCount}</span>
                                    <button onClick={() => setChildrenCount(childrenCount + 1)} className="px-4 py-2 text-black border rounded-lg">+</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full">
                    <button
                        className="px-4 py-3 bg-red-500 text-white w-24 justify-center flex items-center rounded-lg hover:bg-red-400 "
                        onClick={handleSearchClick}>
                        Search
                    </button>
                </div>
            </div>


            <div className='hidden md:block'>
                <div className="fixed inset-0 bg-gray-50 z-50  p-6 h-4/5 rounded-2xl shadow-lg ">
                    <p className="text-lg font-bold mb-4 ">Edit your search</p>
                    <button
                        className="absolute top-0 right-0 text-gray-500 text-3xl font-bold px-20 py-5" onClick={onClose}>
                        &times;
                    </button>
                    <div className="flex w-100 relative">
                        <div className='w-2/5 rounded-r-3xl '>
                            <input
                                className="px-4 py-2 bg-white border focus:outline-none border-gray-300  w-full"
                                placeholder="Add location"
                                value={selectedLocation}
                                onClick={toggleLocationModal}
                                readOnly />
                        </div>
                        <div className='w-2/5 relative'>
                            <input
                                className="px-4 py-2 bg-white border border-gray-300 focus:outline-none text-gray-500 w-full"
                                placeholder="Add guests"
                                value={`${adultCount} Adults, ${childrenCount} Children`}
                                onClick={toggleGuestModal}
                                readOnly />
                        </div>

                        <div className="">
                            <button
                                className="px-4 py-2 bg-red-500 text-white w-24 justify-center border border-red-500 flex items-center  hover:bg-red-400 "
                                onClick={handleSearchClick} >
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg></span>
                                Search
                            </button>
                        </div>

                        {showLocationModal && (
                            <div className="absolute top-full left-0 right-0 w-2/5  bg-white shadow-md rounded-lg mt-2 p-4 z-10">
                                {locations.map((location, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-2 border-b border-gray-200 cursor-pointer"
                                        onClick={() => handleLocationSelect(location)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <p>{location}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {showGuestModal && (

                            <div className="absolute top-full left-0 right-0 bg-white  shadow-md rounded-lg mt-2 p-4 z-10 w-2/5 ">
                                <div className="flex flex-col justify-center items-start mb-4">
                                    <p className='text-sm font-bold'>Adults</p>
                                    <p className='text-sm text-gray-400'>Age 13 or above</p>
                                    <div className='flex items-center space-x-4'>
                                        <button onClick={() => setAdultCount(Math.max(0, adultCount - 1))} className="px-4 py-2 text-black border rounded-lg">-</button>
                                        <span className=''>{adultCount}</span>
                                        <button onClick={() => setAdultCount(adultCount + 1)} className="px-4 py-2 text-black border rounded-lg">+</button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <p className='text-sm font-bold'>Children</p>
                                    <p className='text-sm text-gray-400'>Age 2-12</p>
                                    <div className='flex items-center space-x-4'>
                                        <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} className="px-4 py-2 text-black border rounded-lg">-</button>
                                        <span>{childrenCount}</span>
                                        <button onClick={() => setChildrenCount(childrenCount + 1)} className="px-4 py-2 text-black border rounded-lg">+</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                </div>
            </div>

        </>

    );
};

export default FilterBar;
