import { useEffect } from 'react';
import Navbar from '../components/navbar';
import SearchContainer from '../components/search-container';
import ThumbnailList from '../components/thumbnail-list';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loggedUser } from '../redux/actions/loginFormActions';
import { getUserByCondition } from '../services/axios.service';
import jwt from 'jsonwebtoken';

function Home() {
  const { logUser } = useAppSelector(state => state.loginForm);
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    const { access_token } = window.localStorage;
    if (access_token) {
      try {
        const decodedToken: any = jwt.verify(
          access_token,
          `${process.env.NEXT_PUBLIC_SECRET}`,
        );
        const name = decodedToken.username;
        getUserByCondition(name)
          .then(res => loggedUser(res))
          .catch(err => err);
        console.log('authorized user:', logUser);
      } catch (error) {
        console.log('unauthorized user, maybe token expired');
      }
    } else {
      console.log('unauthorized user');
    }
  }, []);

  return (
    <div className="home">
      <Navbar />
      <br />
      <div>
        <strong>HOMEPAGE</strong>
      </div>
      <br />
      <SearchContainer />
      <br />
      <ThumbnailList />
      <ThumbnailList />
      <ThumbnailList />
      <br />
    </div>
  );
}

export default Home;
