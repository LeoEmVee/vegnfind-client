import React from 'react';
import Pagination from './pagination';
import ResultItem from './result-item';

// interface IFResultsList {
//   prop: any;
// }

function ResultsList() {
  return (
    <div className="results-list">
      <div>- Results List</div>
      <Pagination />
      <ResultItem />
      <span>* -- </span>
      <button type="button">Back to top</button>
    </div>
  );
}

export default ResultsList;
