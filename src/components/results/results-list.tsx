import React from 'react';
import Link from 'next/link';
import Pagination from '../pagination';
import ResultItem from './result-item';
import styles from '../results/results-list.module.css';
import { useAppSelector } from '../../redux/store';

function ResultsList() {
  const { searchResults } = useAppSelector(state => state.searchReducer);
  return (
    <div className={styles.resultslistwrap}>
      <Pagination />
      {searchResults.length &&
        searchResults.map(result => {
          return <ResultItem key={result.id} itemDetails={result} />;
        })}
      <Link href="#top" passHref>
        <button className={styles.backtotopbutton}>Top</button>
      </Link>
    </div>
  );
}

export default ResultsList;
