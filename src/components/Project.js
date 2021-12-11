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

    return <ScrollAnimation animateIn={"fadeInUp"} animateOut={"fadeOut"} duration={0.4 + props.delay ? props.delay : 0.} className={"project eurostile pb-4"}>
            <div>
                {props.children}
            </div>
                <Accordion>
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
                </Accordion>

                {/*                <AnimateHeight
                    duration={ 500 }
                    height={ height }
                >
                    <div className={"eurostile m-3"}>
                        TITLE
                    </div>
                    <div className={"m-3"}>
                        {props.content}
                        {height == 'fit-content' ?
                            <span onClick={() => setHeight(100)}>
                                read less
                            </span> : <span onClick={() => setHeight('fit-content')}>
                                read more
                            </span>

                        }
                    </div>
                </AnimateHeight>*/}

    </ScrollAnimation>

}
