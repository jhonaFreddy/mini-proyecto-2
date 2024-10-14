import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import Card from '../components/Card';
import FilterBar from '../components/FilterBar';
import axios from 'axios';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(''); 

  useEffect(() => {
    axios.get('/stays.json')
      .then((response) => {
        setProperties(response.data);
        setFilteredProperties(response.data);
        const uniqueLocations = [...new Set(response.data.map(property => `${property.city}, ${property.country}`))];
        setLocations(uniqueLocations);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (location, adultCount, childrenCount) => {
    const totalGuests = adultCount + childrenCount;
  
    const filtered = properties.filter(property => {
      const matchesLocation = location ? property.city === location.split(',')[0] : true; 
      const availableGuests = property.maxGuests;
  
      return matchesLocation && availableGuests >= totalGuests; 
    });
  
    setFilteredProperties(filtered);
    setCurrentLocation(location ? location : ''); 
    setIsFilterBarOpen(false);
  };
  

  const handleGuestClick = () => {
    console.log('Guest options clicked');
  };

  return (
    <>
      {isFilterBarOpen && (
        <FilterBar 
          locations={locations} 
          onClose={() => setIsFilterBarOpen(false)} 
          onSearch={handleSearch}/>
      )}
      <Navbar 
        onInputClick={() => setIsFilterBarOpen(true)} 
        onGuestClick={handleGuestClick} 
      />
      <div className="flex justify-between items-center p-4">
        <span className="text-3xl font-semibold">{currentLocation ? currentLocation : 'Selecciona una ciudad y país'}</span>
        <span className="text-lg font-semibold">{filteredProperties.length} habitación{filteredProperties.length !== 1 ? 'es' : ''} encontrad{filteredProperties.length !== 1 ? 'as' : 'a'}</span>
      </div>
      <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {filteredProperties.map((property) => (
          <Card key={property.id} {...property} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
