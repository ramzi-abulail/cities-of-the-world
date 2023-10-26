import React from 'react';

function CitiesList({ cities }) {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}, {city.country}</li>
      ))}
    </ul>
  );
}

export default CitiesList;