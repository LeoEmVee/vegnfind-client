import React from 'react';
import styles from './detail-images-carousel.module.css'

function DetailImagesCarousel() {
  return (
    <div className={styles.carouselwrap}>
      <img src="https://res.cloudinary.com/daq7z9fqb/image/upload/v1643880889/w2zqalie6yint1jl9z7m.jpg" alt="bla" />
      <img src="https://res.cloudinary.com/daq7z9fqb/image/upload/v1643883841/xlrkcu5vzxwemio6m5j3.jpg" alt="" />
      <img src="https://res.cloudinary.com/daq7z9fqb/image/upload/v1643832630/uggfttlcsxnouitrqfyr.jpg" alt="" />
      <img src="https://res.cloudinary.com/daq7z9fqb/image/upload/v1643913893/zfexot2scs3kgmddybrr.jpg" alt="" />
      <img src="https://res.cloudinary.com/daq7z9fqb/image/upload/v1643830192/dfqy4i9t39nccmghh7d6.jpg" alt="" />
    </div>
  );
}

export default DetailImagesCarousel;
