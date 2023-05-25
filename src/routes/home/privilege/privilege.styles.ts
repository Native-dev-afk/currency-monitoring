import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  styledStack: {
    width: '100%',
    maxWidth: '413px',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    background: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[2],
    transition: 'box-shadow 0.18s linear',
    ':hover': {
      boxShadow: '0px 0px 19px 3px rgba(0,0,0,0.36)',
    },
  },
}));
