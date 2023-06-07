import React from 'react'
import { Controller, FieldError, useFormContext } from 'react-hook-form'

import { TextField, TextFieldProps } from '@mui/material'

interface InputProps {
  inputError: FieldError | undefined
}

export const Input = (props: TextFieldProps & InputProps) => {
  const { control } = useFormContext()
  const { name, defaultValue, inputError, label } = props

  if (!name) return null
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value = '' } }) => (
        <TextField
          label={label}
          error={!!inputError}
          value={value}
          onChange={onChange}
          // {...field}
          helperText={inputError?.message}
        />
      )}
    />
  )
}
