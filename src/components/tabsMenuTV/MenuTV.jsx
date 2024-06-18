import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TvIcon from '@mui/icons-material/Tv';
import Accordion from '@mui/material/Accordion';
import Button from '@mui/material/Button';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MenuTV() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDownload = () => {
    // Необхідний код для скачування файлу
    // Наприклад, можна створити посилання для скачування
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://tv.intelekt.net/files/intelekt.apk';
    downloadLink.download = 'intelekt.apk';
    downloadLink.click();
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
        <Tabs className=' flex justify-center items-center' value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab   sx={{ 
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
          color: '#fff',
        },
        '&.Mui-focusVisible': {
         
        },
        '&.MuiTabs-indicator':{
          color:"black"
        }
      }} icon={<TvIcon className=' text-gray-600 ' />} label="intelekt tv" aria-label="phone" 
      {...a11yProps(0)}
    />
      <Tab sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-selected': {
    color: 'white'},borderRadius:"10px",'&.MuiTabs-indicator':{
        color:"white"
      },text:'white',":focus":{color:"white"}}}  icon={<TvIcon  className=' text-gray-600 '/>} aria-label="favorite" label="megogo" {...a11yProps(0)} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <div className='mb-2 flex items-center gap-2 flex-wrap '>
          <Tooltip title="Для пристроїв Android/Android TV" placement="bottom">
  <div>Звантажити apk файл</div></Tooltip>
        <Button       onClick={handleDownload}
 startIcon={<BrowserUpdatedIcon/>} sx={{color:"white",borderColor:"white",":hover":{borderColor:"red"}}} variant="outlined" >
        Download
      </Button>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=' font-bold'
        >
         1. ЦИФРОВА ЯКІСТЬ СУПУТНИКА
        </AccordionSummary>
        <AccordionDetails className=' font-thin text-sm'>
        ПОНАД 200 КАНАЛІВ ЦИФРОВОЇ ЯКОСТІ: КІНО, СПОРТ, НАУКА, МУЛЬТФІЛЬМИ, HD ТА БАГАТО ІНШОГО!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className=' font-bold'
        >
        2. ПЕРСОНАЛЬНИЙ ТЕЛЕ-ЕФІР
        </AccordionSummary>
        <AccordionDetails className=' font-thin text-sm'>
        ПЕРЕГЛЯДАЙТЕ ТЕЛЕПЕРЕДАЧІ, ЩО ПРОПУСТИЛИ ЗА ТИЖДЕНЬ У БУДЬ-ЯКИЙ ЧАС!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className=' font-bold'
        >
         
        3. БАТЬКІВСЬКИЙ КОНТРОЛЬ
        </AccordionSummary>
        <AccordionDetails className=' font-thin text-sm'>
        БЛОКУЙТЕ ДІТЯМ ДОСТУП ДО ПЕРЕГЛЯДУ НЕБАЖАНОГО КОНТЕНТУ
       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className=' font-bold'
        >
         4. ПАУЗА ПРЯМОГО ЕФІРУ
        </AccordionSummary>
        <AccordionDetails className=' font-thin text-sm'>
        ПРИЗУПИНЯЙТЕ ПРЯМИЙ ЕФІР ТА ПРОДОВЖУЙТЕ ПЕРЕГЛЯД КОЛИ ЗАБАЖАЄТЕ
       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className=' font-bold'
        >
        5. НАЙКРАЩИЙ КОНТЕНТ
        </AccordionSummary>
        <AccordionDetails className=' font-thin text-sm'>
        СТВОРЮЙТЕ ВЛАСНИЙ СПИСОК УЛЮБЛЕНИХ КАНАЛІВ
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className=' font-bold'
        >
      6. ДОДАТОК ДО ПРИСТРОЇВ
        </AccordionSummary>
        <AccordionDetails className=' font-thin text-sm'>
        ЗАВАНТАЖУЙ МОБІЛЬНИЙ ДОДАТОК НА СВІЙ ТЕЛЕФОН АБО ВАШ ТЕЛЕВІЗОР В 2 КЛІКИ        </AccordionDetails>
      </Accordion>
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Питання 1 
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SettingsIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Питання 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
      </CustomTabPanel>
    </Box>
  );
}