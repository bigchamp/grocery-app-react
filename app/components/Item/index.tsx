import React from 'react';
import { IconButton, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction } from '@mui/material';

import { GroceryType } from '@/app/types';

import CheckBox from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export const Item = (item: GroceryType) => {
    return (
        <ListItem 
            divider
            secondaryAction={
                <>
                    <IconButton><DeleteIcon /></IconButton>
                </>
            }>
                <IconButton><CheckBox /></IconButton>
                <ListItemText disableTypography primary={item.title} />
                {item.amount}
                <IconButton><EditIcon /></IconButton>
        </ListItem>
    )
}