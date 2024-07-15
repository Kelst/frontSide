import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Bay from '../../assets/bay.png'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import AddServiceMake from './AddServiceMake';
import useInfoStore from '../../store/infoStore'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddService({open,handleClose}) {
  const setShowCursor=useInfoStore(state=>state.setShowCursor)

   const [openMakeService,setOpenMakeService]=useState(false);
   const handleShowDialog=()=>{
    setOpenMakeService(true)
   }
   const handleCloseShowDialog=()=>{
    setOpenMakeService(false)
   }
   React.useEffect(()=>{
    setShowCursor(false)
   },[])
  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className=' text-center ' sx={{minWidth:"280px",fontSize:"32px"}}>{"Додаткові послуги"}</DialogTitle>
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
  <h2 className="text-2xl font-bold mb-4">Вартість додаткових послуг Intelekt:</h2>

  <ul className="list-disc pl-6 mb-6">
    <li className="mb-2">Налаштування роутерів, ТВ-приставок в офісах провайдера Intelekt – безкоштовно.</li>
    <li className="mb-2">Налаштування основного роутера технічним спеціалістом з виїздом до абонента – 200 грн.</li>
    <li className="mb-2">Підключення кабелем (до 10 м.) та налаштування ТВ-приставок, телевізорів технічним спеціалістом з виїздом до абонента – безкоштовно.</li>
    <li className="mb-2">Підключення послуги “Статична IP адреса” – 50 грн/міс.</li>
  </ul>

  <h2 className="text-2xl font-bold mb-4">Побудова та обслуговування локальних мереж абонента:</h2>

  <p className="mb-2">Перша година (оплата за транспортні витрати, компенсація оплати часу монтажників у дорозі, робота монтажників – у вартість включається робота монтажників від 1 хв. до 60 хв. у абонента) – 500 грн.</p>
  <p className="mb-2">Друга та наступні години – 300 грн./година. За межами м. Чернівці – додатково 10 грн. за 1 км. від м. Чернівці.</p>

  <p className="mt-6">
    Якщо Ви бажаєте замовити додаткову послугу (виїзд майстра, тощо), скористайтесь кнопкою 'Продовжити' та слідуйте інструкціями !
  </p>
</div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleShowDialog} sx={{color:'black'}}>Продовжити</Button>
          <Button onClick={()=>{handleClose();setShowCursor(true)}} sx={{color:'black'}}>Закрити</Button>
        </DialogActions>
      </Dialog>
      <AddServiceMake open={openMakeService} handleCloseService={()=>handleClose()} handleClose={handleCloseShowDialog} />
    </React.Fragment>
  );
}