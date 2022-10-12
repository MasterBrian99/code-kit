import { createStyles, Navbar, TextInput, Code, Text, Group, ScrollArea, Box } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { Fragment } from 'react';

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  },
  headerSection: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,
    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: 10,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.xs,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: 'none',
  },

  collections: {
    paddingLeft: theme.spacing.md - 6,
    paddingRight: theme.spacing.md - 6,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: theme.spacing.md + 2,
    paddingRight: theme.spacing.md,
    marginBottom: 5,
  },

  collectionLink: {
    display: 'block',
    padding: `8px ${theme.spacing.xs}px`,
    textDecoration: 'none',
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];

const Navigation = () => {
  const { classes } = useStyles();

  const collectionLinks = collections.map((collection) => (
    <a
      href='/'
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: 9, fontSize: 16 }}>{collection.emoji}</span> {collection.label}
    </a>
  ));
  return (
    <Fragment>
      <Navbar width={{ sm: 300 }} p='md' className={classes.navbar}>
        <Navbar.Section className={classes.headerSection}>
          <Text>Hello</Text>
        </Navbar.Section>

        <TextInput
          placeholder='Search'
          size='xs'
          icon={<IconSearch size={12} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          mb='sm'
        />

        <Navbar.Section className={classes.section} grow component={ScrollArea}>
          <Box>
            <Group className={classes.collectionsHeader} position='apart'>
              <Text size='xs' weight={500} color='dimmed'>
                Collections
              </Text>
            </Group>
            <div className={classes.collections}>{collectionLinks}</div>
          </Box>
          <Box>
            <Group className={classes.collectionsHeader} position='apart'>
              <Text size='xs' weight={500} color='dimmed'>
                Collections
              </Text>
            </Group>
            <div className={classes.collections}>{collectionLinks}</div>
          </Box>
          <Box>
            <Group className={classes.collectionsHeader} position='apart'>
              <Text size='xs' weight={500} color='dimmed'>
                Collections
              </Text>
            </Group>
            <div className={classes.collections}>{collectionLinks}</div>
          </Box>
        </Navbar.Section>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
