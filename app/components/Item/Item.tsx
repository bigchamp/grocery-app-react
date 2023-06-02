import React from 'react';
import { IconButton, ListItem, ListItemText, Checkbox } from '@mui/material';

import { GroceryType } from '@/app/types';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface ItemProps {
    item: GroceryType;
    onClickEdit: (id: number) => void;
    onClickDelete: (id: number) => void;
    onClickCheckbox: (item: GroceryType) => void;
}


export const Item = ({ item, onClickEdit, onClickDelete, onClickCheckbox }: ItemProps) => {
    const isChecked = !!item.isChecked
    const listItemTextStyle = isChecked ? {textDecoration: 'line-through'} : {}
    return (
        <ListItem 
            divider
            secondaryAction={
                <>
                    <IconButton onClick={() => onClickDelete(item.id)}><DeleteIcon /></IconButton>
                </>
            }>
                <IconButton onClick={() => onClickCheckbox(item)}>
                    <Checkbox checked={isChecked} />
                </IconButton>
                <ListItemText sx={listItemTextStyle} disableTypography primary={item.title} />
                {item.amount}
                <IconButton disabled={isChecked} onClick={() => onClickEdit(item.id)}><EditIcon /></IconButton>
        </ListItem>
    )
}