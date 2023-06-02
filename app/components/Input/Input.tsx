import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Text } from '../Text';

export const Input = (props: TextFieldProps) => <TextField 
    sx={{ my: 1}}
    size='small'
    id="outlined-basic"
    variant="outlined"
    error={!!props.error}
    {...props}
/>
    