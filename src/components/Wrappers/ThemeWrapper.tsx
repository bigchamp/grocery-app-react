import React, { PropsWithChildren } from 'react'
import { theme } from '@theme'
import { ThemeProvider } from '@mui/material/styles'

const ThemeWrapper = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeWrapper
