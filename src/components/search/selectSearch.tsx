import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import styles from './search-bar.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  setSearchItem,
  setSearchResults,
} from '../../redux/actions/searchActions';
import {
  getEatsSearchResults,
  getProductsSearchResults,
  getShopsSearchResults,
} from '../../services/axios.service';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchIcon from '../../assets/icons/icon-search.svg';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { getDistance } from 'geolib';
import { latLng } from 'leaflet';

interface IProps {
  smallBar?: boolean;
}

function SelectSearch({ smallBar }: IProps) {
  const [goToDetails, setGoToDetails] = useState<boolean>(false);
  const [localResults, setLocalResults] = useState<any[]>([]);
  const [currentValue, setCurrentValue] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState('');
  const dispatch: Function = useAppDispatch();
  const { shopping, eating, searchResults } = useAppSelector(
    state => state.searchReducer,
  );
  const { searchItem } = useAppSelector(state => state.searchReducer);
  const { logUser } = useAppSelector(state => state.loginReducer);
  const router = useRouter();

  // STYLE OBJECTS FOR THE REACT-SELECT COMPONENT
  const selectStyles: any = {
    container: () => ({
      width: (eating || shopping) && router.pathname === '/' ? '60%' : '92%',
      display: 'flex',
      alignItems: 'center',
    }),
    control: (_: any, state: any) => ({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: smallBar ? '5vh' : '7vh',
      marginRight: '1%',
      borderRadius: smallBar ? '25px' : '20px',
      border: smallBar
        ? 'none'
        : state.isFocused
        ? 'solid 4px var(--coral)'
        : 'none',
      boxShadow: smallBar
        ? '0 0 4px rgb(163, 163, 163)'
        : state.isFocused
        ? '0 0 5px var(--coral)'
        : '0 0 5px rgba(0, 0, 0, 0.2)',
      paddingLeft: '12px',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '1.1rem',
      backgroundColor: 'white',
      '&:hover': {
        boxShadow: '0 0 5px var(--coral)',
      },
      outline: smallBar && 'solid 4px var(--coral)',
    }),
    placeholder: (previous: any) => ({
      ...previous,
      fontWeight: 400,
      fontFamily: "'Montserrat', sans-serif",
      fontSize: smallBar ? '.9rem' : '1.1rem',
    }),
    menu: (previous: any) => ({
      ...previous,
      width: (eating || shopping) && router.pathname === '/' ? '60%' : '91%',
      borderRadius: '15px',
      boxShadow: '0 0 3px var(--coral)',
      padding: '5px',
      marginTop: '12px',
    }),
    option: (previous: any, state: any) => ({
      ...previous,
      backgroundColor: state.isFocused ? '#FFD6E0' : '#FFF',
      borderRadius: '5px',
    }),
    loadingIndicator: (previous: any) => ({
      ...previous,
      color: 'var(--coral)',
    }),
  };

  // END OF STYLES

  useEffect(() => {
    dispatch(setSearchResults([]));
    dispatch(setSearchItem(null));
  }, []);

  async function handlePlaces(value: string) {
    const results = await geocodeByAddress(value);
    console.log('ADRESS RESULTS', results);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  }

  async function handleSearch(input: string) {
    if (!input && address) {
      const resEat = (await getEatsSearchResults({ searchTerm: '' })).data;
      const resShop = (await getShopsSearchResults({ searchTerm: '' })).data;
      let allData = [...resEat, ...resShop];

      allData = allData.filter((item: any) => {
        getDistance(
          { latitude: coordinates.lat, longitude: coordinates.lng },
          {
            latitude: item.location.latitude,
            longitude: item.location.longitude,
          },
        ) <= 40000;
      });

      console.log('ALLDATA', allData);
      dispatch(setSearchResults(allData));
      const results = allData.map((item: any) => {
        return { value: item.id, label: item.name };
      });
      setLocalResults(results);
      return results;
    }
    if (!input) {
      return;
    }
    if (eating && !shopping) {
      let resEat = (await getEatsSearchResults({ searchTerm: input })).data;
      if (address) {
        resEat = resEat.filter((item: any) => {
          getDistance(
            { latitude: coordinates.lat, longitude: coordinates.lng },
            {
              latitude: item.location.latitude,
              longitude: item.location.longitude,
            },
          ) <= 40000;
        });
      }
      dispatch(setSearchResults(resEat));
      const results = resEat.map((item: any) => {
        return { value: item.id, label: item.name };
      });
      setLocalResults(results);
      console.log('EATING', results);
      return results;
    }
    if (shopping && !eating) {
      let resShop = (await getShopsSearchResults({ searchTerm: input })).data;
      if (address) {
        resShop = resShop.filter((item: any) => {
          getDistance(
            { latitude: coordinates.lat, longitude: coordinates.lng },
            {
              latitude: item.location.latitude,
              longitude: item.location.longitude,
            },
          ) <= 40000;
        });
      }
      dispatch(setSearchResults(resShop));
      const results = resShop.map((item: any) => {
        return { value: item.id, label: item.name };
      });
      setLocalResults(results);
      return results;
    }
    if (shopping && eating) {
      let resEat = (await getEatsSearchResults({ searchTerm: input })).data;
      let resShop = (await getShopsSearchResults({ searchTerm: input })).data;
      if (address) {
        resEat = resEat.filter((item: any) => {
          getDistance(
            { latitude: coordinates.lat, longitude: coordinates.lng },
            {
              latitude: item.location.latitude,
              longitude: item.location.longitude,
            },
          ) <= 40000;
        });
        resShop = resShop.filter((item: any) => {
          getDistance(
            { latitude: coordinates.lat, longitude: coordinates.lng },
            {
              latitude: item.location.latitude,
              longitude: item.location.longitude,
            },
          ) <= 40000;
        });
      }
      dispatch(setSearchResults([...resEat, ...resShop]));
      const results = [...resEat, ...resShop].map((item: any) => {
        return { value: item.id, label: item.name };
      });
      setLocalResults(results);
      return results;
    }
    if (!shopping && !eating) {
      const resEat = (await getEatsSearchResults({ searchTerm: input })).data;
      const resShop = (await getShopsSearchResults({ searchTerm: input })).data;
      const resProduct = (await getProductsSearchResults({ searchTerm: input }))
        .data;
      dispatch(setSearchResults([...resEat, ...resShop, ...resProduct]));
      const results = [...resEat, ...resShop, ...resProduct].map(
        (item: any) => {
          return { value: item.id, label: item.name };
        },
      );
      setLocalResults(results);
      return results;
    }
  }

  return (
    <>
      <div className={styles.searchbarwrap}>
        <form className={styles.searchform}>
          <AsyncSelect
            // style related options
            styles={selectStyles}
            minMenuHeight={100}
            maxMenuHeight={400}
            placeholder={
              logUser
                ? `What are you looking for, ${logUser.username}?`
                : 'What are you looking for?'
            }
            // dropdown behaviour options
            isSearchable={true}
            closeMenuOnSelect={true}
            closeMenuOnScroll={true}
            hideSelectedOptions={true}
            loadingMessage={() => 'Searching results...'}
            noOptionsMessage={e =>
              e.inputValue ? 'No results match...' : null
            }
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            // search related options
            inputValue={currentValue}
            value={setCurrentValue}
            loadOptions={(input: string) => handleSearch(input)}
            // onInputChange={e => handleSearch(e)}
            onKeyDown={async e => {
              if (e.key === 'Enter' && !goToDetails) {
                router.push('/results-page');
              }
              if (e.key === 'Enter' && goToDetails) {
                router.push(`/itemdetails/${searchItem.id}`);
              }
            }}
            openMenuOnClick={false}
          />
          {(eating || shopping) && router.pathname === '/' ? (
            <PlacesAutocomplete
              value={address}
              debounce={1000}
              onChange={setAddress}
              onSelect={handlePlaces}>
              {({
                loading,
                suggestions,
                getInputProps,
                getSuggestionItemProps,
              }) => (
                <div style={{ width: '30%' }}>
                  <input
                    {...getInputProps({
                      placeholder: 'Where?',
                      className: styles.locationsearchbar,
                    })}
                  />
                  <div>
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map((suggestion: any) => {
                      // const optionsStyle = {} <============HERE GO OPTIONS STYLES
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            // optionsStyle,
                          })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          ) : null}
          <Link href="/results-page" passHref>
            {smallBar ? (
              <button
                className={styles.searchiconbutton}
                onClick={() => handleSearch(currentValue)}>
                <SearchIcon />
              </button>
            ) : (
              <button className={styles.searchbarbutton}>Find</button>
            )}
          </Link>
        </form>
      </div>
    </>
  );
}

export default SelectSearch;
