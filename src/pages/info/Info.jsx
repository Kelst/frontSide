import React, { useState } from 'react'
import style from  "./Info.module.css"
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Paid from '../../components/payment/Paid';
import Withdrawal from '../../components/payment/Withdrawal';
import Pay from '../../components/payment/Pay';
import PaymentDialog from '../../components/dialog/PaymentDialog';
import MapOffice from '../../components/Map/MapOffice';
import MyTaskViewer from '../../components/Task/MyTaskViewer';
import FAQ from '../../components/faq/FAQ';
import TV from '../../components/tv/TV';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    className=' flex justify-center items-center'
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}

    >
      {value === index && (
        <Box sx={{   }}>
          <Typography>{children}</Typography>
        </Box>
      )} 
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};




const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  position:'relative',
  zIndex:0,
  '& .MuiTabs-indicator': {
   
    backgroundColor: 'white',
    marginBottom:"10px",
    marginTop:"10px",
    
    
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    backgroundColor: 'black',
  },
 
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
     
    },
    '&.MuiTabs-indicator':{
      color:"black"
    }
  }),
);

export default function Info() {
  const [value, setValue] = React.useState(0);
  const [type, setType] = React.useState(0);
  const [openDialog,setOpenDialog]=React.useState(false) 
  const theme = useTheme(); 
    const handlePayDialogShow=(type)=>{
    setType(type)
    setOpenDialog(true)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <section>

<div className='md:block'>
<div className=''  >
      <div className=' relative  z-2'>
        <StyledTabs
          value={value}
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable">
          <StyledTab label="Мої заявки" />
          <StyledTab label="Підключи друга" />
          <StyledTab label="Офіси" />
          <StyledTab label="FAQ" />
          <StyledTab label="Телебачення" />
        </StyledTabs>
        
        <div sx={{ p: 3 }}  />
   
      </div>
    </div>
  
    <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
         className={style.animationBorderSM+' text-white'}
      >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <MyTaskViewer/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} >
        Підключи друга
        </TabPanel>
        <TabPanel  value={value} index={2} dir={theme.direction} >
        
        <MapOffice/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction} >
        <FAQ/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction} >
        <TV/>
        </TabPanel>
      
      </SwipeableViews>
      <PaymentDialog type={type} open={openDialog} handleClose={()=>setOpenDialog(false)}/>
</div>

    </section>
  )
}
