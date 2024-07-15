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

export default function ControllPanelDialog({open,handleClose,handleAction}) {
  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className=' text-center ' sx={{minWidth:"280px",fontSize:"32px"}}>Help</DialogTitle>
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
        <div className="max-w-2xl mx-auto p-8  pt-0">
      <h2 className="text-2xl font-bold ">Очистити MAC</h2>
      <p className="text-gray-700 mb-2">
      Видалити MAC-адресу поточного пристрою, щоб ви могли підключити новий, наприклад, при заміні роутера.
      </p>
      <h2 className="text-2xl font-bold mb-2">Встановити кредит</h2>
      <p className="text-gray-700 mb-2">
      Якщо ви не встигли оплатити інтернет, у вас є можливість продовжити його дію на 5 днів.      </p>
      <h2 className="text-2xl font-bold ">Додаткові послуги</h2>
      <p className="text-gray-700 mb-2">
      Ви можете залишити заявку на додаткові послуги, налаштування мережі,роутера,підключення пристроїв кабелем, та інше 
      </p>
      <h2 className="text-2xl font-bold ">Статична IP</h2>
      <p className="text-gray-700 mb-2">
      Незмінна IP-адреса для підключення до інтернету. Це означає, що кожного разу, коли ви підключаєтеся до мережі, вам присвоюється одна й та сама IP-адреса.
      </p>
      <h2 className="text-2xl font-bold ">Тарифні плани</h2>
      <p className="text-gray-700 mb-2">
        Ви можете вибрати для себе оптимальний тарифний план який вам доступний.
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