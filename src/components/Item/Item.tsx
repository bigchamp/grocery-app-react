import React from 'react'
import {
  IconButton,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
} from '@mui/material'

import { useDeleteGrocery, useUpdateGrocery } from '@hooks'
import { DeleteIcon, EditIcon } from '@assets/Icons'

interface ItemProps {
  item: GroceryType
  onClickEdit: (id: number) => void
}

export const Item = ({ item, onClickEdit }: ItemProps) => {
  const isChecked = !!item.isChecked
  const listItemTextStyle = isChecked ? { textDecoration: 'line-through' } : {}

  const { mutate: updateGrocery } = useUpdateGrocery()
  const { mutate: deleteGrocery } = useDeleteGrocery()

  const onClickCheckbox = () => {
    updateGrocery({
      ...item,
      isChecked: !item.isChecked,
    })
  }

  const onClickDelete = () => {
    deleteGrocery(item.id)
  }

  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton onClick={onClickDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <IconButton onClick={onClickCheckbox}>
        <Checkbox checked={isChecked} />
      </IconButton>
      <ListItemText sx={listItemTextStyle} primary={item.title} />
      <Typography>{item.amount}</Typography>
      <IconButton disabled={isChecked} onClick={() => onClickEdit(item.id)}>
        <EditIcon />
      </IconButton>
    </ListItem>
  )
}
