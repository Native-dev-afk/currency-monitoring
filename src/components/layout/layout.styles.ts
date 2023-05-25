import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _getRef) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    margin: '0 auto 0 auto',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },
  child: {
    width: '100%',
    height: '100%',
  },
  toaster: {
    borderRadius: '0px !important',
  },
}));
