import { createStyles } from '@mantine/core';

interface HeaderProps {
  sticky?: boolean;
}

export const useStyles = createStyles((theme, _props, getRef) => ({
  header: {
    width: '100%',
    height: '100%',
    background: theme.colorScheme === 'light' ? 'rgb(229, 231, 235)' : 'transparent',
    '.mantine-Text-root': {
      cursor: 'pointer',
    },
  },
}));
