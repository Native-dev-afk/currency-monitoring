import { Container, Group, Title, Text, useMantineTheme, Stack } from '@mantine/core';
import { useStyles } from './how-to-use.styles';

const HowToUse = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Container size={'xl'}>
      <Stack spacing={30}>
        <Group
          sx={(theme) => ({
            [theme.fn.smallerThan('md')]: {
              flexDirection: 'column',
              gap: '20px',
            },
          })}
          mb={40}
          position="apart"
        >
          <Title
            sx={{
              width: '45%',
              fontWeight: 500,
              [theme.fn.smallerThan('md')]: {
                width: '100%',
              },
            }}
            order={2}
          >
            Qabul tizimdan qanday foydalaniladi?
          </Title>
          <Text
            weight={400}
            sx={{
              width: '30%',
              [theme.fn.smallerThan('md')]: {
                width: '100%',
              },
            }}
            color={theme.colors.gray[5]}
            size="md"
          >
            Davlat mukofoti uchun onlayn ariza topshirish bo‘yicha quyidagi video yo‘riqnoma orqali
            tanishishingiz mumkin.
          </Text>
        </Group>
        <iframe
          className={classes.iframe}
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/uTKWDEuDSJ0"
          title="Videoqo'llanma"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Stack>
    </Container>
  );
};

export default HowToUse;
