import React from 'react';
import {ButtonProps, Button as MUIButton} from '@mui/material'

export const Button = (props: ButtonProps) => 
    <MUIButton
        color='primary'
        variant='outlined'
        sx={{my: 1}}
        {...props}
    >
        {props.children}
    </MUIButton>