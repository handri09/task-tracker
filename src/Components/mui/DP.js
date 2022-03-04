import * as React from 'react';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';

export default function CustomInput(props) {
  const [value, setValue] = React.useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Custom input"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue)
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: !props.hide ? 'flex' : 'None', alignItems: 'center' }} >
            <input ref={inputRef} {...inputProps} className='bg-gray-200 m-0.5 border-2 border-black p-2 w-full' />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
