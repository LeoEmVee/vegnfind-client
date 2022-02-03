import Data from '../../mock-data.json'; // THIS IS PROVISORY MOCK DATA TO BE DELETED!!!!
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { onChangeSearchBar } from '../redux/actions/homePageSearchActions';
import { SetStateAction, useEffect, useState } from 'react';
import { getSearchResults } from '../services/axios.service';

function SearchBar() {
  const { searchBar } = useAppSelector(state => state.homePageSearch);
  const dispatch: Function = useAppDispatch();
  const [results, setResults] = useState([]);

  const sendQuery = async (searchCondition: any) => {
    // const searchOptions = searchCondition;
    const res = await getSearchResults({ searchTerm: searchCondition });
    console.log('search results', res);
    setResults((): SetStateAction<any> => {
      return [...res];
    });
    console.log('results state', results);
  }; // This will send the search query.

  const updateQuery = async (event: any) => {
    await dispatch(onChangeSearchBar(event.target.value));
    sendQuery(searchBar);
  };

  // useEffect(() => {}, [results]);

  return (
    <div>
      <form>
        <input
          placeholder="What are you looking for?"
          // onChange={event => dispatch(event.target.value)}
          onChange={updateQuery}

          // This should call some fetch function to be defined in services.
        />
        <Link href="/results-page" passHref>
          <button type="submit" onClick={sendQuery}>
            Find
          </button>
        </Link>
        {results.length &&
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
