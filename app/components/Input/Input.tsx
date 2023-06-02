import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';


export const Input = (props: TextFieldProps) => 
    <TextField 
        sx={{ my: 1}}
        size='small'
        id="outlined-basic"
        variant="outlined"
        {...props}
    />