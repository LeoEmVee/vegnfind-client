import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  setSearchTerm,
  setSearchResults,
} from '../../redux/actions/searchActions';
import { sendSearchQuery } from '../../services/axios.service';
import styles from './search-bar.module.css';
import { useEffect } from 'react';
import SearchIcon from '../../assets/icons/icon-search.svg';
import _, { debounce } from 'lodash';
import { setLoading } from '../../redux/actions/loginActions';
import LoadingModal from '../loading-modal/loading-modal';

interface IProps {
  smallBar?: boolean;
}

function SearchBar({ smallBar }: IProps) {
  const { searchTerm, shopping, eating } = useAppSelector(
    state => state.searchReducer,
  );
  const { logUser, loading } = useAppSelector(state => state.loginReducer);
  const dispatch: Function = useAppDispatch();

  function handleSearch(event: any) {
    dispatch(setLoading(true));
    dispatch(setSearchTerm(event.target.value));
  }

  useEffect(() => {
    async function onInit() {
      if (!searchTerm) {
        dispatch(setLoading(false));
        return;
      }
      const results = await sendSearchQuery(searchTerm);
      dispatch(setSearchResults(results));
      dispatch(setLoading(false));
    }
    onInit();
  }, [logUser, searchTerm]);

  return (
    <>
      {loading && searchTerm && <LoadingModal />}
      <div className={styles.searchbarwrap}>
        <form className={styles.searchfrom}>
          <input
            className={
              smallBar
                ? styles.smallsearchbar
                : eating || shopping
                ? styles.shortsearchbar
                : styles.searchbar
            }
            placeholder={
              logUser
                ? `What are you looking for, ${logUser.username}?`
                : 'What are you looking for?'
            }
            onChange={debounce(handleSearch, 200)}
          />
          {eating || shopping ? (
            <input
              type="text"
              className={styles.locationsearchbar}
              placeholder="Where?"
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

export default SearchBar;
