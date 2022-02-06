import React, { useEffect, useState } from 'react';
import styles from './search-bar.module.css';
import AsyncSelect from 'react-select/async';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  setSearchItem,
  setSearchResults,
} from '../../redux/actions/searchActions';
import { sendSearchQuery } from '../../services/axios.service';
import { useRouter } from 'next/router';

interface IProps {
  smallBar?: boolean;
}

function SelectSearch({ smallBar }: IProps) {
  const [goToDetails, setGoToDetails] = useState(false);
  const dispatch: Function = useAppDispatch();
  const { searchResults, searchItem, shopping, eating } = useAppSelector(
    state => state.searchReducer,
  );
  const { logUser } = useAppSelector(state => state.loginReducer);
  const router = useRouter();

  useEffect(() => {
    dispatch(setSearchResults([]));
    dispatch(setSearchItem(null));
  }, []);

  const selectStyles = {
    control: (): any =>
      smallBar
        ? styles.smallsearchbar
        : eating || shopping
        ? styles.shortsearchbar
        : styles.searchbar,
  };

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
      console.log('details?', goToDetails);
    }
    const results = (await sendSearchQuery(event))
      .map((res: any) => res.data)
      .flat();
    dispatch(setSearchResults(results));
    if (results.length === 1) {
      dispatch(setSearchItem(results[0]));
      setGoToDetails(true);
    }
    const loadResults = results.map((item: any) => {
      return { value: item.id, label: item.name };
    });
    return loadResults;
  }

  return (
    <AsyncSelect
      placeholder={
        logUser
          ? `What are you looking for, ${logUser.username}?`
          : 'What are you looking for?'
      }
      cacheOptions={searchResults}
      defaultOptions={searchResults}
      loadOptions={handleSearch}
      styles={selectStyles}
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
  );
}

export default SelectSearch;
