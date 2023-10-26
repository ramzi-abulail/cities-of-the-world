import React from 'react'
import citiesData from './CitiesData'
import { useState } from 'react';
import CitiesList from './CitiesList';


const Country = () => {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');


  const handleCountryChange = (event) => {
    const selected  = event.target.value;
    const selectedCities = citiesData.filter((city) => city.country == selected)
    setCities(selectedCities)
    setSelectedCountry(selected)

  };


  return (
    <div>
    <select
      id="countries"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={selectedCountry}
      onChange={handleCountryChange}
    >
      <option value="">Select</option>
      {citiesData.map((city) => (
        <option key={city.id} value={city.country}>
          {city.country}
        </option>
      ))}
    </select>
    <CitiesList cities={cities} />
  </div>
  )
}

export default Country