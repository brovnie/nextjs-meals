import React, { Suspense } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '../lib/meals';

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicionus meals created
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favoriete recipe and cook it yourself! </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favoriete recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
