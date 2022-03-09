import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ placeholder, defVal, setStatus }) {
  return (
    <Autocomplete
      disablePortal
      defaultValue={defVal}
      id="combo-box-demo"
      options={status_}
      sx={{ width: '100%' }}
      onChange={(e) => setStatus(e.target.outerText)}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const status_ = ['New','Ongoing','Done','On Hold','Cancelled'];
