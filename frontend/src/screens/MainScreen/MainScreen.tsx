import {
  ActionIcon,
  AppShell,
  Burger,
  Code,
  ColorScheme,
  createStyles,
  Flex,
  Group,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsGithub, BsMoonFill } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';

export default function MainScreen() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const tabGen = () => {
    const arr = [];
    for (let i = 0; i < 40; i++) {
      const obj = {
        link: '',
        label: Math.random()
          .toString(36)
          .substring(2, 22 + 2),
      };
      arr.push(obj);
    }
    console.log(arr);

    return arr;
  };
  const links = tabGen().map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <BiSearch className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar height={840} width={{ sm: 300 }} p="md">
          <Navbar.Section>
            <TextInput
              placeholder="Search"
              size="xs"
              icon={<BiSearch size={20} />}
              rightSectionWidth={70}
              rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              mb="sm"
            />
          </Navbar.Section>

          <Navbar.Section grow mt="xl" component={ScrollArea}>
            {links}
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Flex justify={'space-between'} align={'center'} w={'100%'}>
              <Text size={'xl'}>Logo</Text>
              <Group position={'center'}>
                <TextInput placeholder="Search" withAsterisk />
                <ActionIcon
                  radius={'sm'}
                  size="lg"
                  variant="outline"
                  color={colorScheme == 'dark' ? theme.primaryColor : 'yellow'}
                  onClick={() => toggleColorScheme()}
                >
                  {colorScheme == 'dark' ? <HiSun size={25} /> : <BsMoonFill size={25} />}
                </ActionIcon>
                <ActionIcon size="lg" variant="outline" color={theme.primaryColor}>
                  <BsGithub size={25} />
                </ActionIcon>
              </Group>
            </Flex>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');

  return {
    searchCode: {
      fontWeight: 700,
      fontSize: 10,
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },
  };
});
