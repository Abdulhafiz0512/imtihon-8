"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "flowbite-react";


interface Country {
  cca2: string;
  name: string;
  population: number;
  flagURL: string;
}


interface RootState {
  selectedCountries: {
    selectedCountries: Country[];
  };
}


function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
}

export function CountriesCarousel() {
 
  const { selectedCountries } = useSelector(
    (state: RootState) => state.selectedCountries
  );

  
  const chunkedCountries = chunkArray<Country>(selectedCountries, 4);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {chunkedCountries.map((countryGroup, index) => (
          <div key={index} className="flex justify-around items-center h-full">
            {countryGroup.map((country) => (
              <div key={country.cca2} className="text-center">
                <img
                  src={country.flagURL}
                  alt={`${country.name} flag`}
                  className="w-44 h-32 mx-auto mb-2"
                />
                <p className="text-lg font-semibold">{country.name}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
