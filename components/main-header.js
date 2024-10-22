import React from 'react';
import logoImage from '@/assets/logo.png';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImage.src} alt="A plate with food on it" />
        Next Level Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/communitu">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
