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
  const { userFavs } = useAppSelector(state => state.userFavsReducer);
  const dispatch = useAppDispatch();

  let renderShopping = false;
  let renderEating = false;
  let renderProducts = false;
  let renderReviews = false;

  function shouldRenderLists() {
    if (userFavs) {
      if (userFavs.shopping.length) { renderShopping = true; }
      if (userFavs.eating.length) { renderEating = true; }
      if (userFavs.products.length) { renderProducts = true; }
    }
    if (logUser && logUser.reviews) {
      if (logUser.reviews.length) { renderReviews = true; }
    }
  }

  shouldRenderLists();


  useEffect(() => {
    async function init() {
      if (logUser) {
        const updatedUser = await getUserByCondition({ id: logUser.id });
        dispatch(loggedUser(updatedUser.data));
      }
    }
    init()
  }, [])

  return (
    <>
      <Navbar />
      <div>
        {logUser && <UserCard />}
        {userFavs && userFavs.shopping && renderShopping && <ThumbnailList listItems={userFavs.shopping} listTitle={'Your favourite shops'} />}
        {userFavs && userFavs.eating && renderEating && <ThumbnailList listItems={userFavs.eating} listTitle={'Your favourite restaurants'} />}
        {userFavs && userFavs.products && renderProducts && <ThumbnailList listItems={userFavs.products} listTitle={'Your favourite products'} />}
        {logUser && renderReviews && <ReviewsContainer reviews={logUser.reviews} username={logUser.username} />}
        <BackToTopButton />
      </div>
    </>
  );
}

export default UserDashBoard;
