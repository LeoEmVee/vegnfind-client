import React, { useEffect, useState } from 'react';
import FavouriteIcon from '../../assets/icons/icon-star-empty.svg';
import { loggedUser } from '../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  toggleFavourite,
  getUserByCondition,
  getFavourites,
} from '../../services/axios.service';
import styles from './favourite-button.module.css';

interface Fav {
  products: any[];
  shopping: any[];
  eating: any[];
}

interface IProp {
  item_id: string;
  // renderedIn?: string;
}

function FavouriteButton({ item_id /*renderedIn*/ }: IProp) {
  console.log('PARAM', item_id);
  const dispatch = useAppDispatch();
  const { authorized } = useAppSelector(state => state.loginReducer);
  const [logUser, setLogUser] = useState();
  const [isFav, setIsFav] = useState(false);
  const [favs, setFavs] = useState<Fav>();

  function isTheItemFav(favsList: any) {
    const products = favsList.products;
    const shopping = favsList.shopping;
    const eating = favsList.eating;

    if (
      products.some((item: any) => item.id === item_id) ||
      shopping.some((item: any) => item.id === item_id) ||
      eating.some((item: any) => item.id === item_id)
    ) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }

  useEffect(() => {
    // async function getFavs() {
    //   const favId = logUser && { id: logUser.favourites.id };
    //   const data = (await getFavourites(favId)).data;
    //   console.log('DATA', data);
    //   setFavs({ ...data });
    //   isTheItemFav();
    // }
    // const user = JSON.parse(window.localStorage.user);
    // setLogUser(user);
    // if (logUser) {
    //   getFavs();
    // } else {
    //   setIsFav(false);
    // }
    // console.log('FAVS', favs);
  }, [isFav]);

  async function updateFavourite(item_id: string, user_id: string) {
    const favObject = { userId: user_id, itemId: item_id };
    await toggleFavourite(favObject);
    //missing logic to update logUser
    const updatedUser = await getUserByCondition({ id: user_id });
    window.localStorage.user = JSON.stringify(updatedUser);
    dispatch(loggedUser(updatedUser));
  }

  async function handleClickOnFav() {
    const user = JSON.parse(window.localStorage.user);
    if (user) {
      const favId = { id: user.favourites.id };
      const { data } = await getFavourites(favId);
      // setFavs(data);
      isTheItemFav(data);
    } else {
      setIsFav(false);
    }
    if (authorized && isFav) {
      updateFavourite(item_id, user.id);
      setIsFav(false);
    } else if (authorized && !isFav) {
      updateFavourite(item_id, user.id);
      setIsFav(true);
    } else if (!authorized) {
      console.log('NOT LOGGED IN!');
      //logic for when user is not logged in
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

export default FavouriteButton;
