import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  filterHead: {
    background: theme.colorScheme === 'light' ? 'rgb(245, 245, 245)' : '',
    borderRadius: '0.5rem',
    border: '1px solid rgb(245, 231, 235)',
  },
}));
