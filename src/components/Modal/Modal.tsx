import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  ReactElement,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import { Box, Modal as MUIModal } from '@mui/material'

interface ModalRefProps {
  toggle: () => void
  open: () => void
  close: () => void
  setId: (id: number) => void
}

const Modal: ForwardRefRenderFunction<ModalRefProps, PropsWithChildren> = (
  props,
  ref,
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [id, setId] = useState<number | null>(null)

  useImperativeHandle(
    ref,
    () => ({
      toggle: () => setIsOpen(!isOpen),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      setId: (id: number | null) => setId(id),
    }),
    [],
  )

  if (!isOpen) return null

  const renderChildren = () => {
    return React.cloneElement(props.children as ReactElement<any>, {
      id,
      closeModal: () => setIsOpen(false),
    })
  }

  return (
    <MUIModal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{ transform: 'translate(-50%, -50%)' }}
        position="absolute"
        p={4}
        boxShadow={24}
        bgcolor="background.paper"
        minWidth={400}
        top="50%"
        left="50%"
        border="2px solid #000"
      >
        {renderChildren()}
      </Box>
    </MUIModal>
  )
}

export default forwardRef(Modal)
