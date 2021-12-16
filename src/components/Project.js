import '../styles/Project.sass'
import React, {useState} from 'react'
import AnimateHeight from "react-animate-height";
import ScrollAnimation from "react-animate-on-scroll";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Project(props) {
    const [height, setHeight] = useState(100)

    return <ScrollAnimation animateIn={"fadeInUp"} animateOut={"fadeOut"} duration={0.4 + props.delay ? props.delay : 0.} className={"project mb-5 eurostile"}>
            <div className={"d-flex"}>
                <div className={"col-5 p-0"}>
                    {props.children}
                </div>
                <div className={"col-7"}>
                    <div className={"title-project"}>TITLE</div>
                    {props.content}
                </div>
            </div>
               {/* <Accordion classes={"accordion"} disableGutters={true} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className={"eurostile default-color"}>Accordion 1</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={"default-color headline"}>
                            {props.content ? props.content : "no content to display"}
                        </div>
                    </AccordionDetails>
                </Accordion>*/}
    </ScrollAnimation>

}
