import { useEffect } from 'react';
import { loggedUser, setAuthorized } from '../../redux/actions/loginActions';
import IAction from '../../redux/actions/type';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  getUserByCondition,
  validateToken,
} from '../../services/axios.service';
import Footer from '../footer/footer';

interface IFLayout {
  children: React.ReactNode;
}

function Layout({ children }: IFLayout) {
  const { logUser } = useAppSelector(state => state.loginReducer);
  const dispatch = useAppDispatch();

  console.log('logUser', logUser);
  useEffect(() => {
    async function onInit() {
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
          dispatch(loggedUser(data)); // on a production ready App this logUser should be an array of users currently logged
          window.localStorage.user = JSON.stringify(data);
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
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
