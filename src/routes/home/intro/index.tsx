import { Box, Container, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { StudentsImg } from '../../../components/assets';
import Img from '../../../components/image';
import IntroTitle from './intro-title';
import { useStyles } from './intro.styles';

const Intro = () => {
  const { classes } = useStyles();

  return (
    <section id="main" className={classes.section}>
      <Container size={'xl'}>
        <Group
          sx={(theme) => ({
            [theme.fn.smallerThan('xl')]: { justifyContent: 'center' },
          })}
          spacing={150}
          align={'flex-end'}
        >
          <IntroTitle />
          <div style={{ position: 'relative' }}>
            {/* <Img
              className={classes.img}
              width={'400px'}
              height={'600px'}
              src={StudentsImg.src}
              alt="students"
            /> */}
            <div className={classes.ellipsis}></div>
          </div>
        </Group>
      </Container>
    </section>
  );
};

export default Intro;
