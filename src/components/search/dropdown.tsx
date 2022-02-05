import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  onClickEating,
  onClickShopping,
} from '../../redux/actions/searchActions';
import styles from './dropdown.module.css';

function Dropdown() {
  const { searchResults, searchTerm } = useAppSelector(
    state => state.searchReducer,
  );
  // const dispatch: Function = useAppDispatch();

  return (
    <>
      {searchResults.length && searchTerm
        ? searchResults.map((result: any) => {
            return (
              <option value={result.name} key={result.id}>
                {result.name}
              </option>
            );
          })
        : null}
    </>
  );
}

export default Dropdown;
