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
            srcSet='/static/images/destination/image-moon.webp'
            type='image/webp'
          />
          <img src='/static/images/destination/image-moon.png' alt='The Moon' />
        </picture>

        <div className='tab-list underline-indicators flex'>
          <button
            aria-selected='true'
            className='uppercase ff-sans-cond text-accent letter-spacing-2'
          >
            Moon
          </button>
          <button
            aria-selected='false'
            className='uppercase ff-sans-cond text-accent letter-spacing-2'
          >
            Mars
          </button>
          <button
            aria-selected='false'
            className='uppercase ff-sans-cond text-accent letter-spacing-2'
          >
            Europa
          </button>
          <button
            aria-selected='false'
            className='uppercase ff-sans-cond text-accent letter-spacing-2'
          >
            Titan
          </button>
        </div>
        <article className='destination-info flow'>
          <h2 className='fs-800 ff-serif uppercase'>Moon</h2>

          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className='destination-meta flex'>
            <div>
              <h3 className='text-accent fs-200 uppercase'>Avg. distance </h3>
              <p className='ff-serif uppercase'>384,400 km</p>
            </div>

            <div>
              <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
              <p className='ff-serif uppercase'> 3 days</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Destination;
