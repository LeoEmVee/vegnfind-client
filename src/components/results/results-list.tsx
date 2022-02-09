import React from 'react';
import Pagination from '../pagination/pagination';
import ResultItem from './result-item';
import styles from '../results/results-list.module.css';
import { useAppSelector } from '../../redux/store';

function ResultsList() {
  const { searchResults, eating, shopping, products } = useAppSelector(
    state => state.searchReducer,
  );

  function filterResults() {
    if (!eating && !shopping && !products) {
      return (
        searchResults &&
        searchResults.map((result: any) => {
          return <ResultItem key={result.id} itemDetails={result} />;
        })
      );
    } else if (!eating && !shopping && products) {
      return (
        searchResults &&
        searchResults.map((result: any) => {
          if (!result.hasOwnProperty('isVegan'))
            return <ResultItem key={result.id} itemDetails={result} />;
        })
      );
    } else if (!eating && shopping && !products) {
      return (
        searchResults &&
        searchResults.map((result: any) => {
          if (result.hasOwnProperty('products'))
            return <ResultItem key={result.id} itemDetails={result} />;
        })
      );
    } else if (eating && !shopping && !products) {
      return (
        searchResults &&
        searchResults.map((result: any) => {
          if (
            !result.hasOwnProperty('products') &&
            result.hasOwnProperty('isVegan')
          )
            return <ResultItem key={result.id} itemDetails={result} />;
        })
      );
    } else if (eating && shopping && !products) {
      return (
        searchResults &&
        searchResults.map((result: any) => {
          if (result.hasOwnProperty('isVegan'))
            return <ResultItem key={result.id} itemDetails={result} />;
        })
      );
    }
  }
  console.log(searchResults);
  return (
    <div className={styles.resultslistwrap}>
      <Pagination />
      {filterResults()}
    </div>
  );
}

export default ResultsList;
