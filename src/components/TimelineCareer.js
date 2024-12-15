import React, {useState, useEffect} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Text,
  Box,
  Divider,
  Circle,
  Stack,
  Flex,
  VStack,
  useTheme,
  HStack,
  Button,
  Spinner,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { faAdd, faBriefcase, faChevronUp, faSchool, faUser, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badges from "./Badges"
import { careerData } from "../utils/careerData";
import { sortByDate } from "../utils/sortByDate";
import { careerTimelineAPI } from "../api/careerTimelineApi";

const TimelineCareer = () => {
  const titleText = "Career Timeline";
  const theme = useTheme();
  const secondaryColor = theme.colors.semantic.text.primary;
  const mutedColor = theme.colors.semantic.text.muted;
  const primaryColor = theme.colors.semantic.background.primary;


  //API CALL
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchTimeLine = async () => {
  //     try {
  //       const data = await careerTimelineAPI.getAllEntries();
  //       setEntries(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchTimeLine();
  // }, []);

  // if(isLoading) return <FullScreenSection><Spinner /> <Text as="h2">Loading...</Text></FullScreenSection>
  // if(error) return <FullScreenSection> <Text as="h2">Error: {error}</Text></FullScreenSection>

  const [element, setElement] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    loadMore()
  }, []);

  const loadMore = () => {
    const nextElements = careerData.sort(sortByDate).slice(element.length, element.length + visibleCount)
    setElement(prevElement=> [...prevElement, ...nextElements])
  }

  const collapseAll = () => {
    setElement([...element.slice(0,2)])
  }

  const getTimeLineElement = () => {
    return element.map((data, index) => (
      <VerticalTimelineElement
        key={index}
        date={data.date}
        contentStyle={{background: primaryColor, color: secondaryColor}}
        iconStyle={{ background: mutedColor, color: primaryColor }}
        icon={<FontAwesomeIcon icon={data.icon} />}
      >
        
        <Stack>
          <Text as="h3" textStyle="captionbold" textAlign={'center'}>
            {data.role}
          </Text>
        </Stack>
        <Stack>
          <Text as="h4" textStyle="caption" textAlign={'center'}>
            {data.company}
          </Text>
        </Stack>
        <Stack textAlign={"start"}>
          <Text as="p" textStyle="caption">
            {data.description}
          </Text>
        </Stack>
        <HStack pt={4}>
          <Badges>{data.tools}</Badges>
        </HStack>
      </VerticalTimelineElement>
    ))
  }



  
  

  return (
    <FullScreenSection isDarkBackground justifyContent='center' alignItems='center' >
      <Text as="h2" textStyle="h2">
        {titleText.toUpperCase()}
      </Text>
      <VerticalTimeline lineColor={primaryColor}>
        {getTimeLineElement()}

        {element.length < careerData.length &&(
          <VerticalTimelineElement iconOnClick={loadMore} icon = {<FontAwesomeIcon icon={faAdd} />} iconStyle={{ background: secondaryColor, color: primaryColor, cursor:'pointer' }}/>
          
        )}

        {element.length === careerData.length &&(
          <VerticalTimelineElement iconOnClick={collapseAll} icon = {<FontAwesomeIcon icon={faChevronUp} />} iconStyle={{ background: primaryColor, color: secondaryColor, cursor:'pointer' }}/>
          
        )}

      </VerticalTimeline>
        
        
    </FullScreenSection>
  );
};

export default TimelineCareer;
