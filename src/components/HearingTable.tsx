// components/ApiTable.js
import React from "react";
import { Table } from "@mantine/core";
import { Hearing } from "@/interfaces/Hearing";

interface HearingsTableProps {
  hearings: Hearing[];
}

const HearingsTable: React.FC<HearingsTableProps> = ({ hearings }) => {
  const rows = hearings.map((element: Hearing) => (
    <Table.Tr key={element.processNumber}>
      <Table.Td>{element.processNumber}</Table.Td>
      <Table.Td>{element.date.substring(0,9)}</Table.Td>
      <Table.Td>{element.date.substring(9,21)}</Table.Td>
      <Table.Td>{element.court}</Table.Td>
      <Table.Td>{element.correspondent}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Número do processo</Table.Th>
          <Table.Th>Data</Table.Th>
          <Table.Th>Hora</Table.Th>
          <Table.Th>Comarca</Table.Th>
          <Table.Th>Correspondente</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default HearingsTable;
