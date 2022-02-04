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
} from '../../services/axios.service';
import styles from './search-bar.module.css';
import { useEffect } from 'react';

function SearchBar() {
  const { searchResults } = useAppSelector(state => state.searchReducer);
  const { logUser } = useAppSelector(state => state.loginReducer);
  const dispatch: Function = useAppDispatch();

  // this function sends queries to server and orders results alphabetically:
  const sendSearchQuery = async (search: any) => {
    const eats = (await getEatsSearchResults({ searchTerm: search })).data;
    const shops = (await getShopsSearchResults({ searchTerm: search })).data;
    const products = (await getProductsSearchResults({ searchTerm: search }))
      .data;
    return [...eats, ...shops, ...products];
  }; // This will send the search query.

  const updateQuery = async (event: any) => {
    const results = await sendSearchQuery(event.target.value);
    // if results, sort them alphabetically
    if (results) {
      results.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // ignore upper and lowercase
        const nameB = b.name.toLowerCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      dispatch(setSearchResults(results));
    }
  };

  useEffect(() => {}, [logUser]);

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
          onChange={updateQuery}
        />
        <Link href="/results-page" passHref>
          <button className={styles.searchbarbutton}>Find</button>
        </Link>
        {searchResults.length
          ? searchResults.map((result: any) => {
              return <p key={result.id}>{result.name}</p>;
            })
          : null}
      </form>
    </div>
  );
}

export default SearchBar;
