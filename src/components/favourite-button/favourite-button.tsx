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

function FavouriteButton({ param, renderedIn }) {

  const itemId = param.id;
  const dispatch = useAppDispatch();
  const { authorized } = useAppSelector(state => state.loginReducer);
  const [logUser, setLogUser] = useState();
  const [isFav, setIsFav] = useState(false);
  const [favs, setFavs] = useState<Fav>()


  function isTheItemFav() {
    try {
      if (favs) {
        const products = favs.products;
        const shopping = favs.shopping;
        const eating = favs.eating;

        (products.some(item => item.id === itemId) ||
          shopping.some(item => item.id === itemId) ||
          eating.some(item => item.id === itemId)
        ) && setIsFav(true);

      }
    } catch (error) {
      console.log(error);
      setIsFav(false);
    }
  }

  useEffect(() => {
    async function getFavs() {
      const favId = { id: logUser.favourites.id };
      const data = (await getFavourites(favId)).data
      console.log("DATA", data);
      setFavs({ ...data })
      isTheItemFav();
    }
    const user = JSON.parse(window.localStorage.user);
    setLogUser(user);
    if (logUser) { getFavs(); } else { setIsFav(false); }
    console.log('FAVS', favs);
  }, [isFav])

  async function updateFavourite(itemId) {
    const favObject = { userId: logUser.id, itemId: itemId }
    await toggleFavourite(favObject);
    //missing logic to update logUser
    console.log("ID", logUser.id);
    const updatedUser = await getUserByCondition({ id: logUser.id });
    window.localStorage.user = JSON.stringify(updatedUser);
    dispatch(loggedUser(updatedUser));
  }

  function handleClickOnFav() {
    console.log("INSIDECLICK", authorized)
    if (authorized && isFav) {
      updateFavourite(itemId);
      setIsFav(false);
    } else if (authorized && !isFav) {
      updateFavourite(itemId);
      setIsFav(true);
    } else if (!authorized) {
      //logic for when user is not logged in
    }
  }

  return (

    <button className={isFav ? styles.favfull : styles.favempty} type="button" onClick={(e) => { e.preventDefault(); handleClickOnFav() }}>
      <FavouriteIcon />
    </button>

  );
}

export default FavouriteButton;
