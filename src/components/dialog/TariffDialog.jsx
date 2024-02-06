import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GlazmorphizmCard from '../glazmorphizmCard/GlazmorphizmCard';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TariffDialog({open,handleClose,handleAction,tarriffList}) {
  return (
    <React.Fragment  >
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle className=' text-center ' sx={{minWidth:"280px",fontSize:"18px"}}>Доступні тарифні плани</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent  >
        <GlazmorphizmCard tarriffList={tarriffList}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}sx={{color:'black'}}>Ок</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}