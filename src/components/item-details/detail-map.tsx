import React from 'react';
import styles from './detail-map.module.css'

import dynamic from 'next/dynamic';
const MapView = dynamic(() => import('./map-container'), { ssr: false })


function DetailMap({ location }) {
  return (
    <div className={styles.mapcontainer}>
      <MapView location={location} />
    </div>
  );
}

export default DetailMap;
