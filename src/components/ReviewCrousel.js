import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {reviews} from "../utils/reviews";



function ReviewsCarousel() {
  const {capitalizeEachWord} = useAlertContext();
  const titleText = "What poeple say about me";
  return (
    <Box bg="semantic.background.secondary" pt={4} pb={16}>
      <Text
        as="h2"
        color="semantic.text.primary"
        textStyle="p"
        textAlign={"center"}
      >
        {capitalizeEachWord(titleText)}
      </Text>
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
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Stack gap={0} textStyle="caption" color={"semantic.text.primary"}>
              <Text as="p" textStyle="caption" color={"semantic.text.primary"}>
                {review.review}
              </Text>
              <Text as="p" textStyle='captionbold'>{review.name}</Text>
            </Stack>
            <Stack>
              <Text as="p">
                {review.title}, {review.company}
              </Text>
            </Stack>

            <Stack color='semantic.text.muted'>
              <a href={review.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon size="xl" icon={faLinkedin} />
              </a>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ReviewsCarousel;
