import SearchContainer from '../components/search/search-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import Navbar from '../components/navbar/navbar';
import styles from './index.module.css';
import BackToTopButton from '../components/back-to-top-button/back-to-top-button';
import { getEatsSearchResults, getProductsSearchResults, getShopsSearchResults } from '../services/axios.service';

function Home({ shops, eats, products }) {

  let sortedShops;
  let sortedEats;
  let sortedProducts

  function sortItemsByRating() {
    sortedShops = shops.sort((a, b) => b.rating - a.rating);
    sortedEats = eats.sort((a, b) => b.rating - a.rating);
    sortedProducts = products.sort((a, b) => b.rating - a.rating);
  }

  sortItemsByRating();

  return (
    <>
      <Navbar />
      <div className={styles.homewrap}>
        <h3>For all your vegan needs</h3>
        <SearchContainer />
        <ThumbnailList listItems={sortedEats} listTitle={'Find the best vegan restaurants'} />
        <ThumbnailList listItems={sortedShops} listTitle={'Find the best vegan shops'} />
        <ThumbnailList listItems={sortedProducts} listTitle={'Find the best vegan products'} />
        <BackToTopButton />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const shops = (await getShopsSearchResults({ searchTerm: "" })).data;
  const eats = (await getEatsSearchResults({ searchTerm: "" })).data;
  const products = (await getProductsSearchResults({ searchTerm: "" })).data;
  return {
    props: {
      shops: shops,
      products: products,
      eats: eats
    },
  };
}

export default Home;
