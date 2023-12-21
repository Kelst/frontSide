import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import useInfoStore from '../../store/infoStore'

export default function CustomAlert() {
  const open=useInfoStore(state=>state.openAlert)
  const message=useInfoStore(state=>state.messageAlert)
  const type=useInfoStore(state=>state.typeAlert)
  const handleClose=useInfoStore(state=>state.hideAllert)

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}  key={'top' + 'center'}  anchorOrigin={{vertical:'top',horizontal:'center' }}>
    <Alert onClose={handleClose} severity={type==0?'error':type==1?'info':'success'} sx={{ width: '100%' }}>
    {message}
  </Alert>
    </Snackbar>

  )
}
