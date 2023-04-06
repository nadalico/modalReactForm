import { FC } from "react";
import { useController, Control } from "react-hook-form";
import { TextField } from "@mui/material";

type InputProps = {
  label: string;
  name: string;
  fullWidth?: boolean;
  //control: Control<any>;
};

const Input: FC<InputProps> = ({ label, name, fullWidth }) => {
  const { field, fieldState } = useController({
    name,

  });

  const { invalid, error } = fieldState;

  return (
    <TextField
      label={label}
      fullWidth={fullWidth}
      error={invalid}
      helperText={error?.message}
      {...field}
    />
  );
};

export default Input;
