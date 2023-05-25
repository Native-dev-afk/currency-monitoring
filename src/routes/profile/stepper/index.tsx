import { Button, Center, Container, Group, Stack, Stepper, Text, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import FirstStep from './first-step';
import SecondStep from './second-step';
import { useStyles } from './stepper.styles';

export interface AddStepperProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const AppStepper = ({ active, setActive }: AddStepperProps) => {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <Stepper
      color={'dark'}
      classNames={{
        content: classes.content,
        root: classes.root,
        step: classes.step,
        separator: classes.separator,
        separatorActive: classes.separatorActive,
        stepBody: classes.stepBody,
        stepCompletedIcon: classes.stepCompletedIcon,
        stepDescription: classes.stepDescription,
        stepIcon: classes.stepIcon,
        stepLabel: classes.stepLabel,
        stepLoader: classes.stepLoader,
        steps: classes.steps,
      }}
      active={active}
      onStepClick={setActive}
      breakpoint="sm"
    >
      <Stepper.Step label="Shaxsiy ma'lumotlar" allowStepSelect={active > 0}>
        <FirstStep setActive={setActive} active={active} />
      </Stepper.Step>
      <Stepper.Step label="Hujjatlar ro'yxati" allowStepSelect={active > 1}>
        <SecondStep setActive={setActive} active={active} />
      </Stepper.Step>
      <Stepper.Completed>
        <Stack align={'center'} my={100}>
          <Title
            mb={30}
            align="center"
            sx={(theme) => ({ color: theme.colors.green[5], fontWeight: 400 })}
            order={3}
          >
            Muvaffaqiyatli yakunlandi! 🎉
          </Title>
          <Text
            weight={500}
            sx={{ cursor: 'pointer' }}
            color={'blue'}
            size={'sm'}
            onClick={() => router.push('/')}
          >
            Bosh sahifaga o'tish
          </Text>
        </Stack>
      </Stepper.Completed>
    </Stepper>
  );
};

export default AppStepper;
