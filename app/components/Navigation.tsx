import Link from 'next/link';

const Navigation = () => {
  return (
    <header className='primary-header flex'>
      <div>
        <img
          src='/static/images/shared/logo.svg'
          alt='Space Tourism Logo'
          className='logo'
        />
      </div>
      {/* <nav>
        <ul className='primary-navigation underline-indicators flex'>
          <li>
            <Link
              href='/'
              className='uppercase text-white letter-spacing-2 ff-sans-cond'
            >
              <span>00</span>Home
            </Link>
          </li>
          <li>
            <Link
              href='/destination'
              className='uppercase text-white letter-spacing-2 ff-sans-cond'
            >
              <span>01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              href='/crew'
              className='uppercase text-white letter-spacing-2 ff-sans-cond'
            >
              <span>02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              href='/technology'
              className='uppercase text-white letter-spacing-2 ff-sans-cond'
            >
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navigation;
