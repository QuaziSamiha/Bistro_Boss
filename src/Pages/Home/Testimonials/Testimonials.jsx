import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // fetch("reviews.json")
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <section>
        <SectionTitle
          subHeading="What Our Client Say"
          heading={"Testimonials"}
        />
        Reviews: {reviews.length}
        <Swiper navigation={true} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 my-16 flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className="text-3xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials;
