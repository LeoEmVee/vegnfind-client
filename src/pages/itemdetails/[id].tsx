import { useEffect, useState } from 'react';
import BackToTopButton from '../../components/back-to-top-button/back-to-top-button';
import DetailCard from '../../components/item-details/detail-card';
import DetailImagesCarousel from '../../components/item-details/detail-images-carousel';
import DetailMap from '../../components/item-details/detail-map';
import Navbar from '../../components/navbar/navbar';
import ReviewsContainer from '../../components/reviews/reviews-container';
import ThumbnailList from '../../components/thumbnail-lists/thumbnail-list';
import {
  getEatById,
  getProductById,
  getShopById,
} from '../../services/axios.service';

function Detail({ param }: any) {
  const [item, setItem] = useState();
  useEffect(() => {
    async function init() {
      getEatById({ id: param.id })
        .then((res: any) => res)
        .then((res: any) => setItem(res.data))
        .catch((err: any) => err);

      getShopById({ id: param.id })
        .then((res: any) => res)
        .then((res: any) => setItem(res.data))
        .catch((err: any) => err);

      getProductById({ id: param.id })
        .then((res: any) => res)
        .then((res: any) => setItem(res.data))
        .catch((err: any) => err);
    }
    init();
  }, []);
  console.log('Nombre: ', item);

  return (
    <>
      <Navbar />
      <DetailImagesCarousel />
      <DetailCard param={item} />
      <DetailMap />
      <ThumbnailList listTitle={'Products in this shop'} />
      <ReviewsContainer param={param} reviews={item.reviews} />
      <BackToTopButton />
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      param: ctx.query,
    },
  };
}

export default Detail;
