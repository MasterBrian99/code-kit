import { createStyles } from '@mantine/core';

const useStyles = createStyles((_theme, _params, _getRef) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.6rem',
    fontWeight: 600,
  },
}));

export default useStyles;
