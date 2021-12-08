import React, { useEffect, useState } from 'react';
import './TripsList.css';
function TripsList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState('http://localhost:3000/trips');
  const [tripsFilter, setTripsFilter] = useState('All');
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, [trips, url]);
  const handleEuropeanFilter = () => {
    setUrl('http://localhost:3000/trips?loc=europe');
    setTripsFilter('European');
  };
  const handleNoFilter = () => {
    setUrl('http://localhost:3000/trips');
    setTripsFilter('All');
  };
  return (
    <div className='trip-list'>
      <h2>List of {tripsFilter} Trips</h2>
      <ul>
        {trips.length > 0 &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <h4>{trip.price}</h4>
              <h6>{trip.loc}</h6>
            </li>
          ))}
      </ul>
      <div className='filters'>
        <button onClick={handleEuropeanFilter}>European Trips</button>
        <button onClick={handleNoFilter}>All Trips</button>
      </div>
    </div>
  );
}

export default TripsList;
