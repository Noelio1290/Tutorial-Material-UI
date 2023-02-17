import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Se puede fumar Mota en el trayecto del RTP?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Claro que se puede!, solo que no te vea el 
                conductor por que te baja y si vas a fumar 
                procura llevar para todos.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>La mota se compra alla o te la dan en el viaje?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                La mota la tienes que llevar tu, si llevas a tu dealer
                 se te hace un descuento del 10% en tu proxima ruta.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
            <Typography>puedo llevar a mi abuelita?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                claro que si, si tu abuela disfruta el cotorreo llevala!!, 
                "En caso de correteada por rateros no 
                nos hacemos cargo de tu abuelita"
            </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  );
}