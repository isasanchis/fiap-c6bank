import React, { useState } from 'react'
import { AlertColor, Snackbar } from '@mui/material'
import Alert from './Alert'

type SnackProps = {
  open: boolean,
  message: string,
  hide: number,
  severity?: AlertColor
}

export default function SnackBar(props: SnackProps) {
  const [open, setOpen] = useState<boolean>(props.open);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Snackbar open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.severity ? props.severity : "success"} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}
