import Link from 'next/link';
import React from 'react';
import SearchBar from './search-bar';
import { useAppSelector, useAppDispatch } from '../redux/store';
import {
  onClickEating,
  onClickShopping,
} from '../redux/actions/homePageSearchActions';

function SearchContainer() {
  const { eating, shopping } = useAppSelector(state => state.homePageSearch);

  const dispatch: Function = useAppDispatch();

  const toggleEating = () => {
    dispatch(onClickEating());
    console.log(eating);
  };

  const toggleShopping = () => {
    dispatch(onClickShopping());
    console.log(shopping);
  };

  return (
    <div className="search-container">
      <div>- Search Container</div>
      <SearchBar />
      <span>* -- </span>
      <button type="button" onClick={toggleShopping}>
        Shopping (filter)
      </button>
      <button type="button" onClick={toggleEating}>
        Eating (filter)
      </button>
      <Link href="/add-content" passHref>
        <button type="button">Add Item (link)</button>
      </Link>
    </div>
  );
}

export default SearchContainer;
