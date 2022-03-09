import Link from 'next/link';
import styles from './results-page-search-bar.module.css';
import searchStyles from '../search/search-bar.module.css';
import { useState } from 'react';
import SelectSearch from '../search/selectSearch';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

function ResultsSearchBar() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  async function handlePlaces(value: string) {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  }

  return (
    <div className={styles.searchbarwrap}>
      <form>
        <SelectSearch />
      </form>
    </div>
  );
}

export default ResultsSearchBar;
