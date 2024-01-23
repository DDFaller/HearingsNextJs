// components/ApiTable.js
import React from "react";
import { Table, Button } from "@mantine/core";
import { Hearing } from "@/interfaces/Hearing";


// Defining the props interface for the HearingsTable component
interface HearingsTableProps {
  hearings: Hearing[];
  onSelect: (hearing: Hearing) => void;
}

const HearingsTable: React.FC<HearingsTableProps> = ({ hearings,  onSelect }) => {
  // Function to handle selecting a hearing and triggering the onSelect callback
  const handleSelect = (hearing: Hearing) => {
    onSelect(hearing);
  };
  // Mapping the hearings array to table rows
  const rows = hearings.map((element: Hearing) => (
    <Table.Tr key={element.processNumber}>
      <Table.Td>{element.processNumber}</Table.Td>
      <Table.Td>{element.date.substring(0,9)}</Table.Td>
      <Table.Td>{element.date.substring(9,21)}</Table.Td>
      <Table.Td>{element.court}</Table.Td>
      <Table.Td>{element.correspondent}</Table.Td>
      <Table.Td>
        <Button onClick={() => handleSelect(element)}>Edit</Button>
      </Table.Td>
    </Table.Tr>
  ));

  // JSX structure of the HearingsTable component
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Número do processo</Table.Th>
          <Table.Th>Data</Table.Th>
          <Table.Th>Hora</Table.Th>
          <Table.Th>Comarca</Table.Th>
          <Table.Th>Correspondente</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows}
      </Table.Tbody>
    </Table>
  );
};

export default HearingsTable;
