import Link from 'next/link';
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  onClickEating,
  onClickShopping,
  onClickProducts,
} from '../../redux/actions/searchActions';
import styles from './search-container.module.css';
import SelectSearch from './selectSearch';

function SearchContainer() {
  const { eating, shopping } = useAppSelector(state => state.searchReducer);
  const { authorized } = useAppSelector(state => state.loginReducer);
  const [showWarn, setShowWarn] = useState(false);
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

  return (
    <div className={styles.searchcontainerwrap}>
      {showWarn && <p className={styles.notloggedwarn}>You must be logged in to add new shops, restaurants or products</p>}
      <button
        type="button"
        onClick={toggleShopping}
        className={
          shopping ? styles.shoppingbuttonfocus : styles.shoppingbutton
        }>
        Shopping
      </button>
      <button
        type="button"
        onClick={toggleEating}
        className={eating ? styles.eatingbuttonfocus : styles.eatingbutton}>
        Eating
      </button>
      {authorized ?
        <Link href="/add-content" passHref>
          <button type="button" className={styles.addbutton}>
            Add
          </button>
        </Link> :
        <button type="button" className={styles.addbuttondisabled} onClick={() => setShowWarn(true)}>
          Add
        </button>
      }
      <SelectSearch />
    </div>
  );
}

export default SearchContainer;
