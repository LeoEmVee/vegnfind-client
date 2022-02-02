import ReviewsContainer from '../components/reviews-container';
import ThumbnailList from '../components/thumbnail-list';
import UserCard from '../components/user-card';

function UserDashBoard() {
  return (
    <div className="user-dashboard">
      <UserCard />
      <br />
      <ThumbnailList />
      <ThumbnailList />
      <ThumbnailList />
      <ReviewsContainer />
      <br />
    </div>
  );
}

export default UserDashBoard;
