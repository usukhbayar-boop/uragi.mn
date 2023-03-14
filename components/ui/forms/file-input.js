import Uploader from '@/components/ui/forms/uploader';
import { Controller } from 'react-hook-form';

const FileInput = ({ control, name, multiple }) => {
  return (
    <Controller 
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field: { ref, ...rest } }) => (
        console.log("fd")
      )}
    />
  );
};

export default FileInput;
