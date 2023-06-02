import React from 'react';
import { useForm, Controller } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {Box, FormControl, Modal as MUIModal} from '@mui/material'

import {Button, Input, Text, Loader} from '..';
import { getGroceryQuery, updateGroceryQuery } from '@/app/services/queries';


interface ModalProps {
    open: boolean;
    id: number | null;
    handleClose: () => void;
}

export const GroceryModal = ({open, id, handleClose}: ModalProps) => {
    const { control, handleSubmit } = useForm();
    const queryClient = useQueryClient();
    const {isLoading, data: grocery} = useQuery(getGroceryQuery(id))

    const { mutate } = useMutation(updateGroceryQuery(queryClient, id, handleClose)) 

    const onSubmit = (data: any) => {
        mutate({
            ...grocery,
            ...data
        })
    }

    if(!!id && isLoading) return <Loader /> 
    
    return (
        <MUIModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Text>{id ? 'Edit grocery' : 'Add new grocery'}</Text>
                <FormControl fullWidth >
                    <Controller
                        name="title"
                        defaultValue={grocery?.title || ''}
                        control={control}
                        render={({ field }) => <Input {...field} ref={null} label='Grocery name' />}
                    />
                    <Controller
                        name="amount"
                        defaultValue={grocery?.amount || 0}
                        control={control}
                        render={({ field }) => <Input {...field} ref={null} label='Amount' />}
                    />
                    <Button onClick={handleSubmit(onSubmit)} type='submit'>{id ? 'Save' : 'Add'}</Button>
                </FormControl>
            </Box>
        </MUIModal>
    )
    
    
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };