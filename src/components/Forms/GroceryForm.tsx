import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { FormControl, Button, Typography } from '@mui/material'
import { Input, Loader } from '@components'

import { useCreateGrocery, useGrocery, useUpdateGrocery } from '@hooks'

const schema = yup.object().shape({
  title: yup.string().required(''),
  amount: yup
    .number()
    .positive()
    .typeError('you must specify a number')
    .required()
    .test(
      'no-leading-zero',
      'Leading zero is not allowed',
      ({}, context) =>
        context.originalValue &&
        !context.originalValue.toString().startsWith('0'),
    ),
})

const Form = ({ grocery, isNewGrocery, onSubmit }: GroceryFormProps) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      ...grocery,
      isChecked: false,
    },
  })

  const {
    handleSubmit,
    formState: { isValid, errors },
  } = methods

  return (
    <>
      <Typography>
        {isNewGrocery ? 'Add new grocery' : 'Edit grocery'}
      </Typography>
      <FormControl fullWidth>
        <FormProvider {...methods}>
          <Input label="Grocery name" name="title" inputError={errors.title} />
          <Input label="Amount" name="amount" inputError={errors.amount} />
        </FormProvider>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          type="submit"
        >
          {isNewGrocery ? 'Add' : 'Save'}
        </Button>
      </FormControl>
    </>
  )
}

export const GroceryForm = ({ id, closeModal }: GroceryProps) => {
  const { isLoading, data: grocery } = useGrocery(id)
  const { mutate: createGrocery } = useCreateGrocery()
  const { mutate: updateGrocery } = useUpdateGrocery()
  const isNewGrocery = !id

  const onSubmit = (values: GroceryType) => {
    const data = {
      ...grocery,
      ...values,
    }
    isNewGrocery
      ? createGrocery(data, {
          onSuccess: () => closeModal && closeModal(),
        })
      : updateGrocery(data, {
          onSuccess: () => closeModal && closeModal(),
        })
  }

  if (!isNewGrocery && isLoading) return <Loader />

  return (
    <Form onSubmit={onSubmit} grocery={grocery} isNewGrocery={isNewGrocery} />
  )
}
