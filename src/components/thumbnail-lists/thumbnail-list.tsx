import React from 'react';
import ThumbnailItem from './thumbnail-item';
import styles from './thumbnail-list.module.css'


function ThumbnailList({ listTitle, listItems }) {
  return (
    <div className={styles.thumbnaillistwrap}>
      <h4>{listTitle}</h4>
      <div className={styles.itemscontainer}>
        {listItems && listItems.map(item => <ThumbnailItem item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default ThumbnailList;
