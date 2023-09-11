// src/RouteRecommendation.js
import React, { useState } from 'react';
import './flight.css'; // Import your CSS file for styling

function RouteRecommendation() {
  const [departureAirport, setDepartureAirport] = useState('');
  const [destinationAirport, setDestinationAirport] = useState('');
  const [recommendedRoutes, setRecommendedRoutes] = useState([]);

  const handleRecommendRoutes = () => {
    // Implement logic to fetch recommended routes based on departureAirport and destinationAirport.
    // You can use an API like AviationStack to get flight route data.

    // Example API call (replace with your API endpoint):
    fetch(`https://api.example.com/routes?departure=${departureAirport}&destination=${destinationAirport}`)
      .then((response) => response.json())
      .then((data) => setRecommendedRoutes(data.routes))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2></h2>
      <div className="input-container">
        <div className="input-box">
          <label htmlFor="departureAirport"></label>
          <input
            className='from'
            type="text"
            id="departureAirport"
            placeholder='Flying from'
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
          />
        </div>
        <div className="input-box">
          <p>to</p>
          <label htmlFor="destinationAirport"></label>
          <input
            className='to'
            type="text"
            id="destinationAirport"
            placeholder='Destination'
            value={destinationAirport}
            onChange={(e) => setDestinationAirport(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleRecommendRoutes}>Search Flights</button>
      <div>
        <h3>Recommended Routes:</h3>
        <ul>
          {recommendedRoutes.map((route, index) => (
            <li key={index}>{route}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RouteRecommendation;
