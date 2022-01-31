import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ReviewsContainer from '../components/reviews-container';
import UserCard from '../components/user-card';

function UserDashBoard() {
  return (
    <div className="user-dashboard">
      <br />
      <div>
        <strong>USER DASHBOARD PAGE</strong>
      </div>
      <br />
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default UserDashBoard;
