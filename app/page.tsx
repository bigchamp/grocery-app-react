"use client"

import styles from './page.module.css'
import { useQuery } from '@tanstack/react-query'
import { Button, Container, Grid } from '@mui/material'
import { GroceryType } from './types'
import { Item } from './components/Item'

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['groceries'],
    queryFn: () =>
      fetch('http://localhost:3001/groceries').then(
        (res) => res.json(),
      )
  })

  if(isLoading) return 'loading'
  if (error) return 'An error has occurred: ' + error

  return (
    <Container>
      <Grid container spacing={2}>
        {data.length > 0 && data.map((item: GroceryType) => <Item key={item.id} {...item} />)}
        <Button>Add new grocery</Button>
      </Grid>
    </Container>
  )
}
