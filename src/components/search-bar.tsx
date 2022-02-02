import Data from '../../mock-data.json'; // THIS IS PROVISORY MOCK DATA TO BE DELETED!!!!
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { onChangeSearchBar } from '../redux/actions/homePageSearchActions';

function SearchBar() {
  const { searchBar } = useAppSelector(state => state.homePageSearch);
  const sendQuery = () => console.log(searchBar); // This will send the search query.
  const dispatch: Function = useAppDispatch();

  const updateQuery = (event: any) => {
    console.log(event.target.value);
    dispatch(onChangeSearchBar(event.target.value));
  };

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
          <input type="submit" onClick={sendQuery} value="Find"></input>
        </Link>
        {Data.filter(searchVal => {
          if (!searchBar) {
            return null;
          } else if (
            searchVal.name.toLowerCase().includes(searchBar.toLowerCase()) ||
            searchVal.location.toLowerCase().includes(searchBar.toLowerCase())
          ) {
            return searchVal;
          }
        }).map((searchVal, index) => (
          <div className="box" key={index}>
            <p>{searchVal.name}</p>
            <p>{searchVal.location}</p>
          </div>
        ))}
      </form>
    </div>
  );
}

export default SearchBar;
