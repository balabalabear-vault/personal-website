'use client';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


interface IJAccordion<T> {
    summaryElement: React.ElementType,
    summaryDisplayComponent: React.ReactNode,
}

export default function JAccordion<T extends IJAccordion<T>>({
    summaryElement,
    summaryDisplayComponent,
}: Readonly<IJAccordion<T>>) {

    const [expand, setExpand] = useState(false);

    return (
        <Accordion
            expanded={expand}
            slotProps={{ heading: { component: summaryElement } }}
            sx={{
                '&:hover': {
                    cursor: 'default'
                }
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon onClick={() => setExpand((prev) => !prev)}/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {summaryDisplayComponent}
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>

    )

}