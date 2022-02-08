import React, { useEffect, useState } from 'react';
import FavouriteIcon from '../../assets/icons/icon-star-empty.svg';
import { loggedUser } from '../../redux/actions/loginActions';
import { setFavourites } from '../../redux/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getFavourites, toggleFavourite } from '../../services/axios.service';
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
    console.log(authorized);
    if (authorized) {
      const favObject = { userId: logUser.id, itemId: item_id };
      console.log('FAVOBJ', favObject);
      await toggleFavourite(favObject);
      const newFavs = await getFavourites({ id: logUser.favourites.id });
      dispatch(setFavourites(newFavs));
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
