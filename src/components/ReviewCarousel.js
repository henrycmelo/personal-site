import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Stack, Text, Spinner} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { reviewsAPI } from "../api/reviewsApi";
import ButtonLink from "./ButtonLink";
import MuteButton from "./MuteButton";

function ReviewsCarousel() {
  const { capitalizeEachWord, handlePath } = useAlertContext();
  const titleText = "What people say about me";
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState({});

  //api call
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await reviewsAPI.getAllEntries();
        // Filter to only show approved reviews
        const approvedReviews = data.filter(review => review.status === "approved");
        setReviews(approvedReviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  // Don't render the carousel if there are no approved reviews
  const hasReviews = reviews.length > 0;

  return (
    <Box
      bg="transparent"
      pt={4}
      pb={16}
      sx={{
        ".swiper-button-prev, .swiper-button-next": { color: "gray.600" },
        ".swiper-pagination-bullet": { backgroundColor: "semantic.text.muted" },
        ".swiper-pagination-bullet-active": { backgroundColor: "gray.600" },
      }}
    >
      <Text as="h2" textStyle={"h2"} pb={6}>
        {capitalizeEachWord(titleText)}{" "}
      </Text>

      {hasReviews ? (
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
            <SwiperSlide key={review.id || index}>
              <Stack gap={0} textStyle="caption" color={"semantic.text.primary"}>
                <Text as="p" textStyle="caption" color={"semantic.text.primary"}>
                  {showMore[review.id] ? (
                    <>
                      {review.content}
                      <ButtonLink
                        color="semantic.text.primary"
                        textStyle="button"
                        variant="link"
                        onClick={() => handleShowMore(review.id)}
                      >
                        Show Less
                      </ButtonLink>
                    </>
                  ) : (
                    <>
                      {review.content.slice(0, 100)}...
                      <ButtonLink
                        color="semantic.text.primary"
                        textStyle="caption"
                        variant="link"
                        onClick={() => handleShowMore(review.id)}
                      >
                        View More
                      </ButtonLink>
                    </>
                  )}
                </Text>
                <Text pt={2} as="p" textStyle="captionbold" >
                  {review.reviewer_name}
                </Text>
              </Stack>
              <Stack>
                <Text as="p">{review.reviewer_role}</Text>
              </Stack>
              <Stack>
                <Text as="p">{review.company}</Text>
              </Stack>

              {review.linkedin_url && (
                <Stack color='semantic.accent' >
                  <a href={review.linkedin_url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon size="xl" icon={faLinkedin} />
                  </a>
                </Stack>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Text as="p" textStyle="p" pb={6} color="gray.600">
          No reviews to display yet. Be the first to share your experience!
        </Text>
      )}

      <Box py={6}>
        <Text as='p' textStyle={"p"} pb={2} color='gray.600'>
          Have we worked together? Please contact me to request an invitation code, then you can leave a review.
        </Text>
        <MuteButton onClick={()=>handlePath('reviews/leavereview')}>Leave a review</MuteButton>
      </Box>
    </Box>
  );
}

export default ReviewsCarousel;