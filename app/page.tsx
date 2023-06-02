"use client"

import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

// compoenents
import { Container, Grid } from '@mui/material'
import { Item } from './components/Item/Item'
import { GroceryModal } from './components/GroceryModal'

// types
import { GroceryType } from './types'
import { Button, Loader } from './components'
import { deleteGroceryQuery, getGroceriesQuery, markGroceryQuery } from './services/queries'


export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [groceryId, setGroceryId] = useState<number | null>(null);
  const queryClient = useQueryClient()

  // Queries can be stored in another file
  const { isLoading, error, data } = useQuery(getGroceriesQuery)  

  const { mutate: deleteGrocery } = useMutation(deleteGroceryQuery(queryClient))
  const { mutate: markGrocery } = useMutation(markGroceryQuery(queryClient)) 

  const onClickDelete = (id: number) => {
    deleteGrocery(id)
  }

  const onClickEdit = (id: number) => {
    setGroceryId(id)
    setOpen(!open)
  }

  const onHandleGroceryModal = () => {
    setOpen(!open)
    setGroceryId(null);
  }

  const onClickCheckbox = (item: GroceryType) => {
    markGrocery({
      ...item,
      isChecked: !item.isChecked 
    })
  }

  if (isLoading) return <Loader />
  if (error) return 'An error has occurred: ' + error

  return (
    <Container sx={{my: 3}}>
      <Grid container spacing={2}>
        {data.length > 0 && data.map((item: GroceryType) => (
          <Item
            key={item.id}
            onClickCheckbox={onClickCheckbox}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            item={item}
          />
        ))}
        <Button onClick={onHandleGroceryModal}>Add new grocery</Button>
        {open && <GroceryModal open={open} id={groceryId} handleClose={onHandleGroceryModal} />}
      </Grid>
    </Container>
  )
}
