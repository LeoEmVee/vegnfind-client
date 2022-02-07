import React, { useEffect, useState } from 'react';
import FavouriteIcon from '../../assets/icons/icon-star-empty.svg'
import { loggedUser } from '../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toggleFavourite, getUserByCondition } from '../../services/axios.service';
import styles from './favourite-button.module.css'

function FavouriteButton({ itemId, renderedIn }) {

  const dispatch = useAppDispatch();
  const { authorized, logUser } = useAppSelector(state => state.loginReducer);
  const [isFav, setIsFav] = useState(false);

  function isTheItemFav() {
    if (logUser.favourites.products.includes(itemId) ||
      logUser.favourites.eating.includes(itemId) ||
      logUser.favourites.shopping.includes(itemId)) {
      setIsFav(true);
    } else {
      setIsFav(false)
    }
  }

  useEffect(() => {
    isTheItemFav();
  }, [logUser])

  async function updateFavourite(itemId) {
    const favObject = { userId: logUser.id, itemId: itemId }
    await toggleFavourite(favObject);
    const newUser = await getUserByCondition(logUser.id);
    dispatch(loggedUser(newUser))
  }

  function handleClickOnFav(itemId) {
    if (logUser && isFav) {
      setIsFav(false);
      updateFavourite(itemId);
    } else if (logUser && !isFav) {
      setIsFav(true);
      updateFavourite(itemId);
    } else if (!logUser) {
      //logic for when user is not logged in
    }
  }

  console.log(logUser);

  return (

    <button className={styles.favouritebutton} type="button" onClick={(e) => { e.preventDefault(); handleClickOnFav(itemId) }}>
      <FavouriteIcon className={isFav ? styles.empty : styles.full} />
    </button>

  );
}

export default FavouriteButton;
