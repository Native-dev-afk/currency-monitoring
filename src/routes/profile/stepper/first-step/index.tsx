import {
  Title,
  Text,
  Divider,
  Group,
  SimpleGrid,
  useMantineTheme,
  Stack,
  Center,
  Box,
} from '@mantine/core';
import { FormEvent } from 'react';
import { AddStepperProps } from '..';
import { AvatarImg } from '../../../../components/assets';
import DatePicker from '../../../../components/date-picker';
import Select from '../../../../components/select';
import TextInput from '../../../../components/text-input';

const FirstStep = ({ active, setActive }: AddStepperProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(1);
  };
  return (
    <form id="user-data" style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Text weight={500} size="xl">
        Shaxsiy ma'lumotlar
      </Text>
      <Divider color={'gray'} my={27} size={0.5} />
      <SimpleGrid
        breakpoints={[
          { minWidth: 755, cols: 2, spacing: 'sm' },
          { minWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <Select
          required
          name="Fuqarolik"
          label="Fuqarolik"
          value="O'ZBEKISTON"
          data={["O'ZBEKISTON"]}
          defaultValue="O'ZBEKISTON"
        />
        <Select
          required
          value="Toshkent shahri"
          label="Hozirda yashayotgan viloyat (shahar)"
          data={['Toshkent shahri']}
        />
      </SimpleGrid>
      <Divider color={'gray'} my={27} size={0.5} />
      <SimpleGrid
        breakpoints={[
          { minWidth: 755, cols: 2, spacing: 'sm' },
          { minWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <TextInput placeholder="JSShIR" required label="JShShIR" />
        <Select required value="O'ZBEK" label="Millati" data={["O'ZBEK"]} />
      </SimpleGrid>
      <Divider color={'gray'} my={27} size={0.1} />
      <SimpleGrid
        mt={20}
        breakpoints={[
          { minWidth: 755, cols: 3, spacing: 'xl' },
          { minWidth: 600, cols: 1, spacing: 'xl' },
        ]}
      >
        <Center>
          <img width={180} src={AvatarImg.src} alt="avatar" />
        </Center>
        <Stack>
          <TextInput required label="Ismi" placeholder="Ismi" />
          <TextInput required label="Otasining ismi" placeholder="Otasining ismi" />
        </Stack>
        <Stack>
          <TextInput required placeholder="Familiya" label="Familiya" />
          <DatePicker required placeholder="Tug'ilgan yilingiz" label="Tug'ilgan yilingiz" />
        </Stack>
      </SimpleGrid>
      <Divider color={'gray'} my={27} size={0.1} />
      <Group mb={40} position="right">
        <Box sx={{ width: '50%' }}>
          <TextInput
            infoText="Info text"
            required
            placeholder="Telefon raqami"
            label="Telefon raqami"
          />
        </Box>
      </Group>
    </form>
  );
};

export default FirstStep;
