import { Box, Center, Container, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { RewardImg } from '../../../components/assets';
import Img from '../../../components/image';
import { colors } from '../../../styles/variables';
import { useStyles } from './privilege.styles';

const Privilege = () => {
  const manTheme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Container id={'privilege'} px={12} py={120} size={'xl'}>
      <Center>
        <Title align="center" mb={129} order={2}>
          Davlat mukofotiga topshiruvchilar <br /> uchun imtiyozlar
        </Title>
      </Center>
      <Group
        spacing={25}
        sx={(theme) => ({
          [theme.fn.smallerThan('xl')]: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}
      >
        <Stack align="center" className={classes.styledStack} py={36} spacing={26} px={30}>
          <Img width={72} height={72} src={RewardImg.src} alt="reward" />
          <Text align="center" color={'dark'} weight={500} size="xl">
            Yutuqlar
          </Text>
          <Text weight={400} align="center" color={manTheme.colors.gray[5]} size="lg">
            Notarius nomidagi davlat mukofoti uchun onlayn ariza topshirish tizimi
          </Text>
        </Stack>
        <Stack align="center" className={classes.styledStack} py={36} spacing={26} px={30}>
          <Img width={72} height={72} src={RewardImg.src} alt="reward" />
          <Text align="center" color={'dark'} weight={500} size="xl">
            Yutuqlar
          </Text>
          <Text weight={400} align="center" color={manTheme.colors.gray[5]} size="lg">
            Notarius nomidagi davlat mukofoti uchun onlayn ariza topshirish tizimi
          </Text>
        </Stack>
        <Stack align="center" className={classes.styledStack} py={36} spacing={26} px={30}>
          <Img width={72} height={72} src={RewardImg.src} alt="reward" />
          <Text align="center" color={'dark'} weight={500} size="xl">
            Yutuqlar
          </Text>
          <Text weight={400} align="center" color={manTheme.colors.gray[5]} size="lg">
            Notarius nomidagi davlat mukofoti uchun onlayn ariza topshirish tizimi
          </Text>
        </Stack>
      </Group>
    </Container>
  );
};

export default Privilege;
