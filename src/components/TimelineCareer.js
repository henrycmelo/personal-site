import React from "react";
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
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { faBriefcase, faSchool, faUser, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badges from "./Badges";

const TimelineCareer = () => {
  const titleText = "Career Timeline";
  const theme = useTheme();
  const secondaryColor = theme.colors.semantic.text.primary;
  const mutedColor = theme.colors.semantic.text.muted;
  const primaryColor = theme.colors.semantic.background.primary;
  const careerData = [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      icon: faBriefcase,
      period: "2022 - Present",
      description:
        "Led development of core products, managed team of 5 engineers, implemented CI/CD pipeline, reduced deployment time by 40%.",
      tools: ["React", "Node.js", "Docker", "Kubernetes", "AWS"],
    },
    {
      role: "Graduate Student",
      company:"Pratt Institute",
      icon: faUserGraduate,
      period: "2022 - 2024",
      description:
        "Pursuing M.S. in Information Experience Design, focusing on UX research and design, and front-end development.",
      tools: ["UX Research", "Figma", "React", "Node.js"],
    },
    {
      role: "Software Engineer",
      company: "Startup Inc",
      period: "2019 - 2022",
      description:
        "Developed full-stack applications using React and Node.js, implemented responsive designs, improved application performance by 60%.",
      tools: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      role: "Junior Developer",
      company: "Digital Solutions",
      period: "2024 - present",
      description:
        "Built and maintained client websites, created reusable component library, collaborated with design team on UI/UX improvements.",
      tools: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      role: "Junior Developer",
      company: "Digital Solutions",
      period: "2017 - 2019",
      description:
        "Built and maintained client websites, created reusable component library, collaborated with design team on UI/UX improvements.",
      tools: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <FullScreenSection isDarkBackground isCentered>
      <Text as="h2" textStyle="h2">
        {titleText.toUpperCase()}
      </Text>

      <VerticalTimeline lineColor ={primaryColor}>
        {careerData.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            date={data.period}
            contentStyle={{background: primaryColor, color: secondaryColor}}
            iconStyle={{ background: mutedColor, color: primaryColor }}
            icon={<FontAwesomeIcon icon={data.icon} />}
          >
            <Stack>
              <Text as="h3" textStyle="captionbold">
                {data.role}
              </Text>
            </Stack>
            <Stack>
              <Text as="h4" textStyle="caption">
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
        ))}
        </VerticalTimeline>
        
    </FullScreenSection>
  );
};

export default TimelineCareer;
