import React from 'react';
import ThumbnailItem from './thumbnail-item';
import styles from './thumbnail-list.module.css'


function ThumbnailList({ listTitle }) {
  return (
    <div className={styles.thumbnaillistwrap}>
      <h4>{listTitle}</h4>
      <div className={styles.itemscontainer}>
        <ThumbnailItem />
        <ThumbnailItem />
        <ThumbnailItem />
        <ThumbnailItem />
        <ThumbnailItem />
      </div>
    </div>
  );
}

export default ThumbnailList;
