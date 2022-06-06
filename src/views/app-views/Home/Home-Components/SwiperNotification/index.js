import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "./swiper-style.scss";
import { Link } from "react-router-dom";

const SwiperNotification = () => {
  return (
    <div className="swiper-resp">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        className="swiper-notification"
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>We have extended our return period to 60 days.</SwiperSlide>
        <SwiperSlide>
          New Release: Nike App.{" "}
          <Link to="/nike-app">
            <span className="app-link">Learn more</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperNotification;
