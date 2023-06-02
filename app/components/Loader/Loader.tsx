import React from 'react';
import { CircularProgress, CircularProgressProps, Container } from '@mui/material';

export const Loader = (props: CircularProgressProps) => <Container sx={containerStyle}>
    <CircularProgress sx={{my: 2}} {...props} />
</Container>

const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
}