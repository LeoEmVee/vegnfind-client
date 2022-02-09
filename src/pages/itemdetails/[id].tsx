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

  const [shouldRender, setShouldRender] = useState(false);
  const [reviews, setReviews] = useState(localItem.reviews);
  const [images, setImages] = useState(localItem.images);
  console.log("SHOULDRENDER", localItem);

  useEffect(() => {
    getAnyItemById({ id: localItem.id }).then((res: any) => res)
      .then((res: any) => { setReviews(res.data.reviews); setImages(res.data.images); })
      .catch((err: any) => err)

  }, [shouldRender])

  return (
    <>
      <Navbar />
      <DetailImagesCarousel item={localItem} images={images} setShouldRender={setShouldRender} shouldRender={shouldRender} />
      <DetailCard item={localItem} />
      {localItem.location && <DetailMap location={localItem.location} />}
      {/* Matybe one day}
       {localItem.location && <ThumbnailList listTitle={'Products in this shop'} />} */}
      <ReviewsContainer itemId={localItem.id} reviews={reviews} setShouldRender={setShouldRender} shouldRender={shouldRender} />
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
