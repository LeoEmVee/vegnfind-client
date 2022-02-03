import React from 'react';
import ThumbnailItem from './thumbnail-item';
import styles from './thumbnail-list.module.css'


function ThumbnailList({ listTitle }) {
  return (
    <div className={styles.thumbnaillistwrap}>
      <h4>{listTitle}</h4>
      <ThumbnailItem />
    </div>
  );
}

export default ThumbnailList;
