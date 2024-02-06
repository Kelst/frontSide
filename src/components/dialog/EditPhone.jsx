import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { MuiTelInput } from 'mui-tel-input';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const steps = ['Введіть номер телефону', 'Підтвердження номеру телефону'];
import StepperPhoneChange from '../stepper/StepperPhoneChange';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditPhone({open,handleClose,handleAction}) {
  const [phone,setPhone]=React.useState('')
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
if(activeStep < steps.length - 1)
 {   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);}
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handlePhoneChange = (newValue) => {
    setPhone(newValue)
  }
  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
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
        <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">
        Введіть номер телефону
        </h2>
        <Box sx={{ width: '100%',display:'flex',flexDirection:"column" }}>
      <Stepper 
      orientation="vertical"
      activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
       
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
   
        <React.Fragment>
        {activeStep !== steps.length - 1 ?  <MuiTelInput
            inputProps={{
              maxLength: 16,
            }}
            autoFocus
            fullWidth
            margin='normal'
            defaultCountry='UA'
            value={phone}
            onChange={handlePhoneChange}
            />
            :  
             <TextField
            id="outlined-helperText"
            label="КОД"
            defaultValue=""
            helperText="введіть код з смс"
            sx={{
              marginTop:2
            }}
          />}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Назад
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{color:'black'}} disabled={phone.replace(/\s+/g, '').replace(/^\+/, '').length<12}>
              {activeStep === steps.length - 1 ? 'Підтвердити' : 'Далі'}
            </Button>
          </Box>
        </React.Fragment>
    
    </Box>
      
    </div>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose}sx={{color:'black'}} > закрити</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}