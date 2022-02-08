import React, { useEffect, useState } from 'react';
import FavouriteIcon from '../../assets/icons/icon-star-empty.svg';
import { loggedUser } from '../../redux/actions/loginActions';
import { setFavourites } from '../../redux/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getFavourites, getUserByCondition, toggleFavourite } from '../../services/axios.service';
import styles from './favourite-button.module.css';


function NewFavouriteButton({ item_id }) {

  const dispatch = useAppDispatch();
  const userFavs = useAppSelector(state => state.userFavsReducer.userFavs)
  const { authorized, logUser } = useAppSelector(state => state.loginReducer);
  const [isFav, setIsFav] = useState(false);


  useEffect(() => {
    isTheItemFav(item_id)
  }, []);

  function isTheItemFav(itemId) {
    if (userFavs) {
      if (userFavs.eating) {
        if (userFavs.eating.some(item => item.id === itemId)) { setIsFav(true) }
      }
      if (userFavs.shopping) {
        if (userFavs.shopping.some(item => item.id === itemId)) { setIsFav(true) }
      }
      if (userFavs.products) {
        if (userFavs.products.some(item => item.id === itemId)) { setIsFav(true) }
      }
    }
  }

  async function handleClickOnFav() {
    if (authorized) {
      const favObject = { userId: logUser.id, itemId: item_id };
      await toggleFavourite(favObject);

      let userFavouritesId;

      if (!logUser.favourites) {
        const newUser = await getUserByCondition({ id: logUser.id });
        userFavouritesId = newUser.data.favourites.id;
      } else {
        userFavouritesId = logUser.favourites.id;
      }

      const newFavs = await getFavourites({ id: userFavouritesId });
      dispatch(setFavourites(newFavs.data));
      setIsFav(!isFav);
    } else {
      //Logic for unlogged user
    }
  }

  return (
    <button
      className={isFav ? styles.favfull : styles.favempty}
      type="button"
      onClick={e => {
        e.preventDefault();
        handleClickOnFav();
      }}>
      <FavouriteIcon />
    </button>
  );
}

export default NewFavouriteButton;
