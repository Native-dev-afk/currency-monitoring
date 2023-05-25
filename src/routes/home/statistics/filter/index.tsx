import { Box, Button, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { UpdateIcon } from '@modulz/radix-icons';
import { Dispatch, SetStateAction, useState } from 'react';
import Select from '../../../../components/select';
import { useStyles } from './filter.styles';

interface FilterProps {
  found: boolean;
  setFound: Dispatch<SetStateAction<boolean>>;
}
const Filter = ({ found, setFound }: FilterProps) => {
  const { classes } = useStyles();
  const [region, setRegion] = useState<string>('');
  const [district, setDistrict] = useState('');
  const clearFilter = () => {
    setFound(false);
    setRegion('');
    setDistrict('');
  };
  const QoraqalpoqTuman = [
    'Ellikqalʼa tumani',
    'Kegeyli tumani',
    'Moʻynoq tumani',
    'Nukus tumani',
    'Qanlikoʻl tumani',
    'Qoʻngʻirot tumani',
    'Qoraoʻzak tumani',
    'Shumanay tumani',
    'Taxtakoʻpir tumani',
    'Toʻrtkoʻl tumani',
    'Xoʻjayli tumani',
    'Taxiatosh tumani',
    'Boʻzatov tumani',
    'Amudaryo tumani',
    'Beruniy tumani',
    'Chimboy tumani',
  ];
  const viloyatlar = [
    'Andijon viloyati',
    'Buxoro viloyati',
    'Fargʻona viloyati',
    'Jizzax viloyati',
    'Xorazm viloyati',
    'Namangan viloyati',
    'Navoiy viloyati',
    'Qashqadaryo viloyati',
    'Qoraqalpogʻiston Respublikasi',
    'Samarqand viloyati',
    'Sirdaryo viloyati',
    'Surxondaryo viloyati',
    'Toshkent viloyati',
  ];
  return (
    <Box>
      <Stack spacing={17} className={classes.filterHead} p={27}>
        <Group align={'center'} position={'apart'}>
          <Text weight={500} size="lg">
            Filtr
          </Text>
          <Text onClick={clearFilter} sx={{ cursor: 'pointer' }} size="sm" color="red">
            Filtrni tozalash
          </Text>
        </Group>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <Select
            placeholder="Viloyat nomini tanlang"
            searchable
            value={region}
            onChange={(e) => {
              setRegion(`${e}`);
            }}
            nothingFound="Topilmadi"
            data={viloyatlar}
          />
          <Select
            placeholder="Tuman nomini tanlang"
            searchable
            value={district}
            onChange={(e) => {
              setDistrict(`${e}`);
            }}
            disabled={!region.length}
            nothingFound="Topilmadi"
            data={QoraqalpoqTuman}
          />
          <Button
            leftIcon={<UpdateIcon width={24} height={24} />}
            sx={{ fontSize: '18px', fontWeight: 400 }}
            size="lg"
            onClick={() => {
              district.length && region.length && setFound(true);
            }}
          >
            Natijani qo'llash
          </Button>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Filter;
