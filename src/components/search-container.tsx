import Link from 'next/link';
import React from 'react';
import SearchBar from './search-bar';

// interface IFSearchContainer {
//   prop: any;
// }

function SearchContainer() {
  return (
    <div className="search-container">
      <div>- Search Container</div>
      <SearchBar />
      <span>* -- </span>
      <button type="button">Shopping (filter)</button>
      <button type="button">Eating (filter)</button>
      <Link href="/add-content" passHref>
        <button type="button">Add Item (link)</button>
      </Link>
    </div>
  );
}

export default SearchContainer;
