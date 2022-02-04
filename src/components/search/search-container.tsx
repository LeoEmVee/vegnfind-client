import Link from 'next/link';
import React from 'react';
import SearchBar from './search-bar';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  onClickEating,
  onClickShopping,
} from '../../redux/actions/searchActions';
import styles from './search-container.module.css';

function SearchContainer() {
  const { eating, shopping } = useAppSelector(state => state.searchReducer);
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
    <div className={styles.searchcontainerwrap}>
      <button
        type="button"
        onClick={toggleShopping}
        className={styles.shoppingbutton}>
        Shopping
      </button>
      <button
        type="button"
        onClick={toggleEating}
        className={styles.eatingbutton}>
        Eating
      </button>
      <Link href="/add-content" passHref>
        <button type="button" className={styles.addbutton}>
          Add
        </button>
      </Link>
      <SearchBar />
    </div>
  );
}

export default SearchContainer;
