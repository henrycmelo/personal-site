import React, { useState } from 'react';
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
  Text,
  Badge,
  Flex,
  Box,
  Link,
  useToast
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../../lib/supabase';

const DetailsModal = ({ 
  isOpen, 
  onClose, 
  item, 
  type, // 'review', 'project', 'timeline'
  onApprove,
  onReject,
  getStatusBadge,
  onUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');
  const toast = useToast();

  const handleEdit = () => {
    setEditedDescription(item?.description || '');
    setIsEditing(true);
  };

  const handleSaveDescription = async () => {
    try {
      const { error } = await supabase
        .from('career_timeline')
        .update({ description: editedDescription })
        .eq('id', item.id);
        
      if (error) throw error;
      
      // Update parent component
      if (onUpdate) {
        onUpdate(item.id, { description: editedDescription });
      }
      
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

  const handleClose = () => {
    setIsEditing(false);
    setEditedDescription('');
    onClose();
  };

  const getModalHeader = () => {
    if (type === 'review') {
      return `Review from ${item?.reviewer_name}`;
    }
    if (type === 'project') {
      return item?.title || 'Project Details';
    }
    if (type === 'timeline') {
      return item?.role || 'Timeline Entry';
    }
    return 'Details';
  };

  const renderContent = () => {
    if (type === 'review') {
      return (
        <Box>
          <Text fontWeight="bold" mb={1}>Name:</Text>
          <Text mb={3}>{item?.reviewer_name}</Text>
          
          <Text fontWeight="bold" mb={1}>Role:</Text>
          <Text mb={3}>{item?.reviewer_role}</Text>
          
          <Text fontWeight="bold" mb={1}>Company:</Text>
          <Text mb={3}>{item?.company}</Text>
          
          {item?.linkedin_url && (
            <>
              <Text fontWeight="bold" mb={1}>LinkedIn:</Text>
              <Text mb={3}>
                <Link href={item.linkedin_url} target="_blank" rel="noreferrer">
                  {item.linkedin_url}
                </Link>
              </Text>
            </>
          )}
          
          <Text fontWeight="bold" mb={1}>Review:</Text>
          <Text mb={3}>{item?.content}</Text>
          
          <Text fontWeight="bold" mb={1}>Submitted:</Text>
          <Text mb={3}>{item?.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}</Text>
          
          <Text fontWeight="bold" mb={1}>Status:</Text>
          <Badge colorScheme={getStatusBadge?.(item?.status)?.color}>
            {getStatusBadge?.(item?.status)?.text}
          </Badge>
        </Box>
      );
    }

    if (type === 'project') {
      return (
        <Box>
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Title:</FormLabel>
            <Input value={item?.title || ''} readOnly />
          </FormControl>
          
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Type:</FormLabel>
            <Input value={item?.type || ''} readOnly />
          </FormControl>
          
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Path:</FormLabel>
            <Input value={item?.path || ''} readOnly />
          </FormControl>
          
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Description:</FormLabel>
            <Textarea value={item?.description || ''} readOnly height="100px" />
          </FormControl>
          
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Keywords:</FormLabel>
            <Flex flexWrap="wrap" gap={2}>
              {item?.keywords?.map((keyword, index) => (
                <Badge key={index} colorScheme="blue">
                  {keyword}
                </Badge>
              ))}
            </Flex>
          </FormControl>
          
          {item?.image_url && (
            <FormControl mb={3}>
              <FormLabel fontWeight="bold">Image URL:</FormLabel>
              <Input value={item.image_url} readOnly />
            </FormControl>
          )}
        </Box>
      );
    }

    if (type === 'timeline') {
      return (
        <Box>
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Role:</FormLabel>
            <Input value={item?.role || ''} readOnly />
          </FormControl>
          
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Company:</FormLabel>
            <Input value={item?.company || ''} readOnly />
          </FormControl>
          
          <FormControl mb={3}>
            <FormLabel fontWeight="bold">Date:</FormLabel>
            <Input value={item?.date || ''} readOnly />
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
                <Text>{item?.description || ''}</Text>
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={handleEdit}
                  leftIcon={<FontAwesomeIcon icon={faEdit} />}
                  mt={2}
                >
                  Edit
                </Button>
              </Flex>
            )}
          </FormControl>
          
          {item?.tools && (
            <FormControl mb={3}>
              <FormLabel fontWeight="bold">Tools:</FormLabel>
              <Flex flexWrap="wrap" gap={2}>
                {item.tools.map((tool, index) => (
                  <Badge key={index} colorScheme="blue">
                    {tool}
                  </Badge>
                ))}
              </Flex>
            </FormControl>
          )}
        </Box>
      );
    }

    return null;
  };

  const renderFooter = () => {
    if (type === 'review') {
      return (
        <>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          {item?.status !== 'approved' && onApprove && (
            <Button 
              colorScheme="green" 
              mr={3}
              onClick={() => {
                onApprove(item.id);
                handleClose();
              }}
            >
              Approve
            </Button>
          )}
          {item?.status !== 'rejected' && onReject && (
            <Button 
              colorScheme="red"
              onClick={() => {
                onReject(item.id);
                handleClose();
              }}
            >
              Reject
            </Button>
          )}
        </>
      );
    }

    if (type === 'timeline' && isEditing) {
      return (
        <>
          <Button colorScheme="gray" mr={3} onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button 
            colorScheme="green" 
            onClick={handleSaveDescription}
            leftIcon={<FontAwesomeIcon icon={faSave} />}
          >
            Save
          </Button>
        </>
      );
    }

    return (
      <Button colorScheme="blue" onClick={handleClose}>
        Close
      </Button>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{getModalHeader()}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {renderContent()}
        </ModalBody>
        <ModalFooter>
          {renderFooter()}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailsModal;