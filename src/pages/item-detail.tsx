import DetailCard from '../components/detail-card';
import DetailImagesCarousel from '../components/detail-images-carousel';
import DetailMap from '../components/detail-map';
import Navbar from '../components/navbar/navbar';
import ReviewsContainer from '../components/reviews-container';
import ThumbnailList from '../components/thumbnail-lists/thumbnail-list';

function Detail() {
  return (
    <>
      <Navbar />
      <div className="details-page">
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
        <ThumbnailList listTitle={"Products in this shop"} />
        <br />
        <ReviewsContainer />
        <br />
        <button type="button">Back to top</button>
        <br />
        <br />
      </div>
    </>
  );
}

export default Detail;
