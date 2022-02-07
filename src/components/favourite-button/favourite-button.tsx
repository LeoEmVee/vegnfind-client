import React, { useEffect, useState } from 'react';
import FavouriteIcon from '../../assets/icons/icon-star-empty.svg'
import { loggedUser } from '../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toggleFavourite, getUserByCondition, getFavourites } from '../../services/axios.service';
import styles from './favourite-button.module.css'

interface Fav {
  products: any[];
  shopping: any[];
  eating: any[];
}

function FavouriteButton({ itemId, renderedIn }) {

  const dispatch = useAppDispatch();
  const { authorized, logUser } = useAppSelector(state => state.loginReducer);
  const [isFav, setIsFav] = useState(false);
  const [favs, setFavs] = useState<Fav>()


  function isTheItemFav() {
    console.log("second favs", favs);
    try {
      (favs?.products.includes(itemId) ||
        favs?.eating.includes(itemId) ||
        favs?.shopping.includes(itemId)) && setIsFav(true);
      console.log("isFav?", isFav);
    } catch (error) {
      console.log(error);
      setIsFav(false);
    }
  }

  useEffect(() => {
    async function getFavs() {
      if (logUser) {
        const favId = { id: logUser.favourites.id };
        const data = (await getFavourites(favId)).data
        console.log("data", data);
        setFavs(data);
        console.log("first favs", favs);
        isTheItemFav();
      } else {
        setIsFav(false);
      }
    }
    getFavs();
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

  return (

    <button className={isFav ? styles.favfull : styles.favempty} type="button" onClick={(e) => { e.preventDefault(); handleClickOnFav(itemId) }}>
      <FavouriteIcon />
    </button>

  );
}

export default FavouriteButton;
