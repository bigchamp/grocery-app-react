import React from 'react'
import {
  CircularProgress,
  CircularProgressProps,
  Container,
} from '@mui/material'

export const Loader = (props: CircularProgressProps) => (
  <Container sx={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress sx={{ my: 2 }} {...props} />
  </Container>
)
