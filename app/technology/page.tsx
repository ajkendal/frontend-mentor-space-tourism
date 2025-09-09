'use client';

import Navigation from '../components/Navigation';
import { data } from '../assets/data';
import { useState } from 'react';

import '../styles/technology.css';

const Technology = () => {
  const technology = data.technology;
  const [currentTech, setCurrentTech] = useState(technology[0].name);

  const techData = technology.find((tech) => tech.name === currentTech);

  return (
    <div className='page technology'>
      <Navigation currentPage='technology' />
      <main
        id='main'
        className='grid-container grid-container--technology flow'
      >
        <h1 className='numbered-title'>
          <span aria-hidden='true'>03</span> Space launch 101
        </h1>

        <img
          className='technology-image-landscape'
          src={`/static/images${techData?.images.landscape}`}
          alt={techData?.name}
        />

        <div className='numbered-indicators grid'>
          {technology.map((tech, index) => (
            <button
              key={tech.name}
              aria-selected={currentTech === tech.name}
              onClick={() => setCurrentTech(tech.name)}
            >
              {index + 1} <span className='sr-only'>{techData?.name}</span>
            </button>
          ))}
        </div>

        <article className='technology-details flow'>
          <header className='flow flow--space-small'>
            <h2 className='fs-600 ff-serif uppercase'>The terminology...</h2>
            <p className='fs-700 uppercase ff-serif'>{techData?.name}</p>
          </header>
          <p>{techData?.description}</p>
        </article>
        <img
          className='technology-image-portrait'
          src={`/static/images${techData?.images.portrait}`}
          alt={techData?.name}
        />
      </main>
    </div>
  );
};

export default Technology;
