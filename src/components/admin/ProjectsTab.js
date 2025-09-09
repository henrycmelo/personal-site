import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Flex,
  useToast,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react';
import DataTable from './DataTable';
import { projectsAPI } from '../../api/projectsApi';

const ProjectsTab = ({ 
  projects = [], 
  setProjects, 
  onViewProject, 
  onEditProject, 
  onCreateProject 
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const toast = useToast();

  const deleteProject = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this project?");
    if (!isConfirmed) return;
    
    try {
      await projectsAPI.deleteProject(id);
      setProjects(projects.filter(project => project.id !== id));
      toast({
        title: 'Project deleted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: 'Error deleting project',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'type', label: 'Type' },
    { key: 'path', label: 'Path' },
    { 
      key: 'keywords', 
      label: 'Keywords', 
      type: 'array',
      maxWidth: '150px'
    }
  ];

  return (
    <Card bg={bgColor}>
      <CardHeader>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="md">Projects Management</Heading>
          <Button colorScheme="green" onClick={onCreateProject}>
            Add New Project
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <DataTable
          columns={columns}
          data={projects}
          onView={onViewProject}
          onEdit={onEditProject}
          onDelete={deleteProject}
          emptyMessage="No projects found"
        />
      </CardBody>
    </Card>
  );
};

export default ProjectsTab;