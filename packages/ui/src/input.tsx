import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';

export const Input = ({ children }: { children: React.ReactNode }) => {
  return (
    <TextField.Root placeholder="Search the docs…">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
};
