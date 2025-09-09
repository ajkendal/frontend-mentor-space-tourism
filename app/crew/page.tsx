'use client';
import Navigation from '../components/Navigation';
import { data } from '../assets/data';
import { useState } from 'react';

import '../styles/crew.css';

const Crew = () => {
  const crewMembers = data.crew;
  const [currentMember, setCurrentMember] = useState(crewMembers[0].name);

  const memberData = crewMembers.find(
    (member) => member.name === currentMember
  );

  return (
    <div className='page crew'>
      <Navigation currentPage='crew' />
      <main id='main' className='grid-container grid-container--crew flow'>
        <h1 className='numbered-title'>
          <span aria-hidden='true'>02</span> Meet your crew
        </h1>

        <div className='dot-indicators flex'>
          {crewMembers.map((member) => (
            <button
              key={member.name}
              aria-selected={member.name === currentMember}
              onClick={() => setCurrentMember(member.name)}
            >
              <span className='sr-only'>{member.role}</span>
            </button>
          ))}
        </div>

        {memberData && (
          <>
            <article className='crew-details flow'>
              <header className='flow flow--space-small'>
                <h2 className='fs-600 ff-serif uppercase'>{memberData.role}</h2>
                <p className='fs-700 uppercase ff-serif'>{memberData.name}</p>
              </header>
              <p>{memberData.bio}</p>
            </article>

            <picture>
              <source
                srcSet={`/static/images${memberData.images.webp}`}
                type='image/webp'
              />
              <img
                src={`/static/images${memberData.images.png}`}
                alt={memberData.name}
              />
            </picture>
          </>
        )}
      </main>
    </div>
  );
};

export default Crew;
