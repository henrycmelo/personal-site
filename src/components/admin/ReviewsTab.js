import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import DataTable from './DataTable';
import { reviewsAPI } from '../../api/reviewsApi';

const ReviewsTab = ({ 
  reviews = [], 
  setReviews, 
  onViewReview,
  getStatusBadge 
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const toast = useToast();

  const approveReview = async (id) => {
    try {
      await reviewsAPI.approveReview(id);
      
      setReviews(reviews.map(review => 
        review.id === id ? { ...review, status: 'approved' } : review
      ));
      
      toast({
        title: 'Review approved',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error approving review:', error);
      toast({
        title: 'Error approving review',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const rejectReview = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this review?");
    if (!isConfirmed) return;
    
    try {
      await reviewsAPI.rejectReview(id);
      
      setReviews(reviews.filter(review => review.id !== id));
      
      toast({
        title: 'Review rejected',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error rejecting review:', error);
      toast({
        title: 'Error rejecting review',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const columns = [
    { key: 'reviewer_name', label: 'Name' },
    { key: 'company', label: 'Company' },
    { key: 'reviewer_role', label: 'Role' },
    { key: 'created_at', label: 'Date', type: 'date' },
    { key: 'status', label: 'Status', type: 'badge' }
  ];

  return (
    <Card bg={bgColor}>
      <CardHeader>
        <Heading size="md">Reviews Management</Heading>
      </CardHeader>
      <CardBody>
        <DataTable
          columns={columns}
          data={reviews}
          onView={onViewReview}
          onApprove={approveReview}
          onReject={rejectReview}
          emptyMessage="No reviews found"
          getStatusBadge={getStatusBadge}
        />
      </CardBody>
    </Card>
  );
};

export default ReviewsTab;