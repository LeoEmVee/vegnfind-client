import React from 'react';
import styles from './results-page-filter-section.module.css';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  onClickEating,
  onClickProducts,
  onClickShopping,
} from '../../redux/actions/searchActions';

function FilterSection() {
  const { shopping, eating, products } = useAppSelector(
    state => state.searchReducer,
  );
  const dispatch: Function = useAppDispatch();

  const toggleEating = () => {
    if (eating) dispatch(onClickEating(false));
    else {
      dispatch(onClickEating(true));
      dispatch(onClickProducts(false));
    }
  };

  const toggleShopping = () => {
    if (shopping) dispatch(onClickShopping(false));
    else {
      dispatch(onClickShopping(true));
      dispatch(onClickProducts(false));
    }
  };

  const toggleProducts = () => {
    if (products) dispatch(onClickProducts(false));
    else {
      dispatch(onClickProducts(true));
      dispatch(onClickEating(false));
      dispatch(onClickShopping(false));
    }
  };

  const toggleAllResults = () => {
    dispatch(onClickEating(false));
    dispatch(onClickShopping(false));
    dispatch(onClickProducts(false));
  };

  return (
    <div className={styles.filterwrap}>
      <button
        onClick={toggleAllResults}
        className={
          shopping || eating || products
            ? styles.filterbutton
            : styles.filterbuttonactivated
        }>
        All results
      </button>
      <button
        onClick={toggleProducts}
        className={
          products ? styles.filterbuttonactivated : styles.filterbutton
        }>
        Products
      </button>
      <button
        onClick={toggleShopping}
        className={
          shopping ? styles.filterbuttonactivated : styles.filterbutton
        }>
        Shops
      </button>
      <button
        onClick={toggleEating}
        className={eating ? styles.filterbuttonactivated : styles.filterbutton}>
        Eating
      </button>
    </div>
  );
}

export default FilterSection;
