import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  iframe: {
    width: '100%',
    maxWidth: '1116px',
    margin: '0 auto',
    [theme.fn.smallerThan('sm')]: {
      height: '300px',
    },
  },
}));
