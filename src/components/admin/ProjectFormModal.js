import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  useToast
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { projectsAPI } from '../../api/projectsApi';

const ProjectFormModal = ({ 
  isOpen, 
  onClose, 
  project = null, 
  onSave 
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: [],
    path: '',
    type: '',
    image_url: '',
    logo_urls: []
  });
  const [keywordInput, setKeywordInput] = useState('');
  const [logoUrlsInput, setLogoUrlsInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Initialize form when project changes
  useEffect(() => {
    if (project) {
      setFormData({...project});
      setKeywordInput(project.keywords?.join(', ') || '');
      setLogoUrlsInput(project.logo_urls?.join(', ') || '');
    } else {
      setFormData({
        title: '',
        description: '',
        keywords: [],
        path: '',
        type: '',
        image_url: '',
        logo_urls: []
      });
      setKeywordInput('');
      setLogoUrlsInput('');
    }
  }, [project]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    try {
      // Validate required fields
      if (!formData.title || !formData.description || !formData.path || !formData.type) {
        toast({
          title: 'Validation Error',
          description: 'Please fill in all required fields',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      setIsLoading(true);

      // Convert comma-separated inputs to arrays
      const keywordsArray = keywordInput
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0);
      
      const logoUrlsArray = logoUrlsInput
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0);
      
      const projectData = {
        ...formData,
        keywords: keywordsArray,
        logo_urls: logoUrlsArray
      };

      let savedProject;
      if (formData.id) {
        // Update existing project
        savedProject = await projectsAPI.updateProject(formData.id, projectData);
        toast({
          title: 'Project updated',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Create new project
        savedProject = await projectsAPI.createProject(projectData);
        toast({
          title: 'Project created',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
      
      onSave(savedProject, !!formData.id);
      onClose();
    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: 'Error saving project',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      description: '',
      keywords: [],
      path: '',
      type: '',
      image_url: '',
      logo_urls: []
    });
    setKeywordInput('');
    setLogoUrlsInput('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {formData.id ? 'Edit Project' : 'Create New Project'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <FormControl mb={3} isRequired>
              <FormLabel>Title:</FormLabel>
              <Input 
                value={formData.title} 
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter project title"
              />
            </FormControl>
            
            <FormControl mb={3} isRequired>
              <FormLabel>Type:</FormLabel>
              <Input 
                value={formData.type} 
                onChange={(e) => handleInputChange('type', e.target.value)}
                placeholder="e.g., Product Design / Mobile UX"
              />
            </FormControl>
            
            <FormControl mb={3} isRequired>
              <FormLabel>Path:</FormLabel>
              <Input 
                value={formData.path} 
                onChange={(e) => handleInputChange('path', e.target.value)}
                placeholder="/projects/project-name"
              />
            </FormControl>
            
            <FormControl mb={3} isRequired>
              <FormLabel>Description:</FormLabel>
              <Textarea 
                value={formData.description} 
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Enter project description"
                height="100px"
              />
            </FormControl>
            
            <FormControl mb={3} isRequired>
              <FormLabel>Keywords (comma-separated):</FormLabel>
              <Input 
                value={keywordInput} 
                onChange={(e) => setKeywordInput(e.target.value)}
                placeholder="UX Design, Research, Mobile"
              />
            </FormControl>
            
            <FormControl mb={3}>
              <FormLabel>Image URL:</FormLabel>
              <Input 
                value={formData.image_url || ''} 
                onChange={(e) => handleInputChange('image_url', e.target.value)}
                placeholder="https://your-supabase-url/storage/..."
              />
            </FormControl>
            
            <FormControl mb={3}>
              <FormLabel>Logo URLs (comma-separated):</FormLabel>
              <Input 
                value={logoUrlsInput} 
                onChange={(e) => setLogoUrlsInput(e.target.value)}
                placeholder="https://logo1.png, https://logo2.png"
              />
            </FormControl>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            colorScheme="green" 
            onClick={handleSave}
            isLoading={isLoading}
            leftIcon={<FontAwesomeIcon icon={faSave} />}
          >
            {formData.id ? 'Update Project' : 'Create Project'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectFormModal;