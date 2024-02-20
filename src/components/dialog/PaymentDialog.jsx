import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CalculateIcon from '@mui/icons-material/Calculate';
import Bay from '../../assets/bay.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import DialogDiscount from './DialogDiscount';

const user={
  name:"Безкоровайний Владислав Андрійович",
  uid:"140278",
  status:"active",
  telegramId:"",
  phone:'380951470082',
  login:'vlad_b_1',
  adress:"Чернівці, Проспект Незалежності 116б кв 60",
  statusInternet:true,
  balance:"-5450",
  deposit:"0",
  monthlyPayment:"274",
  dateOfEndCredits:"2023-12-15",
  tariff:"ЧЕРНІВЦІ-КОМФОРТ-1000(309)_Internet+TV",
  lastPay:"2023-01-15  225 грн",
  ip:"192.5.4.7",
  duration:"+4 01:11:03",
  sendData:"767.85 GB",
  getData:"43.34 GB",
  subLogin:[
    {
      monthlyPayment:"230",
      balance:"-230",
      login:"vlad_b_1",
    },
    {
      monthlyPayment:"270",
      balance:"-270",
      login:"dorosh_ukr50",
    }
  ]
,
tariffAvaibles:[
    {month_fee:180,name:"ЧЕРНІВЦІ-КОМФОРТ-300(180)_Internet"},
    {month_fee:207,name:"ЧЕРНІВЦІ-КОМФОРТ-300(207)_Internet+TV"},
    {month_fee:190,name:"ЧЕРНІВЦІ-КОМФОРТ-500(190)_Internet"},
    {month_fee:213,name:"ЧЕРНІВЦІ-КОМФОРТ-500(213)_Internet+TV"},
    {month_fee:350,name:"ЧЕРНІВЦІ-КОМФОРТ-1000(350)_Internet"},
    {month_fee:309,name:"ЧЕРНІВЦІ-КОМФОРТ-1000(309)_Internet+TV"},
    ]

 }
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: 'black',
      
    },
  },
}));
export default function PaymentDialog({open,handleClose,type}) {

  const [login , setLogin] = React.useState('0');
  const [sumText , setSumText] = React.useState(user.subLogin[login].monthlyPayment);
  const [openDiscount,setOpenDiscount]=React.useState(false)
  const handleShowDiscoun=()=>{
    setOpenDiscount(true)
  }

  const handleChange = (event) => {
    setLogin(event.target.value);
    setSumText(user.subLogin[event.target.value].monthlyPayment)
  };
  return (
    <React.Fragment>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle className=' text-center ' sx={{minWidth:"280px",fontSize:"18px",letterSpacing:1.5}}>Спосіб оплати {type}</DialogTitle>
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
        <DialogContent className=' flex justify-center items-center '  >

    

<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label" sx={{marginBottom:'2000px'}}>Логін</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          input={<BootstrapInput />}

          value={login}
          label="Логін"
          onChange={handleChange}
        >
         
            {
                user.subLogin.map((e,index)=>{
                  return <MenuItem value={index}>{e.login} -  баланс <span className=' text-xl  font-bold '> -{e.monthlyPayment}</span> грн. </MenuItem>
                  
                })
            }
        
        
        </Select>
        <FormHelperText>Виберіть необхідний логін</FormHelperText>
        <div className=' flex  flex-col gap-1  sm:flex-row'>
        <TextField
          id="outlined-helperText"
          value={sumText}
          onChange={e=>setSumText(e.target.value)}
          type='number'
          defaultValue="Default Value"
          helperText="Рекомендована сума"
        sx={{marginTop:"20px"}}
        />
        <Button
        sx={{
          fontSize:'12px'
        }}
  color="primary"
  disabled={false}
  size="small"
  variant="filledTonal"
  endIcon={<CalculateIcon />}
  onClick={handleShowDiscoun}
>
  розрахувати 6/12/24 міс.
  </Button>
        </div>
      </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}sx={{color:'black'}}>Продовжити</Button>
        </DialogActions>
      </Dialog>
      
      <DialogDiscount open={openDiscount} handleAction={(sums)=>{
  setSumText(sums) }} 
              handleClose={()=>setOpenDiscount(false)} monthlyPayment={user.subLogin[login].monthlyPayment}/>
    </React.Fragment>
  );
}