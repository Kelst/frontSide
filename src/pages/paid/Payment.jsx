import React, { useState } from 'react'
import style from  "./Payment.module.css"
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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
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
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
   
    backgroundColor: 'black',
    marginBottom:"10px",
    marginTop:"10px",
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    backgroundColor: 'black',
  },
  display:"flex"
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
export default function Payment() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme(); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <section>

<div className='  md:block relative z-10   '>

<div className=' w-[1200px]' sx={{ width: '100',opacity:0.7 }} >
      <div sx={{ bgcolor: '' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable"

        >
          <StyledTab label="Оплати" />
          <StyledTab label="Зняття грошей" />
          <StyledTab label="Поповнення рахунку" />
        </StyledTabs>
        
        <div sx={{ p: 3 }} />
   
      </div>
    </div>
  
    <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
         className=' bg-slate-50  w-max-[1000px]  flex  justify-center items-center opacity-90 rounded-md'
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <Paid/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Withdrawal/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Pay/>
        </TabPanel>
      </SwipeableViews>
</div>

    </section>
  )
}
