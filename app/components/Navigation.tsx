'use client';
import Link from 'next/link';
import '../styles/navigation.css';

import { useState } from 'react';

const Navigation = (props: { currentPage: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <a className='skip-to-content' href='#main'>
        Skip to content
      </a>
      <header className='primary-header flex'>
        <div>
          <img
            src='/static/images/shared/logo.svg'
            alt='Space Tourism Logo'
            className='logo'
          />
        </div>
        <button
          className='mobile-nav-toggle'
          aria-controls='primary-navigation'
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span aria-expanded={isOpen} className='sr-only'>
            Menu
          </span>
        </button>
        <nav>
          <ul
            data-visible={isOpen}
            id='primary-navigation'
            className='primary-navigation underline-indicators flex'
          >
            <li className={props.currentPage === '/' ? 'active' : ''}>
              <Link
                href='/'
                className='uppercase text-white letter-spacing-2 ff-sans-cond'
              >
                <span aria-hidden='true'>00</span>Home
              </Link>
            </li>
            <li className={props.currentPage === 'destination' ? 'active' : ''}>
              <Link
                href='/destination'
                className='uppercase text-white letter-spacing-2 ff-sans-cond'
              >
                <span aria-hidden='true'>01</span>Destination
              </Link>
            </li>
            <li className={props.currentPage === 'crew' ? 'active' : ''}>
              <Link
                href='/crew'
                className='uppercase text-white letter-spacing-2 ff-sans-cond'
              >
                <span aria-hidden='true'>02</span>Crew
              </Link>
            </li>
            <li className={props.currentPage === 'technology' ? 'active' : ''}>
              <Link
                href='/technology'
                className='uppercase text-white letter-spacing-2 ff-sans-cond'
              >
                <span aria-hidden='true'>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
