import React from 'react';
import logoImage from '@/assets/logo.png';
import Link from 'next/link';
import styles from './main-header.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logoImage.src} alt="A plate with food on it" />
        Next Level Food
      </Link>
      <nav className={styles.nav}>
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
