import DetailCard from '../components/detail-card';
import DetailImagesCarousel from '../components/detail-images-carousel';
import DetailMap from '../components/detail-map';
import Navbar from '../components/navbar/navbar';
import ReviewsContainer from '../components/reviews/reviews-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';

function Detail() {
  return (
    <>
      <Navbar />
      <DetailImagesCarousel />
      <DetailCard />
      <DetailMap />
      <ThumbnailList listTitle={'Products in this shop'} />
      <ReviewsContainer />
      <button type="button">Back to top</button>
    </>
  );
}

export default Detail;
