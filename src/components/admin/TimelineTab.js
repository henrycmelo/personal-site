import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import DataTable from './DataTable';

const TimelineTab = ({ 
  timeline = [], 
  onViewTimeline 
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');

  const columns = [
    { key: 'role', label: 'Role' },
    { key: 'company', label: 'Company' },
    { key: 'date', label: 'Date' },
    { 
      key: 'tools', 
      label: 'Tools', 
      type: 'array',
      maxWidth: '200px'
    }
  ];

  return (
    <Card bg={bgColor}>
      <CardHeader>
        <Heading size="md">Career Timeline</Heading>
      </CardHeader>
      <CardBody>
        <DataTable
          columns={columns}
          data={timeline}
          onView={onViewTimeline}
          emptyMessage="No timeline entries found"
        />
      </CardBody>
    </Card>
  );
};

export default TimelineTab;