import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Text,
  Badge
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const DataTable = ({ 
  columns = [], 
  data = [], 
  onView, 
  onEdit, 
  onDelete, 
  onApprove, 
  onReject,
  emptyMessage = "No data found",
  getStatusBadge 
}) => {
  
  const renderCellContent = (item, column) => {
    const value = item[column.key];
    
    // Handle different cell types
    switch (column.type) {
      case 'badge':
        if (column.key === 'status' && getStatusBadge) {
          const status = getStatusBadge(value);
          return (
            <Badge colorScheme={status.color}>
              {status.text}
            </Badge>
          );
        }
        return <Badge>{value}</Badge>;
        
      case 'array':
        return (
          <Text noOfLines={1} maxW={column.maxWidth || "150px"}>
            {Array.isArray(value) ? value.join(', ') : ''}
          </Text>
        );
        
      case 'date':
        return value ? new Date(value).toLocaleDateString() : 'N/A';
        
      case 'truncate':
        return (
          <Text noOfLines={1} maxW={column.maxWidth || "200px"}>
            {value || ''}
          </Text>
        );
        
      default:
        return value || '';
    }
  };

  // Determine row type safely
  const getRowType = () => {
    if (!data || data.length === 0) return 'unknown';
    const firstItem = data[0];
    if (firstItem?.reviewer_name) return 'review';
    if (firstItem?.title) return 'project';
    return 'timeline';
  };

  const renderActions = (item) => {
    const rowType = getRowType();
    
    return (
      <Flex gap={2}>
        {onView && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="gray"
            onClick={() => onView(item)}
            leftIcon={<FontAwesomeIcon icon={faEye} />}
            _hover={{ bg: "gray.100" }}
          >
            View
          </Button>
        )}
        
        {onEdit && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="yellow"
            onClick={() => onEdit(item)}
            leftIcon={<FontAwesomeIcon icon={faEdit} />}
            borderColor="yellow.400"
            color="yellow.600"
            _hover={{ bg: "yellow.50", borderColor: "yellow.500" }}
          >
            Edit
          </Button>
        )}
        
        {onApprove && item.status !== 'approved' && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="green"
            onClick={() => onApprove(item.id)}
            leftIcon={<FontAwesomeIcon icon={faCheck} />}
            borderColor="green.400"
            color="green.600"
            _hover={{ bg: "green.50", borderColor: "green.500" }}
          >
            Approve
          </Button>
        )}
        
        {onReject && item.status !== 'rejected' && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="red"
            onClick={() => onReject(item.id)}
            leftIcon={<FontAwesomeIcon icon={faXmark} />}
            borderColor="red.400"
            color="red.600"
            _hover={{ bg: "red.50", borderColor: "red.500" }}
          >
            {rowType === 'review' ? 'Reject' : 'Delete'}
          </Button>
        )}
        
        {onDelete && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="red"
            onClick={() => onDelete(item.id)}
            leftIcon={<FontAwesomeIcon icon={faXmark} />}
            borderColor="red.400"
            color="red.600"
            _hover={{ bg: "red.50", borderColor: "red.500" }}
          >
            Delete
          </Button>
        )}
      </Flex>
    );
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th key={column.key}>{column.label}</Th>
          ))}
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.length === 0 ? (
          <Tr>
            <Td colSpan={columns.length + 1} textAlign="center">
              {emptyMessage}
            </Td>
          </Tr>
        ) : (
          data.map((item) => (
            <Tr key={item.id}>
              {columns.map((column) => (
                <Td key={column.key}>
                  {renderCellContent(item, column)}
                </Td>
              ))}
              <Td>
                {renderActions(item)}
              </Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>
  );
};

export default DataTable;