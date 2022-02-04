import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { onChangeSearchBar } from '../../redux/actions/homePageSearchActions';
import { SetStateAction, useEffect, useState } from 'react';
import {
  getEatsSearchResults,
  getShopsSearchResults,
  getProductsSearchResults,
} from '../../services/axios.service';
import styles from './search-bar.module.css';

function SearchBar() {
  const { searchBar } = useAppSelector(state => state.homePageSearch);
  const dispatch: Function = useAppDispatch();
  const [results, setResults] = useState([]);

  const sendQuery = async (searchCondition: any) => {
    const eats = (await getEatsSearchResults({ searchTerm: searchCondition }))
      .data;

    const shops = (await getShopsSearchResults({ searchTerm: searchCondition }))
      .data;

    const products = (
      await getProductsSearchResults({ searchTerm: searchCondition })
    ).data;

    console.log('eats: ', eats);
    console.log('shops: ', shops);
    console.log('products: ', products);
    const results = await [...eats, ...shops, ...products];

    await setResults((): SetStateAction<any> => {
      return results;
    });
    console.log('results: ', results);
  }; // This will send the search query.

  const updateQuery = async (event: any) => {
    await dispatch(onChangeSearchBar(event.target.value));
    await sendQuery(searchBar);
  };

  // useEffect(() => {}, [results]);

  return (
    <div className={styles.searchbarwrap}>
      <form>
        <input
          className={styles.searchbar}
          placeholder="What are you looking for?"
          // onChange={event => dispatch(event.target.value)}
          onChange={updateQuery}

          // This should call some fetch function to be defined in services.
        />
        <Link href="/results-page" passHref>
          <button
            className={styles.searchbarbutton}
            type="submit"
            onClick={sendQuery}>
            Find
          </button>
        </Link>
        {results &&
          results
            .filter((resultEntity: any) => {
              if (!searchBar) {
                return null;
              } else if (
                resultEntity.name
                  .toLowerCase()
                  .includes(searchBar.toLowerCase())
                // ||searchVal.location.toLowerCase().includes(searchBar.toLowerCase())
              ) {
                return resultEntity;
              }
            })
            .map((filteredEntity: any, index: number) => (
              <div className="box" key={index}>
                <p>{filteredEntity.name}</p>
                {/* <p>{searchVal.location}</p> */}
              </div>
            ))}
      </form>
    </div>
  );
}

export default SearchBar;
