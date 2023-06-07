import { useRef } from 'react'

import { Container, Grid, Button } from '@mui/material'
import { GroceryForm, Item, Loader, Modal } from '@components'
import { useGroceries } from '@hooks'

type CountdownHandle = React.ElementRef<typeof Modal>

export default function Home() {
  const modalRef = useRef<CountdownHandle>(null)
  const { isLoading, error, data } = useGroceries()

  const onClickEdit = (id: number) => {
    modalRef.current?.setId(id)
    modalRef.current?.open()
  }

  const onClickAddGrocery = () => {
    modalRef.current?.setId(0)
    modalRef.current?.open()
  }

  if (isLoading) return <Loader />
  if (error) return 'An error has occurred: ' + error

  return (
    <Container sx={{ my: 3 }}>
      <Grid container spacing={2}>
        {data.length > 0 &&
          data.map((item: GroceryType) => (
            <Item key={item.id} onClickEdit={onClickEdit} item={item} />
          ))}
        <Button onClick={onClickAddGrocery}>Add new grocery</Button>
        <Modal ref={modalRef}>
          <GroceryForm />
        </Modal>
      </Grid>
    </Container>
  )
}
