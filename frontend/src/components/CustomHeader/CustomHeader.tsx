import { Box, Divider, Text } from '@mantine/core';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import useStyles from './styles';

const CustomHeader = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Text size={'lg'} className={classes.text}>
          Dashboard
        </Text>
        <ThemeIcon />
      </Box>

      <Divider mb={'sm'} />
    </>
  );
};

export default CustomHeader;
