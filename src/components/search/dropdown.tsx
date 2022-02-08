import React from 'react';
import { useAppSelector } from '../../redux/store';

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
