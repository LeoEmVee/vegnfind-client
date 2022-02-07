import BackToTopButton from '../components/back-to-top-button/back-to-top-button';
import Navbar from '../components/navbar/navbar';
import ReviewsContainer from '../components/reviews/reviews-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import UserCard from '../components/user-card/user-card';
import { useAppSelector } from '../redux/store';

function UserDashBoard() {
  const { logUser } = useAppSelector(state => state.loginReducer);

  return (
    <>
      <Navbar />
      <div className="user-dashboard">
        {logUser && <UserCard />}
        <ThumbnailList listTitle={'Your favourite shops'} />
        <ThumbnailList listTitle={'Your favourite restaurants'} />
        <ThumbnailList listTitle={'Your favourite products'} />
        <ReviewsContainer />
        <BackToTopButton />
      </div>
    </>
  );
}

export default UserDashBoard;
