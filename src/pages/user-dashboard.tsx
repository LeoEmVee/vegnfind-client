import BackToTopButton from '../components/back-to-top-button/back-to-top-button';
import Navbar from '../components/navbar/navbar';
import ReviewsContainer from '../components/reviews/reviews-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import UserCard from '../components/user-card/user-card';
import { useAppSelector } from '../redux/store';

function UserDashBoard() {
  const { logUser } = useAppSelector(state => state.loginReducer);
  console.log(logUser);
  return (
    <>
      <Navbar />
      <div className="user-dashboard">
        {logUser && <UserCard />}
        {logUser.favourites?.shopping && <ThumbnailList listItems={logUser.favourites.shopping} listTitle={'Your favourite shops'} />}
        {logUser.favourites?.shopping && <ThumbnailList listItems={logUser.favourites.eating} listTitle={'Your favourite restaurants'} />}
        {logUser.favourites?.shopping && <ThumbnailList listItems={logUser.favourites.products} listTitle={'Your favourite products'} />}
        <ReviewsContainer />
        <BackToTopButton />
      </div>
    </>
  );
}

export default UserDashBoard;
