import React from 'react';
import Link from 'next/link';
import Pagination from './pagination';
import ResultItem from './result-item';
import styles from './results/results-list.module.css'

function ResultsList() {
  return (
    <div className={styles.resultslistwrap}>
      <Pagination />
      <ResultItem />
      <ResultItem />
      <ResultItem />
      <ResultItem />
      <ResultItem />
      <Link href='#top' passHref><button className={styles.backtotopbutton}>Top</button></Link>
    </div>
  );
}

export default ResultsList;
