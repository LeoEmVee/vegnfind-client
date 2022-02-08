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
  const [goToDetails, setGoToDetails] = useState<boolean>(false);
  const [localResults, setLocalResults] = useState<any[]>([]);
  const [localInput, setLocalInput] = useState<string>('');
  const dispatch: Function = useAppDispatch();
  const { shopping, eating } = useAppSelector(state => state.searchReducer);
  const { searchResults, searchItem } = useAppSelector(
    state => state.searchReducer,
  );
  const { logUser } = useAppSelector(state => state.loginReducer);
  const router = useRouter();

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
      fontSize: '1.1rem',
    }),
  };

  const locationStyles = {
    container: () => ({
      width: '31%',
      display: 'flex',
      alignItems: 'center',
    }),
    control: (_: any, state: any) => ({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '7vh',
      marginRight: '1%',
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
      outline: state.isFocused && 'solid 4px var(--coral)',
    }),
    placeholder: (previous: any) => ({
      ...previous,
      fontWeight: 400,
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.1rem',
    }),
  };

  useEffect(() => {
    dispatch(setSearchResults([]));
    dispatch(setSearchItem(null));
  }, []);

  async function handleSearch(input: string) {
    if (!input) {
      return;
    }
    console.log('input', input);
    setLocalInput(input);
    const results = (await sendSearchQuery(input))
      .map((res: any) => res.data)
      .flat();
    dispatch(setSearchResults(results));
    setLocalResults(results);
    console.log('results', results);
    if (results.length === 1) {
      await dispatch(setSearchItem(results[0]));
      setGoToDetails(true);
      console.log('details true', goToDetails);
      console.log('searchItem after dispatch', searchItem);
    }

    const loadResults = results.map((item: any) => {
      return { value: item.id, label: item.name };
    });
    return loadResults;
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
            cacheOptions={localResults}
            defaultOptions={localResults}
            loadOptions={(input: string) => handleSearch(input)}
            // onInputChange={e => handleSearch(e)}
            onKeyDown={e => {
              console.log('event', e);
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
            <AsyncSelect
              // style related options
              minMenuHeight={100}
              maxMenuHeight={400}
              placeholder={'Where?'}
              styles={locationStyles}
              // dropdown behaviour options
              isSearchable={true}
              closeMenuOnSelect={true}
              closeMenuOnScroll={true}
              hideSelectedOptions={true}
              loadingMessage={() => 'Searching results...'}
              noOptionsMessage={e => (e.inputValue ? 'No options' : null)}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
          ) : null}
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
    </>
  );
}

export default SelectSearch;
