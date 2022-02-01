import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ReviewsContainer from '../components/reviews-container';
import UserCard from '../components/user-card';

function UserDashBoard() {
  return (
    <div className="user-dashboard">
      <Navbar />
      <br />
      <div>
        <strong>USER DASHBOARD PAGE</strong>
      </div>
      <br />
      <UserCard />
      <br />
      <span>- </span>
      <Link href="/add-content" passHref>
        <button type="button">Add item (link) (component?)</button>
      </Link>
      <br />
      <br />
      <ReviewsContainer />
      <br />
    </div>
  );
}

export default UserDashBoard;
