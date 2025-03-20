import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
    VStack,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useAuth } from '../context/AuthContext'
  
  export const LoginPage = () => {
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const toast = useToast();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (login(password)) {
        navigate('/admin/dashboard');
      } else {
        toast({
          title: 'Error',
          description: 'Invalid password',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };
  
    return (
      <Container maxW="lg" py={12}>
        <VStack spacing={8}>
          <Heading>Admin Login</Heading>
          <Box w="100%" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" width="100%">
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    );
  };