import React from 'react';
import {
  Box,
  Grid,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { 
  FaChartLine, 
  FaClock, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaArrowUp 
} from 'react-icons/fa';

const MetricCard = ({ title, initial, final, improvement, icon }) => {
  return (
    <Box 
      bg="semantic.background.secondary" 
      p={6} 
      color={'gray.600'}
      
    >
      <HStack justify="space-between" mb={4}>
        <Text textStyle={'pbold'}>
          {title}
        </Text>
        <Icon as={icon}  boxSize={5} />
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Box>
          <Text textStyle={'caption'} mb={1}>
            Initial
          </Text>
          <Text textStyle={'pbold'}>
            {initial}
          </Text>
        </Box>
        <Box>
          <Text textStyle={'caption'}  mb={1}>
            Final
          </Text>
          <Text textStyle={'pbold'}>
            {final}
          </Text>
        </Box>
        <Box>
          <Text textStyle={'caption'}  mb={1}>
            Change
          </Text>
          <Text textStyle={'pbold'}>
            {improvement}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

const ImprovementCard = ({ value, metric, description }) => {
  return (
    <Box 
    bg="semantic.background.secondary" 
    p={6} 
    color={'gray.600'}
    >
      <HStack mb={2}>
        <Icon as={FaArrowUp}  boxSize={4} />
        <Text textStyle={'pbold'}>
          {value}
        </Text>
      </HStack>
      <Text textStyle={'pbold'} mb={2}>
        {metric}
      </Text>
      <Text textStyle={'caption'}>
        {description}
      </Text>
    </Box>
  );
};

const UsabilityResults = () => {
  const metrics = [
    {
      title: "System Usability Scale (SUS)",
      initial: "48",
      final: "82",
      improvement: "+34",
      icon: FaChartLine
    },
    {
      title: "Donation Button Location",
      initial: "45%",
      final: "95%",
      improvement: "+50%",
      icon: FaCheckCircle
    },
    {
      title: "Time to Complete Donation",
      initial: "8.5m",
      final: "5.1m",
      improvement: "-40%",
      icon: FaClock
    },
    {
      title: "Form Error Rate",
      initial: "70%",
      final: "15%",
      improvement: "-55%",
      icon: FaExclamationCircle
    }
  ];

  const improvements = [
    {
      metric: "Donation Completion Rate",
      value: "35%",
      description: "Increased through improved button visibility and streamlined form design"
    },
    {
      metric: "Time to Complete",
      value: "40%",
      description: "Reduced through simplified navigation and clearer instructions"
    },
    {
      metric: "Task Success Rate",
      value: "94%",
      description: "Achieved through enhanced visual hierarchy and intuitive layout"
    }
  ];

  return (
    
      <VStack align="stretch" spacing={8}>
        

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </SimpleGrid>

        <Box
        >
          <Text textStyle="pbold" mb={6}>
            Key Improvements
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {improvements.map((improvement, index) => (
              <ImprovementCard key={index} {...improvement} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    
  );
};

export default UsabilityResults;