import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StopPlayDialog({open,handleClose}) {
  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className=' text-center ' sx={{minWidth:"280px",fontSize:"32px"}}>Призупинити послугу</DialogTitle>
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
        <DialogContent>
        <div className="p-4">
  <p className="text-xl mb-4">
    Важлива інформація щодо призупинення та відновлення послуг:
  </p>

  <p className="mb-4">
    Ми розуміємо, що іноді у вас можуть виникнути обставини, які вимагають тимчасового призупинення наших послуг. З радістю повідомляємо, що ви маєте можливість призупинити послуги протягом мінімального терміну – 1 місяця. Важливо зазначити, що ви можете в будь-який момент відновити послуги.
  </p>

  <p className="mb-4">
    Це надає вам гнучкість у керуванні своїм обліковим записом та можливість економії в тих випадках, коли ви тимчасово не використовуєте наші послуги.
  </p>

  <p className="mb-4">
    Якщо у вас виникли питання або вам потрібна додаткова інформація щодо процедури призупинення та відновлення послуг, будь ласка, звертайтеся до нашої служби підтримки. Ми завжди готові допомогти вам у зручний для вас спосіб.
  </p>
</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}sx={{color:'black'}}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}