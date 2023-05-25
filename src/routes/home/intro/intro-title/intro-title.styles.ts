import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  longBtn: {
    width: '100%',
    maxWidth: '369px',
    height: '68px',
    cursor: 'pointer',
    color: theme.colorScheme === 'light' ? theme.colors.dark[6] : theme.colors.gray[1],
  },
}));
