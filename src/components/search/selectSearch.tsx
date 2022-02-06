import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import styles from './search-bar.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  setSearchItem,
  setSearchResults,
} from '../../redux/actions/searchActions';
import { sendSearchQuery } from '../../services/axios.service';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchIcon from '../../assets/icons/icon-search.svg';

interface IProps {
  smallBar?: boolean;
}

function SelectSearch({ smallBar }: IProps) {
  const [goToDetails, setGoToDetails] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const dispatch: Function = useAppDispatch();
  const { searchResults, searchItem, shopping, eating } = useAppSelector(
    state => state.searchReducer,
  );
  const { logUser } = useAppSelector(state => state.loginReducer);
  const router = useRouter();

  const selectStyles = {
    // option: (provided, state) => ({
    //   ...provided,
    //   borderBottom: '1px dotted pink',
    //   color: state.isSelected ? 'red' : 'blue',
    //   padding: 20,
    // }),
    control: (_: any, state: any) => ({
      display: 'flex',
      alignItems: 'center',
      width: '91%',
      marginRight: '1%',
      height: '7vh',
      borderRadius: '20px',
      border: state.isFocused ? 'solid 4px var(--coral)' : 'none',
      boxShadow: state.isFocused
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
    }),
    placeholder: (previous: any) => ({
      ...previous,
      fontWeight: 400,
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.1rem',
    }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';

    //   return { ...provided, opacity, transition };
    // },
  };

  useEffect(() => {
    dispatch(setSearchResults([]));
    dispatch(setSearchItem(null));
  }, []);

  async function handleSearch(event: any) {
    if (!event) {
      return;
    }
    console.log('event', event);
    if (
      searchResults &&
      searchResults.some((item: any) => item.name === event)
    ) {
      setGoToDetails(true);
      console.log('details true', goToDetails);
      return;
    }
    if (event.length <= 1) {
      console.log('details false', goToDetails);
      const results = (await sendSearchQuery(event))
        .map((res: any) => res.data)
        .flat();
      await dispatch(setSearchResults(results));
      if (results.length === 1) {
        await dispatch(setSearchItem(results[0]));
        setGoToDetails(true);
        console.log('details true', goToDetails);
        console.log('searchItem', searchItem);
      }
    }
    const loadResults = searchResults.map((item: any) => {
      return { value: item.id, label: item.name };
    });
    return loadResults;
  }

  return (
    <div className={styles.searchbarwrap}>
      <form className={styles.searchform}>
        <AsyncSelect
          // style related options
          minMenuHeight={100}
          maxMenuHeight={400}
          placeholder={
            logUser
              ? `What are you looking for, ${logUser.username}?`
              : 'What are you looking for?'
          }
          styles={selectStyles}
          // dropdown behaviour options
          isSearchable={true}
          closeMenuOnSelect={true}
          closeMenuOnScroll={true}
          hideSelectedOptions={true}
          loadingMessage={() => 'Searching results...'}
          noOptionsMessage={() => null}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          // search related options
          cacheOptions={searchResults}
          defaultOptions={searchResults}
          loadOptions={handleSearch}
          onInputChange={e => handleSearch(e)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !goToDetails) {
              router.push('/results-page');
            }
            if (e.key === 'Enter' && goToDetails) {
              router.push(`/itemdetails/${searchItem.id}`);
            }
          }}
        />
        <Link href="/results-page" passHref>
          {smallBar ? (
            <button className={styles.searchiconbutton}>
              <SearchIcon />
            </button>
          ) : (
            <button className={styles.searchbarbutton}>Find</button>
          )}
        </Link>
      </form>
    </div>
  );
}

export default SelectSearch;
