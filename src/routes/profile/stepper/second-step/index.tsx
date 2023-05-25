import { Text, Divider, SimpleGrid, Stack } from '@mantine/core';
import { FormEvent } from 'react';
import { AddStepperProps } from '..';
import DatePicker from '../../../../components/date-picker';
import FileInput from '../../../../components/file-input';
import Select from '../../../../components/select';
import TextInput from '../../../../components/text-input';

interface StepProps extends AddStepperProps {
  title?: string;
}

const SecondStep = ({ title, active, setActive }: StepProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(2);
  };
  return (
    <form id="documents" onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Text weight={500} mb={10} size="xl">
        {title ?? "Hujjatlar ro'yxati"}
      </Text>
      <Divider color={'gray'} my={27} size={0.5} />
      <Stack spacing={30}>
        <FileInput
          required
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Ariza shartlari"
          placeholder="Ariza"
          infoText={`Ariza yoritilishi lozim boʼlgan jihatlar:
- nomzodning familiyasi, ismi va otasining ismi, tugʼilgan yili, sanasi, millati (fuqarolik pasporti yoki tugʼilganlik toʼgʼrisidagi guvohnoma boʼyicha yozish);
- oʼqish joyining rasmiy nomi hamda nomzod qaysi sinf yoki bosqichda oʼqishi;
- nomzodning qaysi yoʼnalish boʼyicha tavsiya etilayotganligi;
- nomzod tavsiya etilayotgan yoʼnalishning aynan qaysi sohasi yoki turi bilan shugʼullanishi (Masalan: adabiyot yoʼnalishining – sheʼriyat yoki publitsistika sohasi, madaniyat yoʼnalishining – suxandonlik, jurnalistika, stsenarist sohasi, sport yoʼnalishining – badiiy gimnastika, suzish, tennis, shaxmat turi, sanʼat yoʼnalishining – tasviriy yoki amaliy sanʼat, anʼanaviy qoʼshiqchilik, fortepiano sohasi, taʼlim yoʼnalishining – kimyo, matematika, ona tili va adabiyot, jamoatchilik faoliyati yoʼnalishining – tadbirkorlik, fermerlik, yoshlar ittifoqi faollari va boshqa sohalari); 
- asosiy yoʼnalishi boʼyicha erishgan yutuqlarining yillar ketma-ketligida berilishi, tanlovlarning qaerda, qaysi tashkilot tomonidan, kimlar oʼrtasida, qanday nom bilan oʼtkazilganligi, nechanchi oʼrinni egallaganligi hamda nima bilan taqdirlanganligi; 
- asosiy yoʼnalishidan tashqari boshqa yoʼnalishlar boʼyicha erishgan yutuqlari;
- yetakchilik qobiliyati, ijtimoiy faolligi, tashabbuskorligini ochib beradigan jihatlari 
va yutuqlari;
- axborot-kommunikatsiya texnologiyalaridan qay darajada foydalanishi (masalan: turli ijtimoiy tarmoqlari, veb-sahifalar va h.k.);
- sportning qaysi turi bilan shugʼullanishi 
va erishgan yutuqlari; 
- sportchilarga yozilgan tavsifnomada erishgan yutuqlari bilan birga nomzod Oʼzbekiston milliy terma jamoasi aʼzosi hamda sport unvoniga (sport ustaligiga nomzod, sport ustasi, xalqaro toifadagi sport ustasi) ega boʼlsa, buni qayd etish zarur.`}
          label="Arizani yuklang"
        />
        {/* <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi"
          placeholder="Ma'lumotnoma"
          required
          infoText={`Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi
- axborot-kommunikatsiya texnologiyalaridan qay darajada foydalanishi (masalan: turli ijtimoiy tarmoqlari, veb-sahifalar va h.k.);
- sportning qaysi turi bilan shugʼullanishi 
va erishgan yutuqlari; 
- sportchilarga yozilgan tavsifnomada erishgan yutuqlari bilan birga nomzod Oʼzbekiston milliy terma jamoasi aʼzosi hamda sport unvoniga (sport ustaligiga nomzod, sport ustasi, xalqaro toifadagi sport ustasi) ega boʼlsa, buni qayd etish zarur.`}
          label="Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi"
        /> */}
        <Divider color={'gray'} my={5} size={0.5} />


      </Stack>
    </form>
  );
};

export default SecondStep;
