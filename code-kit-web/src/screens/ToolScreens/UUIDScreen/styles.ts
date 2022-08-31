import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],

    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      width: '40rem',
    },
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: '38rem',
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: '34rem',
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: '30rem',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '25rem',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: '15rem',
    },
    borderRadius: '10px',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],
    },
  },
  mainButton: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
  },
  textArea: {
    marginTop: theme.spacing.lg,
  },
}))
