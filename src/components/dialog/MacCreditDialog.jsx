import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MacCreditDialog({open,handleClose,handleAction}) {
  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className=' text-center ' sx={{minWidth:"280px",fontSize:"32px"}}>Встановити кредит</DialogTitle>
        <DialogContent>
        <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Додаткові 5 днів Інтернету</h2>
      <p className="text-gray-700 mb-6">
        Одноразово продовжте свій Інтернет на цілих 5 днів за місяць, щоб завжди бути зв'язаними, коли це найбільше потрібно.
      </p>

      <h2 className="text-3xl font-bold mb-4">Одна унікальна можливість щомісяця</h2>
      <p className="text-gray-700 mb-6">
        Ця можливість доступна вам тільки один раз за календарний місяць, роблячи її винятковою та цінною.
      </p>
    </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}sx={{color:'black'}}>Продовжити послугу</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}