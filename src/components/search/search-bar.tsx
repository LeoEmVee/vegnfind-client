import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  setSearchBar,
  setSearchResults,
} from '../../redux/actions/searchActions';
import {
  getEatsSearchResults,
  getShopsSearchResults,
  getProductsSearchResults,
} from '../../services/axios.service';
import styles from './search-bar.module.css';

function SearchBar() {
  const { searchBar, searchResults } = useAppSelector(
    state => state.searchReducer,
  );
  const dispatch: Function = useAppDispatch();
  // const [results, setResults] = useState([]);

  const sendQuery = async (searchCondition: any) => {
    const eats = (await getEatsSearchResults({ searchTerm: searchCondition }))
      .data;

    const shops = (await getShopsSearchResults({ searchTerm: searchCondition }))
      .data;

    const products = (
      await getProductsSearchResults({ searchTerm: searchCondition })
    ).data;

    const results = await [...eats, ...shops, ...products];
    console.log('eats results: ', eats);
    console.log('shops results: ', shops);
    console.log('products results: ', products);

    await dispatch(setSearchResults(results));
  }; // This will send the search query.

  const updateQuery = async (event: any) => {
    await dispatch(setSearchBar(event.target.value));
    await sendQuery(event.target.value);
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
        />
        <Link href="/results-page" passHref>
          <button
            className={styles.searchbarbutton}
          // type="submit"
          // onClick={sendQuery}
          >
            Find
          </button>
        </Link>
        {searchResults.length && searchBar ? searchResults.map((result: any) => {
          console.log('result', result)
          return (<p key={result.id} >{result.name}</p>)
        }) : null}
      </form>
    </div>
  );
}

export default SearchBar;
