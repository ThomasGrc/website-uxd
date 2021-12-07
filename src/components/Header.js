import '../styles/Header.sass'
import { Github } from '../icons/Github'
import { Linkedin } from '../icons/Linkedin';
import {Box} from "./Box";
import {useEffect, useState} from "react";
import {Mail} from "../icons/Mail";
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";

export function Header(props) {
    const [backgroundClass, setBackgroundClass] = useState("")
    const [phoneHeader, setPhoneHeader] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (window.innerWidth < 1100)
            setPhoneHeader(true)
        const backgroundListener = () => {
            if (window.scrollY > 100)
                setBackgroundClass("header- fe-in") //header-background fade-in
            else
                setBackgroundClass("fade-out")
            if (window.innerWidth < 1100)
                setPhoneHeader(true)
            else
                setPhoneHeader(false)
        }
        document.addEventListener('scroll', backgroundListener)
        document.addEventListener('resize', () => {console.log("resize")})

        return () => {
            window.removeEventListener('scroll', backgroundListener)
            window.removeEventListener('resize', () => {console.log("resize")})
        }

    }, [])

    return <>
        <div className={`header d-flex justify-content-around w-100 eurostile pt-3 pb-3  ${backgroundClass}`}>
        <div className={"header-name col-4"}>
            <div className={"logo-container"}>
                <Box />
            </div>
            <div className={"clickable"} style={{marginLeft: '1%'}}>
                {props.name ? props.name : "NO NAME"}
            </div>
        </div>
        <div className={"headline col-6 justify-content-end header-links d-flex "}>
{/*                <div className={"pr-3 clickable"}>
                    About me
                </div>*/}
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
                        key={'bottom' + 'center'}
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
        </div>
    </>
}