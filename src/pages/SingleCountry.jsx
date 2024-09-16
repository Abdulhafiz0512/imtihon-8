import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCountry = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        const data = await response.json();
        setCountry(data[0]);  
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountry();
  }, [id]);

  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital?.[0]}</p>
    </div>
  );
};

export default SingleCountry;
