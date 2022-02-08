import { useEffect } from 'react';
import BackToTopButton from '../components/back-to-top-button/back-to-top-button';
import Navbar from '../components/navbar/navbar';
import ReviewsContainer from '../components/reviews/reviews-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import UserCard from '../components/user-card/user-card';
import { loggedUser } from '../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getUserByCondition } from '../services/axios.service';

function UserDashBoard() {
  const { logUser } = useAppSelector(state => state.loginReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function init() {
      const updatedUser = await getUserByCondition({ id: logUser.id });
      dispatch(loggedUser(updatedUser));
    }
    init()
  }, [])


  return (
    <>
      <Navbar />
      <div className="user-dashboard">
        {logUser && <UserCard />}
        {logUser && logUser.favourites?.shopping && <ThumbnailList listItems={logUser.favourites.shopping} listTitle={'Your favourite shops'} />}
        {logUser && logUser.favourites?.shopping && <ThumbnailList listItems={logUser.favourites.eating} listTitle={'Your favourite restaurants'} />}
        {logUser && logUser.favourites?.shopping && <ThumbnailList listItems={logUser.favourites.products} listTitle={'Your favourite products'} />}
        <ReviewsContainer reviews={logUser.reviews} />
        <BackToTopButton />
      </div>
    </>
  );
}

export default UserDashBoard;
