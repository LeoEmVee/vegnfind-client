import Link from 'next/link';
import styles from './results-page-search-bar.module.css';
import AsyncSelect from 'react-select/async';
import { getCategories } from '../../services/axios.service';
import { useState } from 'react';

function ResultsSearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState([]);

  async function getAllCategories() {
    const { data } = await getCategories();
    const categories = await data.map((result: any) => result.name);
    const filteredCategories = categories.filter((item: any, index: any) => {
      return categories.indexOf(item) === index;
    });
    console.log('SUPERDATA', filteredCategories);
    return filteredCategories;
  }

  const loadOptions = () => getAllCategories('');

  function handleOnSubmit() {
    setCategory(previous => [...previous, inputValue]);
  }

  function handleInputChange(input: any) {
    setInputValue(input);
  }

  const e = getAllCategories('');
  console.log('Todas las categories: ', e);
  console.log('InputValue', inputValue);
  console.log('Category', category);

  // STYLES
  const selectStyles = {
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
  // END OF STYLES

  return (
    <div className={styles.searchbarwrap}>
      <form>
        <input
          className={styles.searchbar}
          placeholder="What are you looking for?"
        />
        <AsyncSelect
          isMulti
          styles={selectStyles}
          value={inputValue}
          onInputChange={handleInputChange}
          loadOptions={() => loadOptions}
          loadingMessage={() => 'Searching results...'}
          onClick={handleOnSubmit}
        />
        <input
          className={styles.locationsearchbar}
          placeholder="Filter by location"
        />
        <Link href="/results-page" passHref>
          <button className={styles.searchbarbutton} type="submit">
            Find
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ResultsSearchBar;
