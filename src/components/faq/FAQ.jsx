import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import Button from '@mui/material/Button';
export default function FAQ() {
  return (
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
  )
}
