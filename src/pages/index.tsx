import { useEffect } from 'react';
import SearchContainer from '../components/search/search-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loggedUser, setAuthorized } from '../redux/actions/loginActions';
import { getUserByCondition, validateToken } from '../services/axios.service';
import Navbar from '../components/navbar/navbar';
import styles from './index.module.css';
import {
  setSearchResults,
  setSearchTerm,
} from '../redux/actions/searchActions';

function Home() {
  const { logUser } = useAppSelector(state => state.loginReducer);
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    async function onInit() {
      dispatch(setSearchResults([]));
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
          await dispatch(loggedUser(data)); // on a production ready App this logUser should be an array of users currently logged
          console.log('logUser', logUser);
          dispatch(setAuthorized(true));
        } catch (error) {
          console.log('unauthorized user, maybe token expired');
        }
      } else {
        console.log('unauthorized user');
      }
    }
    onInit();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.homewrap}>
        <h3>For all your vegan needs</h3>
        <SearchContainer />
        <ThumbnailList listTitle={'Find the best vegan restaurants'} />
        <ThumbnailList listTitle={'Find the best vegan shops'} />
        <ThumbnailList listTitle={'Find the best vegan products'} />
      </div>
    </>
  );
}

export default Home;
