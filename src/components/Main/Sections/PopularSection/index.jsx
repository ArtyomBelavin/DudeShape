import { useRef } from "react";
import styles from "./PopularSection.module.scss";
import popularOneImg from "../../../../images/popular-1.png";
import popularTwoImg from "../../../../images/popular-2.png";
import popularThreeImg from "../../../../images/popular-3.png";
import nextBtn from "../../../../images/vectors/nextBtn.svg";
import prevBtn from "../../../../images/vectors/prevBtn.svg";
import PopularCard from "./PopularCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const PopularSection = () => {
  const sliderList = [
    {
      id: 1,
      img: popularOneImg,
    },
    {
      id: 2,
      img: popularTwoImg,
    },
    {
      id: 3,
      img: popularThreeImg,
    },
    {
      id: 4,
      img: popularOneImg,
    },
    {
      id: 5,
      img: popularTwoImg,
    },
    {
      id: 6,
      img: popularThreeImg,
    },
  ];

  const swiperRef = useRef(null);
  return (
    <section className={styles.popular}>
      <div className={styles.popularTop}>
        <div className={styles.text}>
          <h2>Our Popular Furniture</h2>
          <p>
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
        </div>
        <div className={styles.btn}>
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <img src={prevBtn} alt="" />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <img src={nextBtn} alt="" />
          </button>
        </div>
      </div>

      <div className="flex justify-between flex-wrap">
        <Swiper
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {sliderList.map((item) => (
            <SwiperSlide key={item.id}>
              <PopularCard img={item.img} id={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularSection;
