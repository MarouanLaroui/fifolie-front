import React from 'react';
import { TextField } from '@mui/material';
import { FieldHookConfig, useField } from 'formik';

interface TextFieldPropsInterface {
  label: string;
}

function InputField(props: TextFieldPropsInterface & FieldHookConfig<string>) {
  const { label, type, placeholder } = props;
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
    sx={{
      input: { color: 'white' },
      "& .MuiInputLabel-root": {color: 'white'},//styles the label
      "& .MuiOutlinedInput-root": {
        "& > fieldset": { borderColor: "gray" },
      },
      "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
          borderColor: "whitesmoke"
        }
      }
    }}
  
      {...field}
      type={type}
      label={label}
      helperText={errorText}
      error={errorText.length > 0}
      placeholder={placeholder}
      fullWidth
    />
  );
}

export default InputField;
