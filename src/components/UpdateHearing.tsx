// UpdateHearing.tsx
import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import { Stack,Group } from '@mantine/core';

interface UpdateHearingProps {
  hearing: any;
  onUpdate: (processNumber: string, updatedHearing: any) => void;
}

const UpdateHearing: React.FC<UpdateHearingProps> = ({ hearing, onUpdate }) => {
  const [updatedHearing, setUpdatedHearing] = useState({ ...hearing });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedHearing((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateHearing = () => {
    onUpdate(hearing.processNumber, updatedHearing);
  };

  return (
      <Group justify='center' className='flex space-y-4'>
      <TextInput
        label="Process Number"
        name="processNumber"
        value={updatedHearing.processNumber}
        onChange={handleInputChange}
        disabled
      />
      <TextInput label="Date" name="date" value={updatedHearing.date} onChange={handleInputChange} />
      <TextInput label="Court" name="court" value={updatedHearing.court} onChange={handleInputChange} />
      <TextInput
        label="Correspondent"
        name="correspondent"
        value={updatedHearing.correspondent}
        onChange={handleInputChange}
      />
      <Button onClick={handleUpdateHearing}>Update Hearing</Button>
      </Group>
  );
};

export default UpdateHearing;
