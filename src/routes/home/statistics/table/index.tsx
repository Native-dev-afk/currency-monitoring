import { Box, Table } from '@mantine/core';
import { useStyles } from './table.styles';
import React, { Dispatch, SetStateAction } from 'react';
const ths = (
  <tr>
    <th>Qabul qilingan arizalar</th>
    <th>Rad etilgan</th>
    <th>Jami arizalar</th>
    <th>Ko'rib chiqilgan</th>
  </tr>
);
const elements = [1, 2, 3, 4, 5, 6];

interface TableProps {
  found: boolean;
  setFound: Dispatch<SetStateAction<boolean>>;
}

const TableStatistics = ({ found, setFound }: TableProps) => {
  const { classes } = useStyles();
  const randomNum1 = (num: number) => Math.floor(Math.random() * num);
  const randomNum2 = (num: number) => Math.floor(Math.random() * num);
  const randomNum3 = (num: number) => Math.floor(Math.random() * num);
  const randomNum4 = (num: number) => Math.floor(Math.random() * num);
  const rows = elements.map((element) => (
    <tr key={element}>
      <td>{randomNum1(element)}</td>
      <td>{randomNum2(element)}</td>
      <td>{randomNum3(element)}</td>
      <td>{randomNum4(element)}</td>
    </tr>
  ));

  return (
    <Box my={40} className={classes.wrapper}>
      <Table
        captionSide="bottom"
        striped
        highlightOnHover
        horizontalSpacing="xl"
        verticalSpacing="xl"
      >
        <thead>{ths}</thead>
        {found && <tbody>{rows}</tbody>}
        {/* <tfoot>{ths}</tfoot> */}
      </Table>
    </Box>
  );
};

export default TableStatistics;
