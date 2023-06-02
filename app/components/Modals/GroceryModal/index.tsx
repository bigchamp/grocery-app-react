import React from 'react';
import { useForm, Controller } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {Box, FormControl, Modal as MUIModal} from '@mui/material'

import {Button, Input, Text, Loader} from '../..';
import { getGroceryQuery, updateGroceryQuery } from '@/app/services/queries';


interface ModalProps {
    open: boolean;
    id: number | null;
    handleClose: () => void;
}

export const GroceryModal = ({open, id, handleClose}: ModalProps) => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange'
    });
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
                        render={({ field }) => <Input 
                            error={!!errors.title}
                            label='Grocery name'
                            type='text'
                            {...field}
                            ref={null}
                        />}
                        rules={{required: true}}
                    />
                    <Controller
                        name="amount"
                        defaultValue={grocery?.amount || 0}
                        control={control}
                        render={({ field }) => <Input 
                            error={!!errors.amount}
                            label='Amount'
                            type='number'
                            {...field}
                            ref={null}
                            />}
                        rules={{required: true}}
                    />
                    <Button onClick={handleSubmit(onSubmit)} disabled={!isValid} type='submit'>{id ? 'Save' : 'Add'}</Button>
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