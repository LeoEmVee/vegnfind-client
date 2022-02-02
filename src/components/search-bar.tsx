import Data from '../../mock-data.json'; // THIS IS PROVISORY MOCK DATA TO BE DELETED!!!!
import { useState } from 'react';
import Link from 'next/link';

function SearchBar() {
  const [query, setQuery] = useState('');

  const sendQuery = () => console.log(query); // This will send the search query.

  return (
    <div>
      <form>
        <input
          placeholder="What are you looking for?"
          onChange={event => setQuery(event.target.value)}
          // This should call some fetch function to be defined in services.
        />
        <Link href="/results-page" passHref>
          <input
            type="submit"
            onClick={sendQuery}
            value="Search (link)"></input>
        </Link>
      </form>

      {Data.filter(searchVal => {
        if (query === '') {
          return null;
        } else if (
          searchVal.name.toLowerCase().includes(query.toLowerCase()) ||
          searchVal.location.toLowerCase().includes(query.toLowerCase())
        ) {
          return searchVal;
        }
      }).map((searchVal, index) => (
        <div className="box" key={index}>
          <p>{searchVal.name}</p>
          <p>{searchVal.location}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
