import BackToTopButton from '../../components/back-to-top-button/back-to-top-button';
import DetailCard from '../../components/item-details/detail-card';
import DetailImagesCarousel from '../../components/item-details/detail-images-carousel';
import DetailMap from '../../components/item-details/detail-map';
import Navbar from '../../components/navbar/navbar';
import ReviewsContainer from '../../components/reviews/reviews-container';
import ThumbnailList from '../../components/thumbnail-lists/thumbnail-list';

function Detail({ param }: any) {
  (async function getItem() {
    try {
      const eat = await getEatById(param);
      const shop = await getShopById(param);
      const product = await getProductById(param);
      if (shop) return shop;
      if (eat) return eat;
      if (product) return product;
    } catch (error) {
      console.log(error);
    }
  })();
  return (
    <>
      <Navbar />
      <DetailImagesCarousel />
      <DetailCard param={param} />
      <DetailMap />
      <ThumbnailList listTitle={'Products in this shop'} />
      <ReviewsContainer param={param} />
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
