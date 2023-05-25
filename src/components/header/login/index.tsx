import { Alert, Box, Notification, Stack, Tabs, Text } from '@mantine/core';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import DatePicker from '../../date-picker';
import Modal from '../../modal';
import StyledTabs from '../../tabs';
import TextInput from '../../text-input';
import { CalendarIcon } from '@modulz/radix-icons';
import NumberInput from '../../number-input';
import { useStyles } from './login.styles';
import Button from '../../button';
import PasswordInput from '../../password-input';
import { useCollectUser } from '../../../context/user/user.state';
import { loginAction } from '../../../context/user/user.action';
import { showNotification } from '@mantine/notifications';

interface LoginModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const LoginModal = ({ setOpen, open }: LoginModalProps) => {
  const { dispatch } = useCollectUser();
  const { classes } = useStyles();
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // @ts-expect-error
    if (e.target.tel.value.length && e.target.parol.value.length) {
      showNotification({
        title: `Ro'yxatdan o'tish`,
        message: "Siz ro'yxatdan muvaffaqiyatli o'tdingiz. ✋",
      });
      dispatch(loginAction('token123'));
      setOpen(false);
    }
  };
  const handleVerification = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(loginAction(''));
  };

  return (
    <Modal title="Kirish yoki ro'yxatdan o'tish" onClose={() => setOpen(false)} opened={open}>
      {/* <StyledTabs defaultValue="first">
        <Tabs.List grow>
          <Tabs.Tab value="first">First tab</Tabs.Tab>
          <Tabs.Tab value="second">Second tab</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">First panel</Tabs.Panel>
        <Tabs.Panel value="second">Second panel</Tabs.Panel>
      </StyledTabs> */}
      <StyledTabs defaultValue="Tizimga kirish">
        <Tabs.List grow>
          <Tabs.Tab value="Tizimga kirish">Tizimga kirish</Tabs.Tab>
          <Tabs.Tab value="Ro'yxatdan o'tish">Ro'yxatdan o'tish</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Tizimga kirish">
          <form onSubmit={handleLogin}>
            <Stack spacing={25}>
              <TextInput
                required
                name="tel"
                placeholder="Telefon raqamingiz"
                label="Telefon raqamingizni kiriting"
              />
              <PasswordInput
                name="parol"
                minLength={5}
                placeholder="Password"
                label="Password"
                required
              />
              <Text sx={{ cursor: 'pointer' }} align="right" size="xs" color="gray">
                Parolni unutdingizmi?
              </Text>
              <Button type="submit" className={classes.signUpBtn}>
                Kirish
              </Button>
            </Stack>
          </form>
        </Tabs.Panel>
        <Tabs.Panel value="Ro'yxatdan o'tish">
          <form onSubmit={handleVerification}>
            <Stack spacing={25}>
              <TextInput
                name="tel"
                required
                placeholder="Telefon raqamingiz"
                label="Telefon raqamingizni kiriting"
              />
              <DatePicker
                name="sana"
                maxDate={new Date(Date.now())}
                required={true}
                icon={<CalendarIcon />}
                label="Pasport berilgan sana"
                errorProps={{ 'aria-required': 'true' }}
                placeholder="Passport berilgan sanani kiriting"
                aria-required="true"
              />
              <NumberInput
                name="jshshir"
                required
                placeholder="JShShIRni kiriting"
                label="JShShIR"
                hideControls
              />
              <Box className={classes.alert}>
                {'SMS-xabar '}xizmati arizalarni ko'rib chiqish jarayonida arizani tasdqilash uchun
                mo'ljallangan. "SMS-xabar" xizmati uchun 40 so'm to'lov undiriladi. SMS xabar
                abonentning hisobida yetarli miqdorda mablag' bo'lsagina boradi.
              </Box>
              <Button type="submit" className={classes.signUpBtn}>
                Ro'yxatdan o'tish
              </Button>
            </Stack>
          </form>
        </Tabs.Panel>
      </StyledTabs>
    </Modal>
  );
};

export default LoginModal;
