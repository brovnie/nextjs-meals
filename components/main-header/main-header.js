import React from 'react';
import logoImage from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImage} alt="A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
