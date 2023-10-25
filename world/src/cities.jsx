import React from 'react';

function Cities({ cityData }) {
  return (
    <ul>
      {cityData.map((city) => (
        <li key={city.name}>{city.name}, {city.country}</li>
      ))}
    </ul>
  );
}

export default Cities;