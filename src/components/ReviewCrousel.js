import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    name: "John Doe",
    title: "Senior Developer",
    review:
      "Working with Henry was an incredible experience. His attention to detail and dedication to his craft is unmatched.",
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    review:
      "Henry consistently goes above and beyond. His designs brought our vision to life in ways we didn't imagine possible.",
  },
  {
    name: "Carlos Alvarez",
    title: "UX Researcher",
    review:
      "Henry is not only a skilled designer but also a great team player. His ability to incorporate feedback was exceptional.",
  },
  {
    name: "Carlos Alvarez",
    title: "UX Researcher",
    review:
      "Henry is not only a skilled designer but also a great team player. His ability to incorporate feedback was exceptional.",
  },
  {
    name: "Carlos Alvarez",
    title: "UX Researcher",
    review:
      "Henry is not only a skilled designer but also a great team player. His ability to incorporate feedback was exceptional.",
  },
  {
    name: "Carlos Alvarez",
    title: "UX Researcher",
    review:
      "Henry is not only a skilled designer but also a great team player. His ability to incorporate feedback was exceptional.",
  },
  
];

function ReviewsCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        What People Say About Me
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
              <p className="italic text-gray-600 mb-4 flex-grow">
                "{review.review}"
              </p>
              <div>
                <h4 className="font-bold text-lg mb-1">{review.name}</h4>
                <span className="text-gray-500 text-sm">{review.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewsCarousel;