import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  section: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1,
    background: theme.colorScheme === 'light' ? 'rgb(229, 231, 235)' : 'transparent',
  },
  ellipsis: {
    background:
      'linear-gradient(148.79deg,#f82c2c 12.9%,#ec874e 29.15%,#e78b20 41.54%,#6c3df4 54.7%,#ff2633 70.18%,#ff1818 87.21%)',
    position: 'absolute',
    right: '-68px',
    bottom: '48px',
    width: '638px',
    height: '575.84px',
    filter: 'blur(70px)',
    zIndex: -1,
    borderRadius: '250px 280px 300px 100px',
  },
  img: {
    maxWidth: '590px',
    width: '100%',
    borderRadius: '60px !important',
    filter: 'blur(1px)',
    height: 'auto',
  },
}));
