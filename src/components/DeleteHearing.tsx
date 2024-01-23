// DeleteHearing.tsx
import { Button } from '@mantine/core';

interface DeleteHearingProps {
  processNumber: string;
  onDelete: (processNumber: string) => void;
}

const DeleteHearing: React.FC<DeleteHearingProps> = ({ processNumber, onDelete }) => {
  const handleDeleteHearing = () => {
    onDelete(processNumber);
  };

  return (
    <div>
      <Button onClick={handleDeleteHearing}>Delete Hearing</Button>
    </div>
  );
};

export default DeleteHearing;
