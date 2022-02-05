import Link from 'next/link';
import styles from './results-page-search-bar.module.css';

function ResultsSearchBar() {
  return (
    <div className={styles.searchbarwrap}>
      <form>
        <input
          className={styles.searchbar}
          placeholder="What are you looking for?"
        />
        <input
          className={styles.categorysearchbar}
          placeholder="Filter by category"
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
