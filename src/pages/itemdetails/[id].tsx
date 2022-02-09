import { useEffect, useState } from 'react';
import BackToTopButton from '../../components/back-to-top-button/back-to-top-button';
import DetailCard from '../../components/item-details/detail-card';
import DetailImagesCarousel from '../../components/item-details/detail-images-carousel';
import DetailMap from '../../components/item-details/detail-map';
import Navbar from '../../components/navbar/navbar';
import ReviewsContainer from '../../components/reviews/reviews-container';
import ThumbnailList from '../../components/thumbnail-lists/thumbnail-list';
import {
  getAnyItemById,
  getEatById,
  getProductById,
  getShopById,
} from '../../services/axios.service';

function Detail({ localItem }: any) {
  return (
    <>
      <Navbar />
      <DetailImagesCarousel />
      <DetailCard item={localItem} />
      <DetailMap location={localItem.location} />
      <ThumbnailList listTitle={'Products in this shop'} />

      <ReviewsContainer itemId={localItem.id} reviews={localItem.reviews} />

      <BackToTopButton />
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const localItem = (await getAnyItemById(ctx.query)).data;

  return {
    props: {
      param: ctx.query,
      localItem: localItem,
    },
  };
}

export default Detail;
