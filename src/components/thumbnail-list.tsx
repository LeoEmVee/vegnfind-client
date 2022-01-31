import React from 'react';
import ThumbnailItem from './thumbnail-item';

// interface IFThumbnailList {
//   prop: any;
// }

function ThumbnailList() {
  return (
    <div className="thumbnail-list">
      <div>- Thumbnail List</div>
      <ThumbnailItem />
    </div>
  );
}

export default ThumbnailList;
