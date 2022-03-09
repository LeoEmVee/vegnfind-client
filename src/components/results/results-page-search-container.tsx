import React from 'react';
import FilterSection from './results-page-filter-section';
import ResultsSearchBar from './results-page-search-bar';
import styles from './results-page-search-container.module.css';

function ResultsSearchContainer() {



  return (
    <div className={styles.searchcontainerwrap}>
      <ResultsSearchBar />
      <FilterSection />
    </div>
  );
}

export default ResultsSearchContainer;