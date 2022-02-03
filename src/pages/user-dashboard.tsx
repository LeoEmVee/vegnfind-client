import Navbar from '../components/navbar/navbar';
import ReviewsContainer from '../components/reviews-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';
import UserCard from '../components/user-card';

function UserDashBoard() {
  return (
    <>
      <Navbar />
      <div className="user-dashboard">
        <UserCard />
        <ThumbnailList listTitle={'Your favourite shops'} />
        <ThumbnailList listTitle={'Your favourite restaurants'} />
        <ThumbnailList listTitle={'Your favourite products'} />
        <ReviewsContainer />
      </div>
    </>
  );
}

export default UserDashBoard;
