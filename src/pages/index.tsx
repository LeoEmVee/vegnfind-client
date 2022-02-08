import SearchContainer from '../components/search/search-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import Navbar from '../components/navbar/navbar';
import styles from './index.module.css';
import BackToTopButton from '../components/back-to-top-button/back-to-top-button';

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.homewrap}>
        <h3>For all your vegan needs</h3>
        <SearchContainer />
        <ThumbnailList listTitle={'Find the best vegan restaurants'} />
        <ThumbnailList listTitle={'Find the best vegan shops'} />
        <ThumbnailList listTitle={'Find the best vegan products'} />
        <BackToTopButton />
      </div>
    </>
  );
}

export default Home;
