import '../styles/Header.sass'
import { Github } from '../icons/Github'
import { Linkedin } from '../icons/Linkedin';
import {Box} from "./Box";
import {useState} from "react";
import {Mail} from "../icons/Mail";
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";

export function Header(props) {
    const [open, setOpen] = useState(false);
    const [openDl, setOpenDl] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }
    const handleCloseDl = () => {
        setOpenDl(false)
    }

    const onClickStart = () => {
            window.scrollTo({top: window.innerHeight + 120, behavior: "smooth"})
        setTimeout(() => window.scrollTo({top: window.innerHeight * 2 + 150, behavior: "smooth"}), 6000)
    }

    return <>
        <div className={`header d-flex justify-content-around w-100 eurostile pt-3 pb-3`}>
        <div className={"header-name col-4"}>
            <div className={"logo-container"}>
                <Box />
            </div>
            <div className={"clickable"} onClick={props.onClick} style={{marginLeft: '1%'}}>
                {props.name ? props.name : "NO NAME"}
            </div>
        </div>
        <div className={"headline col-6 justify-content-end header-links d-flex "}>
            <Snackbar
                open={openDl}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                autoHideDuration={3000}
                onClose={handleCloseDl}
                key={'bottomcenter'}
            >
                <Alert onClose={handleCloseDl} severity="success" sx={{ width: '100%' }}>
                    Resume downloaded
                </Alert>
            </Snackbar>
                    <div onClick={() => {
                        setOpenDl(true)
                    }} className={"eurostile mr-3 clickable"}>
                        <a href={"./cv_thomas_garcia.pdf"} download={true}>
                            download resume
                        </a>

                    </div>
                    <div className={"contact-button eurostile pl-2 pr-2 d-flex  align-items-baseline"}>
                        <div onClick={() => {
                            navigator.clipboard.writeText("thomas.garcia@epitech.eu")
                            setOpen(true)
                        }} className={"pr-2"}>
                            contact me
                        </div>
                        <Mail />
                    </div>
                    <Snackbar
                        open={open}
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        key={'bottomcenter'}
                    >
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Email copied to clipboard
                        </Alert>
                    </Snackbar>
                </div>
    </div>
        <div className={"external-links"}>
            <div className={"d-flex align-items-end"}>
                <div className={"line-links-large"} />
                <div className={"line-links-medium ms-3"} />
                <div className={"line-links-small"}/>
            </div>
            <Github onClick={() => window.open("https://github.com/ThomasGrc/website-uxd")}/>
            <Linkedin onClick={() => window.open("https://www.linkedin.com/in/thomas-garcia-4b8016180/")}/>
            <div onClick={() => onClickStart()} className={"eurostile clickable text-red"}>
                START
            </div>
        </div>
    </>
}
