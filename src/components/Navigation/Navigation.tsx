import {
  Flex,
  Text,
  Box,
  OmitCommonProps,
  ChakraProps,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { MdHome } from 'react-icons/md'
import { FaRss } from 'react-icons/fa'
import { HiCollection } from 'react-icons/hi'
import { FaClipboardCheck } from 'react-icons/fa'
import { AiFillGift } from 'react-icons/ai'
import { BsGearFill } from 'react-icons/bs'
import { IconType } from 'react-icons'
const Navigation = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      keyof ChakraProps
    > &
    ChakraProps & { as?: 'div' | undefined },
) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <p>logo</p>
        <Text
          fontSize="2xl"
          ml="2"
          color="brand.500"
          _dark={{
            color: 'white',
          }}
          fontWeight="semibold"
        >
          Code Kit
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {navItem.map((el, i) => (
          <NavItem key={i} icon={el.icon}>
            {el.label}
          </NavItem>
        ))}

        {/* <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon as={MdKeyboardArrowRight} ml="auto" />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem>
          <NavItem pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse> */}
      </Flex>
    </Box>
  )
}

export default Navigation

const NavItem = (props: { icon: IconType; children: string }) => {
  const color = useColorModeValue('gray.600', 'gray.300')

  const { icon, children, ...rest } = props
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color="inherit"
      _dark={{
        color: 'gray.400',
      }}
      _hover={{
        bg: 'gray.100',
        _dark: {
          bg: 'gray.900',
        },
        color: 'gray.900',
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  )
}

const navItem = [
  {
    icon: MdHome,
    label: 'Home',
  },
  {
    icon: FaRss,
    label: 'Articles',
  },
  {
    icon: HiCollection,
    label: 'Collections',
  },
  {
    icon: FaClipboardCheck,
    label: 'Checklists',
  },
  {
    icon: AiFillGift,
    label: 'Changelog',
  },
  {
    icon: BsGearFill,
    label: 'Settings',
  },
]
