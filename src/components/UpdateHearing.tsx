// UpdateHearing.tsx
import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import { Stack,Group } from '@mantine/core';

// Defining the props interface for the UpdateHearing component
interface UpdateHearingProps {
  hearing: any;
  onUpdate: (processNumber: string, updatedHearing: any) => void;
}

// Functional component representing a form to update a hearing
const UpdateHearing: React.FC<UpdateHearingProps> = ({ hearing, onUpdate }) => {
  const [updatedHearing, setUpdatedHearing] = useState({ ...hearing });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedHearing((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleUpdateHearing = () => {
    onUpdate(hearing.processNumber, updatedHearing);
  };
  
  // JSX structure of the UpdateHearing component
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
      </Group>
  );
};

export default UpdateHearing;
