import '../styles/Header.sass'
import { Github } from '../icons/Github'
import { Linkedin } from '../icons/Linkedin';
import {Box} from "./Box";
import {useEffect, useState} from "react";

export function Header(props) {
    const [backgroundClass, setBackgroundClass] = useState("")
    const [phoneHeader, setPhoneHeader] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 1100)
            setPhoneHeader(true)
        const backgroundListener = () => {
            if (window.scrollY > 100)
                setBackgroundClass("header-background fade-in")
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
        <div className={"header-name"}>
            <div className={"logo-container"}>
                <Box />
            </div>
            <div className={"clickable"} style={{marginLeft: '1%'}}>
                {props.name ? props.name : "NO NAME"}
            </div>
        </div>
            {
                phoneHeader ? <div className={"d-flex phone-header flex-column justify-content-around p-1 pb-2 pt-2"}>
                        <div className={"header-button"}></div>
                        <div className={"header-button"}></div>
                    </div>

                    : <div className={"headline header-links d-flex "}>
                    <div className={"clickable"}>
                        SOUND VISUALIZER
                    </div>
                    <div className={"clickable"}>
                        TERRAIN GENERATOR
                    </div>
                    <div className={"clickable"}>
                        ADOBE XD
                    </div>
                </div>
            }

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