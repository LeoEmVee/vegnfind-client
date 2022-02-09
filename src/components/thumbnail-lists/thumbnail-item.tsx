import React from 'react';
import styles from './thumbnail-item.module.css'
import FullVeganSmallFlag from '../../assets/flags/flag-full-vegan-small.svg'
import PartVeganSmallFlag from '../../assets/flags/flag-part-vegan-small.svg'
import RatingContainer from '../reviews/rating-container';
import Link from 'next/link';


function ThumbnailItem({ item }) {
  return (
    <Link key={item.id} href={`/itemdetails/${item.id}`} passHref>
      <div className={styles.listitemwrap} >
        <img src={item.thumbImg} alt="" />
        <div className={styles.listitemcontent}>
          <div className={styles.ratingwrap}>
            <RatingContainer itemDetails={item} />
          </div>
          {item.isVegan === false ? <PartVeganSmallFlag className={styles.flag} /> : <FullVeganSmallFlag className={styles.flag} />}
          <p className={styles.itemtitle}>{item.name}</p>
          {item.location && <p className={styles.itemlocation}>{item.location.city}, {item.location.country}</p>}
        </div>
      </div>
    </Link>
  );
}

export default ThumbnailItem;
