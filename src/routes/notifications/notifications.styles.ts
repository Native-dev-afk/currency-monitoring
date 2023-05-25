import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  leftSide: {
    maxWidth: '353px',
    width: '100%',
    borderRadius: '0.25rem',
    padding: '36px',
    border: '1px solid rgb(217,217,217)',
    background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  rightSide: {
    width: 'calc(100% - 400px)',
    [`@media (max-width: ${theme.breakpoints.md})`]: {
      width: '200px !important',
    },
  },
  img: {
    width: '50px',
    borderRadius: '50%',
  },
  wrapper: {
    height: '100vh',
    width: '100%',
    background: theme.colorScheme === 'dark' ? '' : theme.colors.gray[1],
  },
}));
