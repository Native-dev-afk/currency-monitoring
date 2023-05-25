import {
  Anchor,
  Breadcrumbs,
  Center,
  Container,
  Divider,
  Group,
  Pagination,
  Paper,
  Stack,
  Switch,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { ChevronRightIcon, HomeIcon, MoonIcon, SunIcon } from '@modulz/radix-icons';
import Link from 'next/link';
import { AvatarImg } from '../../components/assets';
import { useStyles } from './notifications.styles';

const items = [
  {
    title: (
      <Group spacing={10} align="center">
        <HomeIcon width={24} height={24} /> Bosh sahifa{' '}
      </Group>
    ),
    href: '/',
  },
  { title: 'Mening profilim', href: '/profile' },
];
const crumbs = items.map((item, index) => (
  <Link href={item.href} passHref key={index}>
    <Text
      size={'sm'}
      weight={500}
      color={items?.length === index + 1 ? 'blue' : ''}
      align="left"
      sx={{ ':hover': { textDecoration: 'none' }, cursor: 'pointer' }}
    >
      {item.title}
    </Text>
  </Link>
));

const MyProfile = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <section className={classes.wrapper}>
      <Container sx={(theme) => ({ width: '100%' })} size={'xl'}>
        <Stack sx={{ width: '100%' }} my={40}>
          <Breadcrumbs mb={40} separator={<ChevronRightIcon height={18} width={18} />}>
            {crumbs}
          </Breadcrumbs>
          <Group
            sx={(theme) => ({
              flexWrap: 'nowrap',
              [theme.fn.smallerThan('lg')]: {
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
            })}
            position="apart"
            spacing={40}
            align={'flex-start'}
          >
            <Stack spacing={30} className={classes.leftSide}>
              <Group>
                <img className={classes.img} width={50} src={AvatarImg.src} alt="avatar" />
                <Text weight={500} size={34}>
                  Ism Familiya
                </Text>
              </Group>
              <Divider size={'xs'} />
              <Text size={'xl'}>Mening arizalarim</Text>
              <Paper
                sx={(theme) => ({
                  background: theme.colorScheme === 'dark' ? '' : theme.colors.blue[0],
                })}
                radius="xs"
                p="md"
                withBorder
              >
                <Text align="center" size={'sm'} weight={500}>
                  Mening arizalarim (0)
                </Text>
              </Paper>
              <Divider size={'xs'} />
              <Text size={'xl'}>Sozlamalar</Text>
              <Group position="apart" align={'center'}>
                <Text size={'md'} weight={500}>
                  Bildirishnomalar
                </Text>
                <Switch size="md" />
              </Group>
              <Text size={'sm'}>Arizangizni statuslaridan xabardor bo’lasiz.</Text>
              <Group position="apart" align={'center'}>
                <Text size={'md'} weight={500}>
                  Tungi rejim
                </Text>
                <Switch
                  size="md"
                  onChange={() => toggleColorScheme()}
                  color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
                  onLabel={<SunIcon height={16} color={theme.colors.yellow[4]} />}
                  offLabel={<MoonIcon height={16} color={theme.colors.blue[6]} />}
                />
              </Group>
            </Stack>
            <Stack sx={{ maxWidth: '800px', width: '100%' }}>
              <Text size={35} weight={500}>
                Bildirishnomalar
              </Text>
              <Pagination position="right" total={1} />
            </Stack>
          </Group>
        </Stack>
      </Container>
    </section>
  );
};

export default MyProfile;
