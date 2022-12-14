import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { FiSearch, FiMenu } from 'react-icons/fi'
import Navigation from '../components/Navigation/Navigation'
const AppLayout = () => {
  const sidebar = useDisclosure()

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: 'gray.700',
      }}
      minH="100vh"
    >
      <Navigation
        display={{
          base: 'none',
          md: 'unset',
        }}
      />
      <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <Navigation w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      <Box w="full">
        <Flex
          ml={{
            base: 0,
            md: 60,
          }}
          position={'fixed'}
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: 'inline-flex',
              md: 'none',
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup
            w="96"
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup>

          <Flex
            align="center"
            mr={{
              base: 0,
              md: 60,
            }}
          >
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box
          as="main"
          p="4"
          ml={{
            base: 0,
            md: 60,
          }}
        >
          {/* Add content here, remove div below  */}
          <Box p={'2'} rounded="md" mt={'10'}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AppLayout
