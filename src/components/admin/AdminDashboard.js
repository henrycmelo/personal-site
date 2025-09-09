import React, { useEffect, useState, useCallback } from 'react';
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
  Flex,
  useToast,
  Spinner,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../../lib/supabase';
import { reviewsAPI } from "../../api/reviewsApi.js";
import { projectsAPI} from "../../api/projectsApi";
import { useAuth } from '../../context/AuthContext';

// Import our modular components
import ProjectsTab from './ProjectsTab.js';
import ReviewsTab from './ReviewsTab.js';
import TimelineTab from './TimelineTab.js';
import ProjectFormModal from './ProjectFormModal.js';
import DetailsModal from './DetailsModal.js';

const AdminDashboard = () => {
  // State management
  const [reviews, setReviews] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(''); // 'review', 'project', 'timeline'
  const [editingProject, setEditingProject] = useState(null);
  
  // Hooks
  const navigate = useNavigate();
  const toast = useToast();
  const { logout } = useAuth();
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
  const { isOpen: isProjectFormOpen, onOpen: onProjectFormOpen, onClose: onProjectFormClose } = useDisclosure();

  // Data fetching
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch reviews
      const reviewsData = await reviewsAPI.getAllEntries();
      setReviews(reviewsData || []);

      // Fetch timeline
      const { data: timelineData, error: timelineError } = await supabase
        .from('career_timeline')
        .select('*')
        .order('date', { ascending: false });

      if (timelineError) throw timelineError;
      setTimeline(timelineData || []);

      // Fetch projects
      const projectsData = await projectsAPI.getAllProjects();
      setProjects(projectsData || []);
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
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Event handlers
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleRefresh = () => {
    fetchData();
    toast({
      title: 'Refreshing data',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  // Review handlers
  const handleViewReview = (review) => {
    setSelectedItem(review);
    setModalType('review');
    onDetailsOpen();
  };

  const handleApproveReview = async (id) => {
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

  const handleRejectReview = async (id) => {
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

  // Timeline handlers
  const handleViewTimeline = (entry) => {
    setSelectedItem(entry);
    setModalType('timeline');
    onDetailsOpen();
  };

  const handleUpdateTimeline = (id, updates) => {
    setTimeline(timeline.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  // Project handlers
  const handleViewProject = (project) => {
    setSelectedItem(project);
    setModalType('project');
    onDetailsOpen();
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    onProjectFormOpen();
  };

  const handleCreateProject = () => {
    setEditingProject(null);
    onProjectFormOpen();
  };

  const handleSaveProject = (savedProject, isUpdate) => {
    if (isUpdate) {
      setProjects(projects.map(p => 
        p.id === savedProject.id ? savedProject : p
      ));
    } else {
      setProjects([...projects, savedProject]);
    }
  };

  // Utility functions
  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { color: 'yellow', text: 'Pending' },
      approved: { color: 'green', text: 'Approved' },
      rejected: { color: 'red', text: 'Rejected' }
    };
    return statusMap[status] || { color: 'gray', text: status || 'Unknown' };
  };

  // Loading state
  if (loading) {
    return (
      <Container centerContent py={20} bg="gray.50" minH="100vh">
        <Box 
          bg="white" 
          p={8} 
          borderRadius="lg" 
          shadow="sm"
          border="1px"
          borderColor="gray.200"
          textAlign="center"
        >
          <Spinner size="xl" color="gray.600" />
          <Text mt={4} color="gray.600">Loading dashboard data...</Text>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      {/* Header */}
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
      
      {/* Tabs */}
      <Tabs variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>Reviews</Tab>
          <Tab>Career Timeline</Tab>
          <Tab>Projects</Tab>
        </TabList>
        
        <TabPanels>
          {/* Reviews Tab */}
          <TabPanel>
            <ReviewsTab
              reviews={reviews}
              setReviews={setReviews}
              onViewReview={handleViewReview}
              getStatusBadge={getStatusBadge}
            />
          </TabPanel>
          
          {/* Timeline Tab */}
          <TabPanel>
            <TimelineTab
              timeline={timeline}
              onViewTimeline={handleViewTimeline}
            />
          </TabPanel>

          {/* Projects Tab */}
          <TabPanel>
            <ProjectsTab
              projects={projects}
              setProjects={setProjects}
              onViewProject={handleViewProject}
              onEditProject={handleEditProject}
              onCreateProject={handleCreateProject}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      {/* Modals */}
      <DetailsModal
        isOpen={isDetailsOpen}
        onClose={onDetailsClose}
        item={selectedItem}
        type={modalType}
        onApprove={handleApproveReview}
        onReject={handleRejectReview}
        getStatusBadge={getStatusBadge}
        onUpdate={handleUpdateTimeline}
      />

      <ProjectFormModal
        isOpen={isProjectFormOpen}
        onClose={onProjectFormClose}
        project={editingProject}
        onSave={handleSaveProject}
      />
    </Container>
  );
};

export { AdminDashboard };