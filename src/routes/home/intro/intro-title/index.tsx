import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginModal from '../../../../components/header/login';
import RightArrow from '../../../../components/icons/right-arrow.icon';
import { useCollectUser } from '../../../../context/user/user.state';
import { colors } from '../../../../styles/variables';
import { useStyles } from './intro-title.styles';

const IntroTitle = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { isLoggedIn } = useCollectUser();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    isLoggedIn ? router.push('/profile') : setOpen(true);
  };
  return (
    <Stack style={{ maxWidth: '654px', width: '100%' }} spacing={55} py={'121px'}>
      <Title order={1}>
        Valyuta narxlarini onlayn <span style={{ color: colors.text_light }}>kuzating va ayirboshlang!</span>
      </Title>
      {/* <Text size="md">Notarius nomidagi davlat mukofoti uchun onlayn ariza topshirish tizimi</Text> */}
      <Group>

        <Button onClick={handleClick} color={'yellow'} size="xl"
          sx={{ color: 'black', fontSize: '20px' }}>
          <Group position="apart" spacing={120} style={{ width: '100%' }}>
            <Text size="md">Valyuta ayirboshlash</Text>
            <RightArrow />
          </Group>
        </Button>
        <Button
          size="xl"
          sx={{ color: 'black', fontSize: '20px' }}
          onClick={() => router.push('/currency')}
          color={'yellow'}
        >
          Monitoring ko'rish
        </Button>
      </Group>
      {/* <Group spacing={9}>
        <Title order={3}>10</Title>
        <Text size="xs">Jami arizalar soni</Text>
      </Group> */}
      <LoginModal setOpen={setOpen} open={open} />
    </Stack>
  );
};

export default IntroTitle;
