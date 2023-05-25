import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100% ',

    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#f2f3f7',
    [theme.fn.smallerThan('md')]: {
      padding: '0 20px',
      height: '100% !important',
    },
  },
  btmContainer: {
    padding: '1.5rem',
    border: theme.colorScheme === 'dark' ? '1px solid white' : '',
    borderRadius: '0.5rem',
    background: theme.colorScheme === 'light' ? 'white' : 'transparent',
  },
  topContainer: {
    border: theme.colorScheme === 'dark' ? '1px solid white' : '',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: theme.colorScheme === 'light' ? 'white' : 'transparent',
  },
}));
