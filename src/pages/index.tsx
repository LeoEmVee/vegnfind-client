import { useEffect } from 'react';
import SearchContainer from '../components/search-container';
import ThumbnailList from '../components/thumbnail-list';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loggedUser } from '../redux/actions/loginActions';
import { getUserByCondition } from '../services/axios.service';
import jwt from 'jsonwebtoken';
import Navbar from '../components/navbar/navbar';
import styles from './index.module.css'

function Home() {
  const { logUser } = useAppSelector(state => state.loginReducer);
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    async function onInit() {
      const { access_token } = window.localStorage;
      if (access_token) {
        try {
          const decodedToken: any = jwt.verify(
            access_token,
            `${process.env.NEXT_PUBLIC_SECRET}`,
          );
          const { username } = decodedToken;
          const { data } = await getUserByCondition({ username: username });
          if (!logUser) {
            dispatch(loggedUser(data));
          }
          console.log('authorized user:', logUser);
        } catch (error) {
          console.log('unauthorized user, maybe token expired');
        }
      } else {
        console.log('unauthorized user');
      }
    }
    onInit();
  }, [logUser]);

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
