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
          <div
            data-visible={isOpen}
            id='primary-navigation'
            className='primary-navigation underline-indicators flex'
          >
            <Link
              href='/'
              className={`uppercase text-white letter-spacing-2 ff-sans-cond ${
                props.currentPage === '/' ? 'active' : ''
              }`}
            >
              <span aria-hidden='true'>00</span>Home
            </Link>

            <Link
              href='/destination'
              className={`uppercase text-white letter-spacing-2 ff-sans-cond ${
                props.currentPage === 'destination' ? 'active' : ''
              }`}
            >
              <span aria-hidden='true'>01</span>Destination
            </Link>

            <Link
              href='/crew'
              className={`uppercase text-white letter-spacing-2 ff-sans-cond ${
                props.currentPage === 'crew' ? 'active' : ''
              }`}
            >
              <span aria-hidden='true'>02</span>Crew
            </Link>

            <Link
              href='/technology'
              className={`uppercase text-white letter-spacing-2 ff-sans-cond ${
                props.currentPage === 'technology' ? 'active' : ''
              }`}
            >
              <span aria-hidden='true'>03</span>Technology
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
