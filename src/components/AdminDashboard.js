import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Text,
  Flex,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Spinner,
  Textarea,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck, faXmark, faEye, faRefresh, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../lib/supabase';
import { reviewsAPI } from "../api/reviewsApi";
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const [reviews, setReviews] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');
  const bgColor = useColorModeValue('white', 'gray.800');
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useAuth();

  // Function to fetch all data
  const fetchData = async () => {
    setLoading(true);
    
    try {
      // Fetch reviews using reviewsAPI
      const reviewsData = await reviewsAPI.getAllEntries();
      setReviews(reviewsData || []);
      
      // Fetch career timeline
      const { data: timelineData, error: timelineError } = await supabase
        .from('career_timeline')
        .select('*')
        .order('date', { ascending: false });
        
      if (timelineError) throw timelineError;
      setTimeline(timelineData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: 'Error loading data',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

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
    try {
      await reviewsAPI.rejectReview(id);
      
      setReviews(reviews.map(review => 
        review.id === id ? { ...review, status: 'rejected' } : review
      ));
      
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

  const viewDetails = (item) => {
    setSelectedItem(item);
    setEditedDescription(item.description || '');
    setIsEditing(false);
    onOpen();
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveDescription = async () => {
    try {
      const { error } = await supabase
        .from('career_timeline')
        .update({ description: editedDescription })
        .eq('id', selectedItem.id);
        
      if (error) throw error;
      
      // Update the local state
      setTimeline(timeline.map(item => 
        item.id === selectedItem.id ? { ...item, description: editedDescription } : item
      ));
      
      // Update the selected item
      setSelectedItem({ ...selectedItem, description: editedDescription });
      
      setIsEditing(false);
      
      toast({
        title: 'Description updated',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating description:', error);
      toast({
        title: 'Error updating description',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Get badge color based on status
  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { color: 'yellow', text: 'Pending' },
      approved: { color: 'green', text: 'Approved' },
      rejected: { color: 'red', text: 'Rejected' }
    };
    
    const defaultStatus = { color: 'gray', text: status || 'Unknown' };
    return statusMap[status] || defaultStatus;
  };

  // Handle refreshing the data
  const handleRefresh = () => {
    fetchData();
    toast({
      title: 'Refreshing data',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  if (loading) {
    return (
      <Container centerContent py={20}>
        <Spinner size="xl" />
        <Text mt={4}>Loading dashboard data...</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
        <Heading>Admin Dashboard</Heading>
        <Flex gap={2}>
          <Button
            colorScheme="blue"
            size="sm"
            onClick={handleRefresh}
            leftIcon={<FontAwesomeIcon icon={faRefresh} />}
          >
            Refresh
          </Button>
          <Button
            colorScheme="gray"
            size="sm"
            onClick={handleLogout}
            leftIcon={<FontAwesomeIcon icon={faLock} />}
          >
            Logout
          </Button>
        </Flex>
      </Box>
      
      <Tabs variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>Reviews</Tab>
          <Tab>Career Timeline</Tab>
        </TabList>
        
        <TabPanels>
          {/* Reviews Panel */}
          <TabPanel>
            <Card bg={bgColor}>
              <CardHeader>
                <Heading size="md">Reviews Management</Heading>
              </CardHeader>
              <CardBody>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Company</Th>
                      <Th>Role</Th>
                      <Th>Date</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {reviews.length === 0 ? (
                      <Tr>
                        <Td colSpan={6} textAlign="center">No reviews found</Td>
                      </Tr>
                    ) : (
                      reviews.map((review) => {
                        const status = getStatusBadge(review.status);
                        return (
                          <Tr key={review.id}>
                            <Td>{review.reviewer_name}</Td>
                            <Td>{review.company}</Td>
                            <Td>{review.reviewer_role}</Td>
                            <Td>{review.created_at ? new Date(review.created_at).toLocaleDateString() : 'N/A'}</Td>
                            <Td>
                              <Badge colorScheme={status.color}>
                                {status.text}
                              </Badge>
                            </Td>
                            <Td>
                              <Flex gap={2}>
                                <Button
                                  size="sm"
                                  colorScheme="blue"
                                  onClick={() => viewDetails(review)}
                                  leftIcon={<FontAwesomeIcon icon={faEye} />}
                                >
                                  View
                                </Button>
                                {review.status !== 'approved' && (
                                  <Button
                                    size="sm"
                                    colorScheme="green"
                                    onClick={() => approveReview(review.id)}
                                    leftIcon={<FontAwesomeIcon icon={faCheck} />}
                                  >
                                    Approve
                                  </Button>
                                )}
                                {review.status !== 'rejected' && (
                                  <Button
                                    size="sm"
                                    colorScheme="red"
                                    onClick={() => rejectReview(review.id)}
                                    leftIcon={<FontAwesomeIcon icon={faXmark} />}
                                  >
                                    Reject
                                  </Button>
                                )}
                              </Flex>
                            </Td>
                          </Tr>
                        );
                      })
                    )}
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
          </TabPanel>
          
          {/* Career Timeline Panel */}
          <TabPanel>
            <Card bg={bgColor}>
              <CardHeader>
                <Heading size="md">Career Timeline</Heading>
              </CardHeader>
              <CardBody>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Role</Th>
                      <Th>Company</Th>
                      <Th>Date</Th>
                      <Th>Tools</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {timeline.length === 0 ? (
                      <Tr>
                        <Td colSpan={5} textAlign="center">No timeline entries found</Td>
                      </Tr>
                    ) : (
                      timeline.map((entry) => (
                        <Tr key={entry.id}>
                          <Td>{entry.role}</Td>
                          <Td>{entry.company}</Td>
                          <Td>{entry.date}</Td>
                          <Td>
                            <Text noOfLines={1} maxW="200px">
                              {entry.tools?.join(', ')}
                            </Text>
                          </Td>
                          <Td>
                            <Button
                              size="sm"
                              colorScheme="blue"
                              onClick={() => viewDetails(entry)}
                              leftIcon={<FontAwesomeIcon icon={faEye} />}
                            >
                              View
                            </Button>
                          </Td>
                        </Tr>
                      ))
                    )}
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      {/* Details Modal */}
      {selectedItem && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {selectedItem.reviewer_name 
                ? `Review from ${selectedItem.reviewer_name}` 
                : selectedItem.role}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedItem.reviewer_name ? (
                // Review details
                <Box>
                  <Text fontWeight="bold" mb={1}>Name:</Text>
                  <Text mb={3}>{selectedItem.reviewer_name}</Text>
                  
                  <Text fontWeight="bold" mb={1}>Role:</Text>
                  <Text mb={3}>{selectedItem.reviewer_role}</Text>
                  
                  <Text fontWeight="bold" mb={1}>Company:</Text>
                  <Text mb={3}>{selectedItem.company}</Text>
                  
                  {selectedItem.linkedin_url && (
                    <>
                      <Text fontWeight="bold" mb={1}>LinkedIn:</Text>
                      <Text mb={3}>
                        <Link href={selectedItem.linkedin_url} target="_blank" rel="noreferrer">
                          {selectedItem.linkedin_url}
                        </Link>
                      </Text>
                    </>
                  )}
                  
                  <Text fontWeight="bold" mb={1}>Review:</Text>
                  <Text mb={3}>{selectedItem.content}</Text>
                  
                  <Text fontWeight="bold" mb={1}>Submitted:</Text>
                  <Text mb={3}>{selectedItem.created_at ? new Date(selectedItem.created_at).toLocaleDateString() : 'N/A'}</Text>
                  
                  <Text fontWeight="bold" mb={1}>Status:</Text>
                  <Badge colorScheme={getStatusBadge(selectedItem.status).color}>
                    {getStatusBadge(selectedItem.status).text}
                  </Badge>
                </Box>
              ) : (
                // Timeline entry details
                <Box>
                  <FormControl mb={3}>
                    <FormLabel fontWeight="bold">Role:</FormLabel>
                    <Input value={selectedItem.role} readOnly />
                  </FormControl>
                  
                  <FormControl mb={3}>
                    <FormLabel fontWeight="bold">Company:</FormLabel>
                    <Input value={selectedItem.company} readOnly />
                  </FormControl>
                  
                  <FormControl mb={3}>
                    <FormLabel fontWeight="bold">Date:</FormLabel>
                    <Input value={selectedItem.date} readOnly />
                  </FormControl>
                  
                  <FormControl mb={3}>
                    <FormLabel fontWeight="bold">Description:</FormLabel>
                    {isEditing ? (
                      <Textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        height="150px"
                      />
                    ) : (
                      <Flex justifyContent="space-between" alignItems="flex-start" flexDirection={'column'}>
                        <Text>{selectedItem.description}</Text>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          onClick={startEditing}
                          leftIcon={<FontAwesomeIcon icon={faEdit} />}
                        >
                          Edit
                        </Button>
                      </Flex>
                    )}
                  </FormControl>
                  
                  {selectedItem.tools && (
                    <FormControl mb={3}>
                      <FormLabel fontWeight="bold">Tools:</FormLabel>
                      <Flex flexWrap="wrap" gap={2}>
                        {selectedItem.tools.map((tool, index) => (
                          <Badge key={index} colorScheme="blue">
                            {tool}
                          </Badge>
                        ))}
                      </Flex>
                    </FormControl>
                  )}
                </Box>
              )}
            </ModalBody>
            <ModalFooter>
              {selectedItem.reviewer_name ? (
                // Review actions
                <>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  {selectedItem.status !== 'approved' && (
                    <Button 
                      colorScheme="green" 
                      mr={3}
                      onClick={() => {
                        approveReview(selectedItem.id);
                        onClose();
                      }}
                    >
                      Approve
                    </Button>
                  )}
                  {selectedItem.status !== 'rejected' && (
                    <Button 
                      colorScheme="red"
                      onClick={() => {
                        rejectReview(selectedItem.id);
                        onClose();
                      }}
                    >
                      Reject
                    </Button>
                  )}
                </>
              ) : (
                // Timeline actions
                <>
                  {isEditing ? (
                    <>
                      <Button colorScheme="gray" mr={3} onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button 
                        colorScheme="green" 
                        onClick={saveDescription}
                        leftIcon={<FontAwesomeIcon icon={faSave} />}
                      >
                        Save
                      </Button>
                    </>
                  ) : (
                    <Button colorScheme="blue" onClick={onClose}>
                      Close
                    </Button>
                  )}
                </>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export { AdminDashboard };