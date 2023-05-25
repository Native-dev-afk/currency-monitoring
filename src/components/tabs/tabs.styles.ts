import { createStyles } from '@mantine/core';
import { screenSizes } from '../../styles/variables';

export const useStyles = createStyles((theme, { space }: { space?: string }, getRef) => ({
  body: {
    padding: '30px 0',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  root: {
    width: '100%',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  tabActive: {
    [`& .${getRef('tabLabel')}`]: {
      fontWeight: 500,
      color: theme.colors.blue[6],
    },
    fontSize: '20.25px',
    lineHeight: '27px',
    borderBottom: `3px solid ${theme.colors.blue[6]}`,
  },
  panel: {
    margin: '20px 0 0 0',
  },
  tabInner: {
    width: '100%',
    padding: '0px',
    marginBottom: '20px',
  },
  tabLabel: {
    ref: getRef('tabLabel'),
    fontSize: '18px',
    fontWeight: 400,
    transition: 'all 0.3s linear',
    color: theme.colors.dark[6],
    lineHeight: '28px',
  },
  tabsList: {
    width: '100%',
    display: 'flex',
    [`@media (max-width: ${screenSizes.md})`]: {
      padding: '0 10px',
      justifyContent: 'space-between',
    },
  },
  tabsListWrapper: {
    width: '100%',
    justifyContent: 'center',
    margin: '0 auto',
  },
}));
