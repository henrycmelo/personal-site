import React from 'react';

import { Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const TimelineCareer = () => {
  const titleText = "Career Timeline";
  const careerData = [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Led development of core products, managed team of 5 engineers, implemented CI/CD pipeline, reduced deployment time by 40%."
    },
    {
      role: "Software Engineer",
      company: "Startup Inc",
      period: "2019 - 2022",
      description: "Developed full-stack applications using React and Node.js, implemented responsive designs, improved application performance by 60%."
    },
    {
      role: "Junior Developer",
      company: "Digital Solutions",
      period: "2017 - 2019",
      description: "Built and maintained client websites, created reusable component library, collaborated with design team on UI/UX improvements."
    }
  ];

  return (
    <FullScreenSection isDarkBackground isCentered>
        <Text as="h2" textStyle="h2">
            {titleText.toUpperCase()}
        </Text>
        

    
       
      



    </FullScreenSection>
  );
};

export default TimelineCareer;