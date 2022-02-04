import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  setSearchTerm,
  setSearchResults,
} from '../../redux/actions/searchActions';
import {
  getEatsSearchResults,
  getShopsSearchResults,
  getProductsSearchResults,
  sendSearchQuery,
} from '../../services/axios.service';
import styles from './search-bar.module.css';
import { useEffect } from 'react';
import { alphSort } from '../../helpers/helpers';

function SearchBar() {
  const { searchResults, searchTerm } = useAppSelector(
    state => state.searchReducer,
  );
  const { logUser } = useAppSelector(state => state.loginReducer);
  const dispatch: Function = useAppDispatch();

  function handleSearchTerm(event: any) {
    dispatch(setSearchTerm(event.target.value));
  }

  useEffect(() => {
    async function onInit() {
      const results = await sendSearchQuery(searchTerm);
      dispatch(setSearchResults(results));
    }
    onInit();
  }, [logUser, searchTerm]);

  return (
    <div className={styles.searchbarwrap}>
      <form>
        <input
          className={styles.searchbar}
          placeholder={
            logUser
              ? `What are you looking for, ${logUser.username}?`
              : 'What are you looking for?'
          }
          onChange={handleSearchTerm}
        />
        <Link href="/results-page" passHref>
<<<<<<< HEAD
          <button
            className={styles.searchbarbutton}
          // type="submit"
          // onClick={sendQuery}
          >
            Find
          </button>
        </Link>
        {searchResults.length && searchBar
          ? searchResults.map((result: any) => {
            console.log('result', result);
            return <p key={result.id}>{result.name}</p>;
          })
=======
          <button className={styles.searchbarbutton}>Find</button>
        </Link>
        {searchResults.length && searchTerm
          ? alphSort(searchResults).map((result: any) => {
              return <p key={result.id}>{result.name}</p>;
            })
>>>>>>> b46c06ef90bfdc78735d2d7d16e3c2f5b259f7ec
          : null}
      </form>
    </div>
  );
}

export default SearchBar;
