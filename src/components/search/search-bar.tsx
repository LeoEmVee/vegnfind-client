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
import SearchIcon from '../../assets/icons/icon-search.svg'

function SearchBar({ smallBar }) {
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
      <form className={styles.searchfrom}>
        <input
          className={smallBar ? styles.smallsearchbar : styles.searchbar}
          placeholder={
            logUser
              ? `What are you looking for, ${logUser.username}?`
              : 'What are you looking for?'
          }
          onChange={handleSearchTerm}
        />
        <Link href="/results-page" passHref>
          {smallBar ? <button className={styles.searchiconbutton}><SearchIcon /></button> : <button className={styles.searchbarbutton}>Find</button>}
        </Link>
        {searchResults.length && searchTerm
          ? alphSort(searchResults).map((result: any) => {
            return <p key={result.id}>{result.name}</p>;
          })
          : null}
      </form>
    </div>
  );
}

export default SearchBar;
