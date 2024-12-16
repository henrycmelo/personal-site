import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Stack, Text, Spinner } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { reviewsAPI } from "../api/reviewsApi";



function ReviewsCarousel() {
  const {capitalizeEachWord} = useAlertContext();
  const titleText = "What poeple say about me";
  const [review, setReview] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //api call
  useEffect(()=>{
    const fetchReviews = async () =>{
      try{
        const data = await reviewsAPI.getAllEntries();
        setReview(data)
      } catch (err){
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchReviews()
  },[])

 if (isLoading) return <Spinner />
  if (error) return <Text>{error}</Text>
 
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
        {review.map((review, index) => (
          <SwiperSlide key={review.id || index}>
            <Stack gap={0} textStyle="caption" color={"semantic.text.primary"}>
              <Text as="p" textStyle="caption" color={"semantic.text.primary"}>
                {review.content}
              </Text>
              <Text pt={2} as="p" textStyle='captionbold'>{review.reviewer_name}</Text>
            </Stack>
            <Stack>
              <Text as="p">
                {review.reviewer_role}
              </Text>
            </Stack>
            <Stack>
              <Text as="p">
                {review.company}
              </Text>
            </Stack>

            <Stack color='semantic.text.muted'>
              <a href={review.linkedin_url} target="_blank" rel="noreferrer">
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
