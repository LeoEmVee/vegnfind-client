import SearchContainer from '../components/search/search-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import Navbar from '../components/navbar/navbar';
import styles from './index.module.css';
import BackToTopButton from '../components/back-to-top-button/back-to-top-button';
import {
  getEatsSearchResults,
  getProductsSearchResults,
  getShopsSearchResults,
  getUserByCondition,
  validateToken,
} from '../services/axios.service';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loggedUser, setAuthorized } from '../redux/actions/loginActions';
import Head from 'next/head';

function Home({ shops, eats, products }: any) {
  const { logUser } = useAppSelector(state => state.loginReducer);
  const dispatch = useAppDispatch();
  let sortedShops;
  let sortedEats;
  let sortedProducts;

  function sortItemsByRating() {
    sortedShops = shops.sort((a, b) => b.rating - a.rating);
    sortedEats = eats.sort((a, b) => b.rating - a.rating);
    sortedProducts = products.sort((a, b) => b.rating - a.rating);
  }

  useEffect(() => {
    async function init() {
      const { access_token } = window.localStorage;
      if (access_token) {
        try {
          const decodedToken: any = await validateToken({
            access_token: access_token,
          });
          const { user } = decodedToken.data;
          const { data } = await getUserByCondition({
            username: user.username,
          });
          dispatch(loggedUser(data));
          dispatch(setAuthorized(true));
          window.localStorage.user = JSON.stringify(data);
        } catch (error) {
          console.log('unauthorized user, maybe token expired');
        }
      } else {
        dispatch(setAuthorized(false));
        console.log('unauthorized user');
      }
    }
    init();
  }, []);

  sortItemsByRating();

  return (
    <>
      <Head>
        <script
          id="stripe-js"
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWfKjO0BKdBXwwtiWXwXuupTgHpl5RwPg&libraries=places&callback=initMap"
        />
      </Head>
      <Navbar />
      <div className={styles.homewrap}>
        <h3>For all your vegan needs</h3>
        <SearchContainer />
        <ThumbnailList
          listItems={sortedEats}
          listTitle={'Find the best vegan restaurants'}
        />
        <ThumbnailList
          listItems={sortedShops}
          listTitle={'Find the best vegan shops'}
        />
        <ThumbnailList
          listItems={sortedProducts}
          listTitle={'Find the best vegan products'}
        />
        <BackToTopButton />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const shops = (await getShopsSearchResults({ searchTerm: '' })).data;
  const eats = (await getEatsSearchResults({ searchTerm: '' })).data;
  const products = (await getProductsSearchResults({ searchTerm: '' })).data;

  return {
    props: {
      shops: shops,
      products: products,
      eats: eats,
    },
  };
}

export default Home;
