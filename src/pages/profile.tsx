import { getUserByCondition, validateToken } from '../services/axios.service';
import Home from './index';

export async function getServerSideProps() {
  const { access_token } = window.localStorage;
  let user;
  if (access_token) {
    try {
      const decodedToken: any = await validateToken({
        access_token: access_token,
      });
      const { user } = decodedToken.data;
      const { data } = await getUserByCondition({
        username: user.username,
      });
      window.localStorage.user = JSON.stringify(data);
    } catch (error) {
      console.log('unauthorized user, maybe token expired');
    }
  } else {
    console.log('unauthorized user');
  }

  if (!user) {
    return {
      redirect: {
        destination: '/index',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}

const Profile = ({ user }) => {
  // Show the user. No loading state is required
  return (
    <>
      <Home />
    </>
  );
};

export default Profile;
