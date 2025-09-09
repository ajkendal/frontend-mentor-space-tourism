'use client';
import Navigation from '../components/Navigation';
import { useState } from 'react';

import { data } from '../assets/data';
import '../styles/destination.css';

const Destination = () => {
  const destinations = data.destinations;
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0].name
  );

  const selectedData = destinations.find(
    (dest) => dest.name === selectedDestination
  );

  return (
    <div className='page destination'>
      <Navigation currentPage='destination' />
      <main
        id='main'
        className='grid-container grid-container--destination flow'
      >
        <h1 className='numbered-title'>
          <span aria-hidden='true'>01</span> Pick your destination
        </h1>

        <picture>
          <source
            srcSet={`/static/images${
              selectedData
                ? selectedData.images.webp
                : '/destination/image-moon.webp'
            }`}
            type='image/webp'
          />
          <img
            src={`/static/images${
              selectedData
                ? selectedData.images.png
                : '/destination/image-moon.png'
            }`}
            alt={selectedDestination}
          />
        </picture>

        <div className='tab-list underline-indicators flex'>
          {data.destinations.map((destination) => (
            <button
              key={destination.name}
              aria-selected={selectedDestination === destination.name}
              className='uppercase ff-sans-cond text-accent letter-spacing-2'
              onClick={() => setSelectedDestination(destination.name)}
            >
              {destination.name}
            </button>
          ))}
        </div>

        <article className='destination-info flow'>
          <h2 className='fs-800 ff-serif uppercase'>{selectedDestination}</h2>

          <p>
            {selectedData
              ? selectedData.description
              : 'No description available.'}
          </p>
          <div className='destination-meta flex'>
            <div>
              <h3 className='text-accent fs-200 uppercase'>Avg. distance </h3>
              <p className='ff-serif uppercase'>
                {selectedData ? selectedData.distance : 'Unknown'}
              </p>
            </div>

            <div>
              <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
              <p className='ff-serif uppercase'>
                {selectedData ? selectedData.travel : 'Unknown'}
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Destination;
