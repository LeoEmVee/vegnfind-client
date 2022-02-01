import DetailCard from '../components/detail-card';
import DetailImagesCarousel from '../components/detail-images-carousel';
import DetailMap from '../components/detail-map';
import Navbar from '../components/navbar';
import ReviewsContainer from '../components/reviews-container';
import ThumbnailList from '../components/thumbnail-list';

function Detail() {
  return (
    <div className="details-page">
      <Navbar />
      <br />
      <div>
        <strong>DETAILS PAGE</strong>
      </div>
      <br />
      <DetailImagesCarousel />
      <br />
      <DetailCard />
      <br />
      <DetailMap />
      <br />
      <ThumbnailList />
      <br />
      <ReviewsContainer />
      <br />
      <button type="button">Back to top</button>
      <br />
      <br />
    </div>
  );
}

export default Detail;
