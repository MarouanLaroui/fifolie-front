import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export default function SearchBar(props: {
  setSearchedItemName: React.Dispatch<React.SetStateAction<string>>
}) {
  const { setSearchedItemName } = props;
  return (
    <TextField
      fullWidth
      id="input-with-icon-adornment"
      inputMode="search"
      type="text"
      placeholder="Recherche.."
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
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color='primary'/>
          </InputAdornment>
        ),
      }}
      onChange={(
        event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setSearchedItemName(event.currentTarget.value);
      }}
    />
  );
}
